class Drop{
    constructor(x,y){
        var options = {
            friction: 0.002,
            restitution:0.2           
        }
        this.rain = Bodies.circle(x,y,5,options)
        this.radius = 5;
        World.add(world, this.rain);
    }
  
    updatePosition(){     
        if(this.rain.position.y > height){
           Matter.Body.setPosition(this.rain, {x:random(100,500), y:random(100,500)})
        }
    }
  
    dropDisplay(){
        fill("lightBlue")
        ellipseMode(CENTER);
        ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
    }
  }