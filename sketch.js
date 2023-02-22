var bg
var player1, player2


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	bgImg = loadImage("assets/spaceBg.jpg");

    player1Img = loadImage("assets/spaceship1.png");
	player2Img = loadImage("assets/spaceship2.png");
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;



	

	//Create the Bodies Here.
	player1 = createSprite(100, 200, 30, 30);
	player1.addImage("player1", player1Img);
	player1.scale = 0.3;

	player2 = createSprite(100, 400, 30, 30);
	player2.addImage("player2", player2Img);
	player2.scale = 0.3;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



