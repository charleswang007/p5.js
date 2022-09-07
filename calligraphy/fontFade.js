// processing convert to p5

let charIdx = 0;
let font;
let fontBG, mountainsBG;
let width = 1300;
let height = 750;
const sentenceArray = [];
const article = [
	'永和九年 歲在癸丑',
	'暮春之初 會於會稽山陰之蘭亭',
	'脩禊事也',
	'群賢畢至 少長咸集',
	'此地有崇山峻領 茂林脩竹',
	'又有清流激湍 映帶左右',
	'引以為流觴曲水 列坐其次',
	'雖無絲竹管弦之盛 一觴一詠',
	'亦足以暢敘幽情',
	'是日也 天朗氣清 惠風和暢',
	'仰觀宇宙之大 俯察品類之盛',
	'所以遊目騁懷 足以極視聽之娛',
	'信可樂也',
	'　　晉穆帝永和九年三月初',
	'　　　　　　　　　　 王羲之'
]


function preload() {
  	font = loadFont('font.ttf');
}

function setup(){
	createCanvas(width, height);
	smooth();
	colorMode(RGB, 255);
    frameRate(200);
	
	fontBG = createGraphics(width, height);
  	// mountainsBG = createGraphics(width, height);
	
	// static BG
	// drawMT(mountainsBG);
	// image(mountainsBG, 0, 0, width, height);
	
  	fontBG.textFont(font);

    for(let i=0; i < article.length; i++){
		sentenceArray[i] = new Sentence(article[i], (1200 - i*100), 100, i, charIdx);
		sentenceArray[i].formSentence();
		charIdx += sentenceArray[i].count;
    }
}


function draw() {
	image(fontBG, 0, 0, width, height);
	
	noStroke(); //這三行是星星逐漸淡入黑色
	fill(0, 12);
	rect(0, 0, width, height);
	
	//位移・旋轉・縮放等均以亂數方式來繪製星形
	translate(random(width), random(height));
	rotate(random(PI));
	scale(random(0.1, 0.5));
	
	//宣告x, y兩個陣列並賦值
	var x = [50, 29, 83, 17, 71]; //x座標是以A,B,C,D,E點的位置
	var y = [18, 82, 43, 43, 82]; //y座標是以A,B,C,D,E點的位置
	
	translate(-50, -50); //將星形座標變換成原點位置
	noStroke();
	fill(0, random(100, 255), random(200, 255)); //填色以藍綠亂數為主
	beginShape(); //5個A,B,C,D,E的頂點依序用直線來連接開始繪製
	for(var i = 0; i < x.length; i++) { //利用for迴圈依序處理
		vertex(x[i] + random(-5, 5), y[i] + random(-5, 5)); //各頂點
	}
	endShape(CLOSE); //結束繪製

	for(let sentence of sentenceArray){
		sentence.draw(fontBG);
	}
}