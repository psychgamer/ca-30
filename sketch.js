const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint;

var engine,world,obj1;
var backgroundimg;
function preload(){
  backgroundimg=loadImage("sprites/bg.png")

}

function setup() {
  createCanvas(1200,400);
 engine = Engine.create();
 world = engine.world;

 

box1 = new Box(700,320,70,70);
box2 = new Box(920,320,70,70);
box3 = new Box(700,240,70,70)
box4 = new Box(920,240,70,70)
box5 = new Box(810,160,70,70)


ground1=new ground(600,395,1200,20)

pig1 = new pig(810,350)
pig2 = new pig(810,220)

log1 = new log(810,260,300,PI/2)
log2 = new log(810,180,300,PI/2)
log3 = new log(760,120,150,PI/7)
log4 = new log(870,120,150,-PI/7)

//extralog = new log(300,100,100,PI/2)

bird1 = new bird(300,300)

sling1 = new SlingShot(bird1.body,{x:200,y:40}); 

}
function draw() {
  Engine.update(engine);
  background(backgroundimg);  
  box1.display();
  box2.display();
  ground1.display()
  pig1.display();
  pig2.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();
  bird1.display();
  box3.display();
  box4.display();
  box5.display();
  //extralog.display();
  sling1.display();

}
function mouseDragged (){
  Matter.Body.setPosition(bird1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
 sling1.fly(); 
}