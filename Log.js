class Log{
    constructor(x,y,height,angle){
        var options={
  restitution:0.8, 
  friction:0.3,
  density:1
}
this.width=20;
this.height=height
 this.body=Bodies.rectangle(x,y,20,this.height,options);

Matter.Body.setAngle(this.body,angle)  

 World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate (this.body.angle)
       rectMode(CENTER)
       fill(255); 
       strokeWeight(3);
       stroke("yellow");
  rect(0,0,this.width,this.height);  
  pop ();
    }
}