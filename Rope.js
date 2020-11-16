class Rope{
    constructor(bodyA,bodyB, offsetA, offsetB){
        this.offsetA= offsetA;
        this.offsetB = offsetB;
        var options ={
            bodyA : bodyA,
            bodyB : bodyB,
            pointB:{x:this.offsetA,y:this.offsetB}
        }

        this.rope =  Constraint.create(options);
        World.add(world,this.rope);
    }

    display(){
        strokeWeight(3);
        line(this.rope.bodyA.position.x, this.rope.bodyA.position.y, this.rope.bodyB.position.x+this.offsetA, this.rope.bodyB.position.y+this.offsetB);
    }
}