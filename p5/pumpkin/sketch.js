var pumpkin;
var x = 0

function setup() {
  background(800,800);
  // put setup code here
  pumpkin = loadImage("pics/pumkin.jpg")
}

function draw() {
  // put drawing code here
  image(pumpkin, 0, 0);

  push() ;
  translate(x,20) ;
  x += 3 ;
  if (x > width) {
    x=0 ;
  }
  bat() ;
  pop() ;

  bat();
}


function mouseReleased() {
  console.log(mouseX + "," + mouseY)
}

function bat(){
  fill(0);
triangle(372, 108, 358, 76, 352, 114);
triangle(329, 115, 310, 88, 315, 126);
ellipse(346, 138, 70, 70);
quad(356, 120, 397, 75, 435, 103, 359, 132);
quad(330, 134, 258, 114, 267, 167, 338, 141);
fill('red');
ellipse(334, 128, 10, 10);
ellipse(357, 126, 10, 10);

}
