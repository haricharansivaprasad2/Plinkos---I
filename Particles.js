class Particles{
    constructor(x,y,radius){
        var options ={
            restitution: 0.8,
            friction: 0.08,
            density: 2
        }
        this.radius = radius;
        this.body = Bodies.circle(x,y,this.radius,options);
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill(this.color);
        ellipse(pos.x,pos.y,this.radius);

    }
}