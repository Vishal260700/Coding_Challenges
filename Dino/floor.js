function gameFloor(){
	this.x1 = 0;
	this.x2 = w;
	this.y = 0.8*h;

	this.show = function(){
		image(fImg,this.x1,this.y, w+10, h/5);
		image(fImg,this.x2,this.y, w+10, h/5);
	}

	this.update = function(){
		this.x1 = this.x1 - gameSpeed;
		this.x2 = this.x2 - gameSpeed;
		if(this.x1 < -w){
			this.x1 = w;
		}
		if(this.x2 < -width){
			this.x2 = width;
		}
	}

}