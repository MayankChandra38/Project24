
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	canvas = createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	//create the bodies Here
	base = new Ground(600,390,2000,10);
	stone = new Stone(350,325,100,100);
	hammer = new Hammer(350,400,100,40);
	rubber = new Rubber(1000,350,90,90);
	sand = new Sand(450,360,10,10);
	sand2 = new Sand(470,360,10,10);
	sand3 = new Sand(490,360,10,10);
	sand4 = new Sand(510,360,10,10);
	sand5 = new Sand(530,360,10,10);
	sand6 = new Sand(550,360,10,10);
	sand7 = new Sand(580,360,10,10);
	sand8 = new Sand(600,360,10,10);
	iron = new IRON(200,375,40,20);


	Engine.run(engine);
  
}


function draw() {
  background(135,206,235);

  base.display();
  stone.display();
  hammer.display();
  rubber.display();
  sand.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  iron.display();
  
  drawSprites();
 
}



