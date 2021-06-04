class Chain{
    constructor(bodyA,pointB){
        var options={
            bodyA: bodyA,
            pointB:pointB,
            stiffness:0.2,
            length:10
          }
         this.body= Matter.Constraint.create(options);
         this.sling1=loadImage("sprites/sling1.png");
         this.sling2=loadImage("sprites/sling2.png")
         this.sling3=loadImage("sprites/sling3.png")
         World.add(world,this.body);
         this.pointB=pointB
    }

    attach(body){
      this.body.bodyA=body;
    }
    fly(){
        this.body.bodyA=null;
    }
 
    display()
    {   
        image(this.sling1,200,20);
        image(this.sling2,170,20);
        if(this.body.bodyA){
           push();
          stroke(rgb(48, 22, 8))
          if(this.body.bodyA.position.x<220){
            strokeWeight(7);
            line(this.body.bodyA.position.x-20,this.body.bodyA.position.y,this.pointB.x-10,this.pointB.y);
            line(this.body.bodyA.position.x-20,this.body.bodyA.position.y,this.pointB.x+30,this.pointB.y-3);
                      image(this.sling3,this.body.bodyA.position.x-30, this.body.bodyA.position.y-10,15,30)
          }
          else{
            strokeWeight(3);
            line(this.body.bodyA.position.x+25,this.body.bodyA.position.y,this.pointB.x-10,this.pointB.y);
            line(this.body.bodyA.position.x+25,this.body.bodyA.position.y,this.pointB.x+30,this.pointB.y-3);
                      image(this.sling3,this.body.bodyA.position.x+25, this.body.bodyA.position.y-10,15,30)
          }
            pop();
      }
        
    }
}