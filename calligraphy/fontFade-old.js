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
  	mountainsBG = createGraphics(width, height);
	
	// static BG
	drawMT(mountainsBG);
	image(mountainsBG, 0, 0, width, height);
	
  	fontBG.textFont(font);

    for(let i=0; i < article.length; i++){
			sentenceArray[i] = new Sentence(article[i], (1200 - i*100), 100, i, charIdx);
			sentenceArray[i].formSentence();
			charIdx += sentenceArray[i].count;
    }
}


function draw() {
	image(fontBG, 0, 0, width, height);
	for(let sentence of sentenceArray){
		sentence.draw(fontBG);
	}
}