// kathleen Azembop
// 08/7/2022

// set the variables
let x = 40;
let y = 40;
let goLeft = false;
let goLeftForY =false;

function setup(){
    createCanvas(800,600);
}

function draw(){
    background(5,0,40);
    fill(255,0,0);
    ellipse(x,y,40,40);
//   start by making the ball bounds on x 
 if(goLeft == false){
    x=x+2;
  }

  if(goLeft == true){
    x=x-2;
  }
  // modify the x variable
  
  if(x>500){
    goLeft=true;
  }
    
    if (x<0){
        goLeft=false;
    }
//   now make the ball bounds on the y axis 
    if(goLeftForY==false){
        y=y+2;
    }
    if(goLeftForY==true){
        y=y-2;
    }
  // modify the y variable
    if(x>400){
        goLeftForY= true;
    }
    if (x<10){
        goLeftForY=false;
    }

    
}