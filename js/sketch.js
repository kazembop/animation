// kathleen Azembop
// 09/7/2022

// make the output of a number be = 0
let mouseX = 0;
let mouseY = 0;

let xSpeed = 1;
let ySpeed=0;


function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(2,77,55);
  // add console
  console.log(mouseX);

  circle(mouseX,200,40);
//   now add the speed to make the circle move
  mouseX = mouseX + 1;
  
  mouseX = mouseX + xSpeed;
  mouseY = mouseY + ySpeed;
  // change the fill color to red on the left side
  fill(18, 105, 217


);
//   change the fill color to of the circle to red on the right
  if (mouseX >100){
    fill(217, 38, 18

);
  }
  
}