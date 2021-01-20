
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var stone;
var plane;
var rubber;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(100,100,100,50);
	plane = new Plane(400,650);
	stone = new Stone(200,200);
	rubber = new Rubber(300,200, -PI/4);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
hammer.display();
stone.display();
plane.display();
rubber.display();

  drawSprites();
 
}



