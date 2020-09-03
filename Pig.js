//to inherit the properties fro the parent class(BaseClass)
class Pig extends BaseClass {
    constructor(x, y) {
     super(x,y,50,50)
     //adding image to the pig
     this.image=loadImage("sprites/enemy.png")
    }
  };
  