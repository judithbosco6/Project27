
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rope1;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roofObject;
var bobDiameter;
var rope1;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1=new Bob(100,500,20,20);
	bobObject2=new Bob(200,500,20,20);
	bobObject3=new Bob(300,500,20,20);
	bobObject4=new Bob(400,500,20,20);
	bobObject5=new Bob(500,500,20,20);

	roofObject=new Roof(500,200,20,20);

	rope1=new Rope(bobObject1.body,roofObject.body,bobDiameter*2,0);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);

  bobObject1.display();
  bobObject2.display()
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display();
  rope1.display();
  
  drawSprites();
}



