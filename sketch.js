const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine, world;
var ground;

var box,box2;

function setup() {
  createCanvas(800,400);

 engine=Engine.create();
 world=engine.world;
ground=new Ground(400,370,800,30);
 var boptions={
   restitution:0.8
 }
 box=Bodies.rectangle(200,200,50,100,boptions);
 World.add(world,box);
 Engine.run(engine);


}

function draw() {
Engine.update(engine)
  background(0);
  ground.display();
   rectMode(CENTER) 
   rect(box.position.x,box.position.y,50,100);
}