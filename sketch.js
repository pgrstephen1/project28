
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy, boyImg;
var tree;
var stone;
var ground;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8;
var slingshot;

function preload()
{
	boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

	boy = createSprite(200,600,50,200);
	boy.addImage("boy", boyImg);
	boy.scale = 0.1;

	ground = new Ground(400,690,800,20);
	stone = new Stone(140,530,15,15);
	tree  = new Tree(600,400,150,650);

	mango1 = new Mango(600,300,15,15);
	mango2 = new Mango(485,250,15,15);
	mango3 = new Mango(570,170,15,15);
	mango4 = new Mango(645,290,15,15);
	mango5 = new Mango(730,250,15,15);
	mango6 = new Mango(555,260,15,15);
	mango7 = new Mango(615,180,15,15);
	mango8 = new Mango(455,345,15,15);

	slingshot = new Slingshot(stone,{x:145,y:535});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  drawSprites();

  ground.display();
  tree.display();
  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  slingshot.display();
  detectCollision();
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x:mouse.X, y:mouse.Y});
}

function mouseReleased(){
	slingshot.fly();
}

function keyPressed(){
	if(keyCode === 32){
		slingshot.attach(stone.body);
	}
}

function detectCollision(Lstone,Lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}