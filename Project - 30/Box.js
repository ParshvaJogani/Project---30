class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/bottle.png");
    this.visiblity = 255;
  }
   display(){
    if(this.body.speed<3){
      super.display();
    }
    else{
    push()
    World.remove(world,this.body)
    this.visiblity=this.visiblity - 5
    tint(255,this.visiblity)
    image(this.image,this.body.position.x,this.body.position.y,50,50);
    pop()
    }
   }

};
