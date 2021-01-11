
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	ball=new Ball(200,300)
	ball1=new Ball(250,300)
	ball2=new Ball(300,300)
	ball3=new Ball(350,300)
	ball4=new Ball(400,300)
	//Create the Bodies Here.
    wall=new Box(300,50,320,50)


    rope1=new Rope(ball.body,wall.body,-100,0)
    World.add(world,rope1)

    rope2=new Rope(ball1.body,wall.body,-50,0)
    World.add(world,rope2)

    rope3=new Rope(ball2.body,wall.body,0,0)
    World.add(world,rope3)

    rope4=new Rope(ball3.body,wall.body,50,0)
    World.add(world,rope4)

    rope5=new Rope(ball4.body,wall.body,100,0)
    World.add(world,rope5)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  
  ball.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  wall.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed(){
if(keyCode===UP_ARROW)
Matter.Body.applyForce(ball.body,ball.body.position,{x:-1,y:-700})
}

