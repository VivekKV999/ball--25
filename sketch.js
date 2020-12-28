
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var b1,b2,b3;
var ground;
var pp,bb;
var dimg;
function preload() {
  dimg=loadImage("dustbingreen.png")
}


function setup() {
	createCanvas(1530, 650);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground=Bodies.rectangle(width/2,550,width,10,{isStatic:true})
	World.add(world,ground)
  //bb=new main(1250,450,350,350)
	b1= new Bin(1100,400,10,200);
	b2= new Bin(1400,400,10,200);
	b3= new Bin(1250,500,300,10);
  pp=new paper(200,200,60,10)
  
	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background(0)
 // bb.display();
 imageMode(CENTER);
  
  b1.display();
  b2.display();
  b3.display();
  pp.display();
  image(dimg,1250,450,350,350)

  drawSprites();
  fill("yellow")
  stroke("blue")
  strokeWeight(5)
  textSize(40)
  text("CRUMPLED BALL",600,100)
 
}

function keyPressed(){
	if (keyCode === UP_ARROW ) {
	  Matter.Body.applyForce(pp.body, pp.body.position, {x: 1000,y: -605});
	}
  }


