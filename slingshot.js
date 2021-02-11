class SlingShot{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        this.sling1=loadImage('sprites/sling1.png')
        this.sling2=loadImage('sprites/sling2.png')
        this.sling3=loadImage('sprites/sling3.png')
        this.sling = Constraint.create(options);
        this.pointB=pointB
        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA=null;
    }
    display(){
        image(this.sling1,200,20)
        image(this.sling2,170,20)
      //  image(this.sling1,200,20)
        
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        image(this.sling3,pointA.x-20,pointA.y,15,30)
    }
}
}