
// snake var
let s;

// Global var
var w = 400;
var h = 400;
var scl = 20;

// visuals
let headSnake;

// food var (location)
let food;

function setup(){

	// enviornment creation
	createCanvas(w,h);
	
	// snake formation
	s = new snake();

	// food formation
	pickLocation();


	// Forcing frame rate to limit of 10 for visual efficiency
	frameRate(10);

}
function draw(){

	// enviornment color
	background(50);

	// food eating
	if(s.eat(food)){
		pickLocation();
	}

	// Snake function calls
	s.show();
	s.update();
	s.death();

	// food visual representation
	fill(255,0,0);
	rect(food.x, food.y, scl,scl);

}
function keyPressed(){
	// movement of snake in other directions

	// we have a tail
	if(s.total != 0){
		if((keyCode === UP_ARROW) && (s.yspeed != 1)){
			s.dir(0,-1);
		}else if((keyCode === DOWN_ARROW) && (s.yspeed != -1)){
			s.dir(0,1);
		}else if((keyCode === RIGHT_ARROW) && (s.xspeed != -1)){
			s.dir(1,0);
		}else if((keyCode === LEFT_ARROW) && (s.xspeed != 1)){
			s.dir(-1,0);
		}
	}
	// we dont have a tail
	else{
		if((keyCode === UP_ARROW)){
			s.dir(0,-1);
		}else if((keyCode === DOWN_ARROW)){
			s.dir(0,1);
		}else if((keyCode === RIGHT_ARROW)){
			s.dir(1,0);
		}else if((keyCode === LEFT_ARROW)){
			s.dir(-1,0);
		}

	}
}

// generation of food location randomly in a grid manner to align with the grid system floowed by snake
function pickLocation(){
	let cols = floor(w/scl);
	let rows = floor(h/scl);
	food = createVector(floor(random(cols)), floor(random(rows)));
  	food.mult(scl);
}

