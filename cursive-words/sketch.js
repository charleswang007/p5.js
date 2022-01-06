const fiddle = "CODE";

let noiseSlider;
let noiseText;

let zoff = 0;
let linePhaseX = 0;

function noisify(begin, end, increment, scalar, type) {
    let linePhaseY = 0;

    for (let i = begin; i < end; i += increment) {
        if (type === "CIRCLE") {
            const xoff = map(cos(i), -1, 1, 0, noiseSlider.value());
            const yoff = map(sin(i), -1, 1, 0, noiseSlider.value());

            const r = map(noise(xoff, yoff, zoff), 0, 1, scalar / 2, scalar * 2);
            let xx = r * sin(i);
            let yy = r * cos(i);

            vertex(xx, yy);
        } else if (type === "LINE") {
            x = map(noise(linePhaseX, linePhaseY), 0, 1, -noiseSlider.value() * 10, noiseSlider.value() * 10);

            vertex(x, i);
            linePhaseY += 0.033;
        }
    }

    zoff += 0.001;
    linePhaseX += 0.0025;
}

function halfCircle(x, y, scalar, rotation) {
    push();
    translate(x, y);
    rotate(rotation);
    beginShape();
    noisify(0, PI, 0.01, scalar, "CIRCLE");
    endShape();
    pop();
}

function fullCircle(x, y, scalar) {
    push();
    translate(x, y);
    beginShape();
    noisify(0, TWO_PI, 0.01, scalar, "CIRCLE");
    endShape(CLOSE);
    pop();
}

function someLine(x, y, distance = 50, ro = 0) {
    push();
    translate(x, y);
    rotate(ro);
    beginShape();
    noisify(-distance, distance, 1, 50, "LINE");
    endShape();
    pop();
}

function drawLetter(l, eDrawn) {
    switch (l) {
        case "C":
            halfCircle(100, height / 2, 50, PI);
            break;
        case "O":
            fullCircle(175, height / 2, 50);
            break;
        case "D":
            halfCircle(250, height / 2, 50);
            someLine(250, height / 2);
            break;
        case "E":
            let x = eDrawn ? 450 : 330;
            let y = -50;

            someLine(x, height / 2);
            for (let i = 0; i < 3; i++) {
                someLine(x + 20, height / 2 + y, 20, HALF_PI);
                y += 50;
            }
        default:
            break;
    }

}

function setup() {
    createCanvas(1500, 300);
    noiseSlider = createSlider(0, 10, 2, 0.1);
    noiseSlider.size(300);
    noiseText = createElement('h2');

    rectMode(CENTER);
}

function draw() {
    let eDrawn = false;
    background(0);

    noFill();
    strokeWeight(5);
    stroke(255);

    noiseText.html(`当前噪音: ${noiseSlider.value()}`);

    for (letter of fiddle) {
        drawLetter(letter, eDrawn);
        if (letter === "E" && !eDrawn) {
            eDrawn = true;
        }
    }
}