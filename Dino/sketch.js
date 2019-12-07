// Total 5 power ups and down and every 25 cactuses gameSpeed++;
// lot of improvements - 
// 1. Cactus gen
// 2. Other types of Cactus gen
// 3. Bird gen
// 4. Blackness after certain score (NIGHT MODE)
// 5. GAME OVER Detection to be accurate


let w = 1000;
let h = 400;

let GameFloor;
let GameBackground;
let playerDino;
let cactuses = [];

let powerUp = 0;
let powerDown = 0;

let fImg;
let bImg;
let dImg;

let count = 0;

let gameSpeed = 10;

function setup(){
	createCanvas(w,h);

	frameRate(50);

	GameFloor = new gameFloor();
	GameBackground = new gameBackground();
	playerDino = new gameDino();

	fImg = loadImage('assets/gameFloor.png');
	bImg = loadImage('assets/gameBackground.png');
	dImg = loadImage('assets/dino.png');
	cImg = loadImage('assets/cactus.png');

}

function draw(){

	if((cactuses.length+count) % 25 === 0){
		gameSpeed += 1;
		count += 1;
		gameSpeed = constrain(gameSpeed, 2, 20);
	}

	background(255);

	GameFloor.show();
	GameFloor.update();
	GameBackground.show();
	GameBackground.update();
	playerDino.show();
	playerDino.move();

	if(random(1) < 0.025){
		cactuses.push(new gameCactus());
	}

	for (let c of cactuses){
		c.show();
		c.update();

		if(playerDino.hit(c)){
			console.log("Game Over");
			noLoop();
		}
	}


}

function keyPressed(){
	if (key == ' '){
		playerDino.update();
	}

	if((keyCode === RIGHT_ARROW) && (powerUp < 5)){
		playerDino.power();
		powerUp ++;
	}

	if((keyCode === LEFT_ARROW) && (powerDown < 5)){
		playerDino.down();
		powerDown ++;
	}
}