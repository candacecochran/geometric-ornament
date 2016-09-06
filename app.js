//Introduction more "atomic" programming with functions
//We will use a function or collection of reusable commands to
//draw a geometric pattern resembling a face


function FunnyFace(x,y){
  stroke((255, 5, 255));
  fill(0, 255, 255);
  ellipse(x, y, 5, 5);


  ellipse(x, y, 50, 50);
  stroke(20,70,2000,100);
  fill(191, 0, 255);
  ellipse(x+100,y+100, 80, 80);
  stroke(0, 0, 255)
  fill(0, 255, 191)	;
  ellipse(x+80,y+80, 65, 65)
  stroke(255, 0, 255)
  fill(255, 0, 255);
  ellipse(x+35,y+50, 35, 35);
  fill(0, 0, 255);
  ellipse(x+40,y+40, 35, 35)
}




function setup() {
  createCanvas(800,800);
  background(0, 191, 255)	; //this is a color in RGBA colorspace : red, green, blue and alpha (opacity)

  for(var x=0;x<8;x++){
    for(var y=0;y<8;y++){
    FunnyFace(x*100,15+y*100);
    console. log("x:"+x+" y:"+y);
    }
  }
}
