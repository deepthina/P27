class Bob {
    constructor(x, y, diameter) {
        var options = {
            isStatic: false,
            restitution: 1,
            friction: 0,
            density: 0.8

        }

        
        this.x =x;
        this.y=y;
        this.diameter = diameter;
        this.body = Bodies.circle(x, y, this.diameter/2,options);
        World.add(world, this.body);

    }

    display() {

        var pos = this.body.position;

        push()
			translate(pos.x, pos.y);
			rectMode(CENTER);
			strokeWeight(3);
			fill(255,0,255);
			circle(0,0,this.diameter);
			pop();
    }



}