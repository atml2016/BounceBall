var container = document.querySelector(".container");

var ball = document.getElementById("ball");
var fun = setInterval(moveDiv, 50);
var margin = 0;

var x = 0;
var y = 0;

// var containerWidth = container.offsetWidth;
// var containerHeight = container.offsetHeight;

// var ballWidth = ball.offsetWidth;
// var ballHeight = ball.offsetHeight;

function moveDiv() {
  margin += 5;
  ball.style.top = margin + "px";

  if (margin >= 300) {
    
    margin -= 10;
    ball.style.top = margin + "px";
    
  }
}

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
});
