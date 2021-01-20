class Rubber {
    constructor(x,y,angle) {
      var options = {
          'restitution':0.8,
          'friction': 0.5,
           'density' :1
      }
      this.body = Bodies.rectangle(x,y,100,50,angle, options);
      this.width=100;
      this.height=50;
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
    
      rectMode(CENTER);
      fill("white");
      rect(0,0, this.width,this.height);
  
      pop();
      
    }
  };