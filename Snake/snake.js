function snake(){

	let cols = floor(w/(4*scl)); // random gen in side of the grid at any y axis point but restrain on x axis part
	let rows = floor(h/(scl));
	
	// snake parameters
	this.x = floor(random(cols)) * scl;
	this.y = floor(random(rows)) * scl;
	this.xspeed = 1;
	this.yspeed = 0;
	this.total = 0;
	this.tail = [];

	this.death = function(){

		for(var i = 0; i < this.tail.length - 1; i++){
			if(dist(this.tail[i].x, this.tail[i].y, this.x, this.y) < 1){
				this.total = 0;
				this.tail = [];
			}
		}
	}

	this.show = function(){
		
		// snake formation (visually)
		fill(255);
		for(var i = 0; i < this.tail.length; i++){
			rect(this.tail[i].x, this.tail[i].y, scl, scl);			
		}
		rect(this.x, this.y, scl, scl);
	}

	this.update = function(){

		for(var i = 0; i < this.tail.length - 1; i++){
			this.tail[i] = this.tail[i+1];
		}

		if(this.total >= 1){
			this.tail[this.total - 1] = createVector(this.x,this.y);
		}

		// arrow key movement integration
		this.x = this.x + this.xspeed*scl;
		this.y = this.y + this.yspeed*scl;

		// restrict movement in the grid only
		this.x = constrain(this.x, 0, w-scl);
		this.y = constrain(this.y, 0, h-scl);

	}

	this.dir = function(a,b){

		// change in direction
		this.xspeed = a;
		this.yspeed = b;
	}

	this.eat = function(food){
		if(dist(this.x, this.y, food.x, food.y) < 1){
			this.total++;
			return true;
		}else{
			return false;
		}
	}

}