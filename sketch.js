var square1
var square2


function setup() {
  createCanvas(800,400);
  square1 = createSprite(400, 200, 50, 50);
  square2 = createSprite(500,200,60,60);
  square1.shapeColor = 'pink'
  square2.shapeColor = 'yellow'
}

function draw() {
  background(255,255,255);  
  drawSprites();
  


}