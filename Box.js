//to inherit the properties fro the parent class(BaseClass)
class Box extends BaseClass {
  constructor(x, y, width, height) {
    super(x,y,width,height)
    //adding image to the square log box
    this.image=loadImage("sprites/wood1.png")
  }
};
