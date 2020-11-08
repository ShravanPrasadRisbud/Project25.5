const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var paper;
var box1,box2,box3;


function preload()
{
	paper = loadImage("paper.png");
	dustbin = loadimage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(20,20,20,20);

	box1 = new Box(700,320,70,70);
	box2 = new Box(920,320,70,70);
	box3 = new Box(700,240,70,70);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}

