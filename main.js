var container = document.querySelector(".container");
var ball = document.getElementById("ball");

var containerHeight = container.clientHeight;
var ballHeight = ball.clientHeight;

var x = 0;
var y = 0;

var gravity = 1;
var reboundHeight = containerHeight;
var velocity = 0;

setInterval(function {
  velocity += gravity;
  y += velocity;

  if (y >= containerHeight - ballHeight) {

    
    y = containerHeight - ballHeight;
    velocity = -velocity;
    
    reboundHeight /= 2;

    if (reboundHeight < 1) {
      velocity = 0;
      reboundHeight = 0;
      return;
    }
    //reboundHeight /=2;
  }

  ball.style.top = y + "px";

  //ball.style.top = y + "px";
  // if (y<=reboundHeight/2){
  //   y=reboundHeight/2;
  //   velocity += gravity;
  // y += velocity;
  // }

  // if(reboundHeight<1)
  // {
  //   velocity = 0;
  //   y=reboundHeight;
  // }

  // if (y<= reboundHeight/2)
  // {
  //   y=reboundHeight/2;
  //   velocity +=gravity;
  //   y+=velocity;
  // }

  // if ( velocity <= 0 && y <= reboundHeight ) {
  //   y=reboundHeight;
  //   velocity = gravity;
  //   y+=velocity;

  // }

  //reboundHeight /=2;
}, 50);

document.addEventListener("keydown", function (event) {
  if (event.key === "a" || event.key === "A") {
    console.log("Clicked A");
    x -= 5;
    ball.style.left = x + "px";
  }
  if (event.key === "d" || event.key === "D") {
    console.log("Clicked D");

    x += 5;

    ball.style.left = x + "px";
  }
});
// let gravity = 0;
// let position = 0;
// let isFalling = true;

// var x = 0;
// var y = 0;

// function moveDiv() {
//   const containerWidth = container.clientWidth;

//   const containerHeight = container.clientHeight;

//   const ballWidth = ball.clientWidth;
//   const ballHeight = ball.clientHeight;

//   if (isFalling) {
//     velocity += gravity;
//     position += velocity;
//     ball.style.top = velocity + "px";
//   }
//   if (position + ballHeight >= containerHeight) {
//     position = containerHeight - ballHeight;
//     isFalling = false;
//     velocity = -Math.sqrt(bounceHeight);
//   } else {
//     velocity += gravity;
//     position += velocity;
//     ball.style.top = velocity + "px";

//     if (velocity >= 0) {
//       isFalling = true;
//     }
//   }
// gravity += 5;
// ball.style.top = gravity + "px";

// if (position+ballHeight >= containerHeight) {

//   gravity -= 10;
//   ball.style.top = gravity + "px";

// }

//ball.style.transform = `translate(${horizontalPosition}px, ${position}px)`;
//}

// if (event.key === "w" || event.key === "W") {
//   console.log("Clicked W");

//   y -= 5;
//   ball.style.top = y + "px";
// }

// if (y + ballHeight >= containerHeight) {
//   dy = -dy;
//   do{
//       y+=dy;
//   ball.style.top = y + "px";
//   }while(y <= (containerHeight)/2);
// }

// if (x + ballWidth <= 0 || x + ballWidth >= containerWidth) {
//   console.log("We are at the boundary");
// }
