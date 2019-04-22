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
    console.dir(urlParams.get("boardOne"))
    if (urlParams.get("boardOne") == "true") {
      console.log("board one called");
      window.location.href = "/boardOne";
    } else if (urlParams.get("boardTwo") == "true") {
      console.log("board two called")
      window.location.href = "/welcome";
    } else if (urlParams.get("boardThree") == "true") {
      console.log("board three called")
      window.location.href = "/boardThree";
    }
  }
}

window.onload = function() {
  myTimer;
};

// var myVar = setInterval(myTimer, 1000);

// function myTimer() {
//     var d = new Date();
//     var t = d.toLocaleTimeString();
//     document.getElementById("demo").innerHTML = t;
// }

// function myStopFunction() {
//     clearInterval(myVar);
// }
