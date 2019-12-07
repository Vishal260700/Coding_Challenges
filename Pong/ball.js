function ball(){
	this.x = w/2;
	this.y = h/2;
	this.xspeed = 5;
	this.yspeed = 5;

	let xRandom = (random(-1,1));
	let yRandom = (random(-1,1));


	this.show = function(){
		fill(255,0,0);
		circle(this.x, this.y, 10);
	}

	this.update = function(){

		this.x = this.x + xRandom * this.xspeed;
		this.y = this.y + yRandom * this.yspeed;
	}

	// on hitting tab increment of 0.25
	this.hitTab = function(){

		if(this.yspeed > 0){
			this.yspeed = this.yspeed + 0.25;
		}else{
			this.yspeed = this.yspeed - 0.25;
		}

		if(this.xspeed > 0){
			this.xspeed = -this.xspeed;
			this.xspeed = this.xspeed - 0.25;
		}else{
			this.xspeed = -this.xspeed;
			this.xspeed = this.xspeed + 0.25;
		}
		
	}

	// on hitting wall increment of 0.5
	this.hitWall = function(){

		if(this.xspeed > 0){
			this.xspeed = this.xspeed + 0.5;
		}else{
			this.xspeed = this.xspeed - 0.5;
		}

		if(this.yspeed > 0){
			this.yspeed = -this.yspeed;
			this.yspeed = this.yspeed - 0.5;
		}else{
			this.yspeed = -this.yspeed;
			this.yspeed = this.yspeed + 0.5;
		}
		
	}

	this.gameOver = function(){
		this.x = w/2;
		this.y = h/2;
		noLoop();
	}

}