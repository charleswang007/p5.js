// https://openprocessing.org/sketch/941956


function drawMT(targetCanvas) {
  let r = random(0,43);
  let g = random(0,64);
  let b = 64;
  for (let i = 0; i < 10; i++) {
    let moving = random(1,5);
    targetCanvas.strokeWeight(moving);
    
    r = r-moving;
    g = g-moving;
    b = b-moving;
    
    r = constrain(r,0,255);
    g = constrain(g,153,255);
    b = constrain(b,153,255);
    
    targetCanvas.stroke(r,g,b,moving+5);
    let y = random(height/4,height-1);
    for (let x = 0; x < width; x++) {
      targetCanvas.line(x,y,x,height);
      y=y+random(-1*moving,moving);
      y=constrain(y,height/4,height-1);
    }
  }
  targetCanvas.fill(51,204,255,random(0,100));
  targetCanvas.noStroke();
  targetCanvas.rect(0,0,width,height);
}