class Rubber {
    constructor(x, y, width, height) {
        var options = {
            density : 1,
            friction : 5,
            restitution : 0.3
        }
      this.body = Bodies.rectangle(x, y, width, height,options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      stroke("black");
      fill("blue");
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };