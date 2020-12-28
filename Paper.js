class paper{
    constructor(x,y,radius)
    {
        var options =  {
            restitution:0.8,
            friction:1.0,
            density:1.0,
            isStatic : false
        }
      this.body=Bodies.circle(x, y, radius, options);
      this.radius=radius
      this.image = loadImage("paper.png");
      World.add(world, this.body);
    }
    display(){
        push();
        //fill("blue");
        //stroke("yellow")
        //strokeWeight(4)
        imageMode(CENTER);
        image(this.image,this.body.position.x, this.body.position.y, this.radius,this.radius);
        pop();
    }
}