class Character{
	constructor(char, x, y, index, time) {
		this.char = char;
		this.alpha = 0;
		this.lifespan = 300;
  	this.timer = 0;
  	this.life = 0;
		this.birthTime = time * index;
    this.x = x;
		this.y = y;
		this.fsize = 40;
  	this.state = 0;
  	this.index = index;
  	this.rate = 5;
  }
  

  step(){
    switch(this.state){
      case 0:
          if(this.timer >= this.birthTime){
            this.state = 1;
          }
          break;
      case 1:
          if(this.life < 0){
            this.state = 2;
            break;
          }
					let bool = (this.life <= (this.lifespan / 2)) ? 1: -1;
          this.alpha += this.rate * bool;
          this.alpha = constrain(this.alpha, 0, 255);
          this.life += 1;
          break;
      case 2:
          break;
    }
    this.timer += 1;
  }
  
  draw(fontBG){
    if(this.state === 1){			
    	fontBG.fill(200, this.alpha);
      fontBG.textSize(this.fsize);
      fontBG.text(this.char, this.x, this.y);  
    }

  }
}