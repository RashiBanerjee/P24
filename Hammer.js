class Hammer {
    constructor(x,y,width,height) {
      var options = {
          'restitution':0.8,
          'friction': 0.5,
           'density' :1
      }
      this.body = Bodies.rectangle(x,y,width,height, options);
      this.width=width;
      this.height=height;
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
    
      push();
      translate(pos.x,pos.y);
      
  
      rectMode(CENTER);
      fill("yellow");
      rect(0,0, this.width,this.height);
  
      pop();
      
    }
  };