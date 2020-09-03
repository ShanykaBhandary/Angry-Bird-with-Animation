//to inherit the properties fro the parent class(BaseClass)
class Bird extends BaseClass{
  constructor(x,y){
    super(x,y,50,50);
    //adding image to the bird
    this.image = loadImage("sprites/bird.png");
  }
  display(){
    //move the body with the help of the mouse
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();
  }
}