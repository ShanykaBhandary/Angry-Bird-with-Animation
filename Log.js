//to inherit the properties fro the parent class(BaseClass)
class Log extends BaseClass {
    constructor(x, y, height, angle) {
     super(x,y,20,height)
      Matter.Body.setAngle(this.body, angle);
      //adding image to the log 
      this.image=loadImage("sprites/wood2.png")
    }
  };
  