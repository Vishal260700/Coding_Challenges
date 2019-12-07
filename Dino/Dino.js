function gameDino(){
	this.x = 20;
	this.y = 0.7*h;
	this.ySpeed = 0;
	this.gravity = 3;


	this.show = function(){
		image(dImg,this.x,this.y, 50, 60);
	}

	this.move = function(){
		this.y = this.y - this.ySpeed;
		this.ySpeed = this.ySpeed - this.gravity ;
		this.y = constrain(this.y, 0, 0.7*h);
	}

	this.update = function(){
		if(this.y == 0.7*h){
			this.ySpeed = 30;
		}
	}

	this.power = function(){
		if(this.y < 0.7*h){
			gameSpeed += 1;
			gameSpeed = constrain(gameSpeed, 2, 20);
		}
	}

	this.down = function(){
		if(this.y < 0.7*h){
			gameSpeed -= 1;
			gameSpeed = constrain(gameSpeed, 2, 20);
		}
	}

	this.hit = function(c){
		hits = collideRectRect(this.x, this.y, 40,50, c.x, c.y, 30,50); // reduced 10 of each component to account for curved edges
		return hits
	}

}
