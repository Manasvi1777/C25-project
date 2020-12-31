class Dustbin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.image=loadImage("dustbin.png");

      this.dustbinwidth = width;
      this.dustbinheight = height;
      this.wallthickness = 20;
      this.bottomwall = Bodies.rectangle(x,y,this.dustbinwidth,this.wallthickness,options);
      this.leftwall = Bodies.rectangle(x-this.dustbinwidth/2,y-this.dustbinheight/2,this.wallthickness,this.dustbinheight,options);
      this.rightwall = Bodies.rectangle(x+this.dustbinwidth/2,y-this.dustbinheight/2,this.wallthickness,this.dustbinheight,options);
      World.add(world,this.bottomwall);
      World.add(world,this.leftwall);
      World.add(world,this.rightwall);
    }
    display(){
      var posBottom =this.bottomwall.position;
      var posLeft =this.leftwall.position;
      var posRight =this.rightwall.position;

      rectMode(CENTER);
      fill("blue");
      image(this.image,900,650,200,20);
      image(this.image,890,610,20,60);
      image(this.image,1080,610,20,60);
    }
  }