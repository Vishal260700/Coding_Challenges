function tab(posx, posy){
	this.x = posx;
	this.y = posy;
	this.yspeed = 5;

	this.show = function(){
		fill(255);
		rect(this.x, this.y, sclx, scly);
	}

	this.update = function(a){ // a is either 1 or -1 for up or down respectively
		
		if(a == 1){
			// up
			this.y = this.y - this.yspeed;
		}else{
			// down
			this.y = this.y + this.yspeed;
		}

	}


}