// kathleen Azembop
// 09/7/2022

// make the output of a number be = 0
let mouseX = 0;
let mouseY = 0;




function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(220);
//   start drawing the circle and make it increase by 1
  circle(mouseX,200,40);
//   now add the speed to make the circle move
  mouseX = mouseX + 1;
  
}