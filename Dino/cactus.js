function gameCactus(){
	this.x = w;
	this.y = 0.7*h;

	this.show = function(){
		fill(0);
		image(cImg,this.x, this.y, 40,60);
	}

	this.update = function(){
		this.x = this.x - gameSpeed;
	}

}