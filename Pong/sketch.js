// OVERALL -
// we ignored ball radius on collision with tabs and wall
// we ignored the moving speed of the tab and speed i.e. energy transfer from tab to ball
// other than this it seems OKAY!!

let w = 1000;
let h = 400;

let sclx = 10;
let scly = 100;

let space = sclx;

let player1;
let player2;

function setup(){

	createCanvas(w,h);

	player1 = new tab(space,h/2);
	player2 = new tab(w - 2*space,h/2);

	ball = new ball();

}

function draw(){
	background(50);
	// frameRate(30); // no need of limit but 30 also seem okay byfar for an atari 'feel'

	player1.show();
	player2.show();

	ball.show();
	ball.update();

	// bouncing off the tab (Players)
	if((ball.x <= sclx + player1.x) && (ball.x >= player1.x) && (ball.y >= player1.y) && (ball.y <= player1.y + scly)){
		ball.hitTab();
	}else if((ball.x >= player2.x) && (ball.x <= player2.x + sclx) && (ball.y >= player2.y) && (ball.y <= player2.y + scly)){
		ball.hitTab();
	}
	// Above we ignored the fact of ball radius and if we have curved tabs then their curvature too

	// bouncing off the wall (Horizontal)
	if(ball.y < 0){
		ball.hitWall();
	}else if(ball.y > h){
		ball.hitWall();
	}

	// hitting the Vertical walls (GAME OVER)
	if(ball.x < 0){
		ball.gameOver();
	}else if(ball.x > w){
		ball.gameOver();
	}

	// WASD Keys for Player 1
	if ( keyIsDown(ESCAPE) ){
		player1.update(1);
	}else if( keyIsDown(SHIFT) ){
		player1.update(-1);
	}

	// Arrow keys for Player 2
	if ( keyIsDown(UP_ARROW) ){
		player2.update(1);
	}else if( keyIsDown(DOWN_ARROW) ){
		player2.update(-1);
	}

}
