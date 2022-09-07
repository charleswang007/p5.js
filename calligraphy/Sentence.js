class Sentence{
	constructor(sentence, x, y, index, charIdx) {
		this.line = Array(this.count);
		this.sentence = sentence;
    this.x = x;
		this.y = y;
		this.interval = 20;
		this.textSpace = 30;
		this.index = index;
		this.charIdx = charIdx
		this.count = sentence.length;
  }

  formSentence(){
    for (let i = 0; i < this.count; i++) {
      this.line[i] = new Character(
				this.sentence.charAt(i),
				this.x+textWidth(this.sentence.charAt(i))*this.index*1.5,
				this.y,
				this.charIdx+i,
				this.interval
			);
      this.y += textWidth(this.sentence.charAt(i)) + this.textSpace;
    }   
  }
  
  draw(fontBG){
    for(let i = 0; i < this.line.length; i++){
      this.line[i].step();
      this.line[i].draw(fontBG);
    } 
  }
}