class Ball {
    constructor(x,y) {
      var options = {
        isStatic:false,
          restitution:1,
          friction:0,
          density:0.5,
      }
      this.body = Bodies.circle(x, y,25, options);
      //this.width = width;
      //this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      //var pos =this.body.position;
      //var angle = this.body.angle;
      push();
      //translate(pos.x, pos.y);
      //rotate(angle);
      ellipseMode(RADIUS);
      fill(254,0,255);
      ellipse(this.body.position.x, this.body.position.y,25,25);
      pop();
    }
  }
  