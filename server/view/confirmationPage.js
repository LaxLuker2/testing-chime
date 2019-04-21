let counter = 0;
let myTimer = setInterval(countdown, 1000);

const socket = io();
let welcomeBtnClickedBoardCheck = false;
let songFinishedBoardCheck = false;
let goToPath = "/welcome";

var urlParams = new URLSearchParams(window.location.search);

function countdown() {
  counter = counter + 1;
  if (counter === 10) {
    socket.emit("welcomeBtnClicked", welcomeBtnClickedBoardCheck);
    socket.emit("songFinished", songFinishedBoardCheck);
    console.log("timeout");
    clearInterval(myTimer);
    console.log(urlParams);
    if (urlParams.get("boardOne") == true) {
      console.dir("one");
      window.location.pathname = "/boardOne";
    } else if (urlParams.get("boardTwo") == true) {
      console.dir("two");
      window.location.pathname = "/welcome";
    } else if (urlParams.get("boardThree") == true) {
      console.dir("three");
      window.location.pathname = "/boardThree";
    }
  }
}

window.onload = myTimer;

// var myVar = setInterval(myTimer, 1000);

// function myTimer() {
//     var d = new Date();
//     var t = d.toLocaleTimeString();
//     document.getElementById("demo").innerHTML = t;
// }

// function myStopFunction() {
//     clearInterval(myVar);
// }
