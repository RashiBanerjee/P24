class Stone {
    constructor(x,y) {
      var options = {
          'restitution':0.3,
          'friction': 5,
           'density' :1
      }
      this.body = Bodies.rectangle(x,y,50,50, options);
      this.width=50;
      this.height=50;
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      
      
      push();
      translate(pos.x,pos.y);
     
  
      ellipseMode(CENTER);
      fill("blue");
      ellipse(0,0,50,50);
  
      pop();
      
    }
  };