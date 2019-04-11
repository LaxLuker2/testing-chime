"use strict";

(function() {
  const socket = io();
  const canvas = document.getElementsByClassName("display")[0];
  const boardOne = document.getElementsByClassName("boardOne")[0];
  const colors = document.getElementsByClassName("color");
  const context = canvas.getContext("2d");

  const current = {
    color: "black"
  };
  let drawing = false;

  for (let i = 0; i < colors.length; i++) {
    colors[i].addEventListener("click", onColorUpdate, false);
  }

  socket.on("drawing", onDrawingEvent);

  window.addEventListener("resize", onResize, false);
  onResize();
  boardOne.addEventListener("mousedown", onMouseDown, false);

  function onColorUpdate(e) {
    current.color = e.target.className.split(" ")[1];
  }

  function onMouseDown(e) {
    drawing = true;
    draw(current.color, true);
    console.log("click");
  }
  function draw(color, emit) {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = current.color;
    ctx.fillRect(20, 20, 150, 100);
    socket.emit("drawing", {
      color
    });
  }

  // limit the number of events per second
  function throttle(callback, delay) {
    let previousCall = new Date().getTime();
    return function() {
      const time = new Date().getTime();

      if (time - previousCall >= delay) {
        previousCall = time;
        callback.apply(null, arguments);
      }
    };
  }

  function onDrawingEvent(data) {
    const w = canvas.width;
    const h = canvas.height;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = data.color;
    ctx.fillRect(20, 20, 150, 100);
  }

  // make the canvas fill its parent
  function onResize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  const onSquareClicked = song => {
    console.log("colors clicked");
    console.log(song);
    var audio = new Audio(song);
    audio.play();
  };

  // const songClick = count => {
  //   if (count == 1) {
  //     onSquareClicked("https://mysound.cad.rit.edu/audioFiles/knock.wav");
  //   } else if (count == 2) {
  //     onSquareClicked("https://mysound.cad.rit.edu/audioFiles/cork.mp3");
  //   } else if (count == 3) {
  //     onSquareClicked("https://mysound.cad.rit.edu/audioFiles/coins.wav");
  //   } else if (count == 4) {
  //     onSquareClicked("https://mysound.cad.rit.edu/audioFiles/keys.wav");
  //   } else if (count == 5) {
  //     onSquareClicked("https://mysound.cad.rit.edu/audioFiles/laugh.wav");
  //   }
  // };

  const beat1 = () => {
    var src = $("#audio1").attr("src");
    onSquareClicked(src);
  };
  const beat2 = () => {
    var src = $("#audio2").attr("src");
    onSquareClicked(src);
  };
  const beat3 = () => {
    var src = $("#audio3").attr("src");
    onSquareClicked(src);
  };
  const beat4 = () => {
    var src = $("#audio4").attr("src");
    onSquareClicked(src);
  };
  const beat5 = () => {
    var src = $("#audio5").attr("src");
    onSquareClicked(src);
  };

  // document.getElementById("btn1").addEventListener("click", beat1);
  // document.getElementById("btn2").addEventListener("click", beat2);
  // document.getElementById("btn3").addEventListener("click", beat3);
  // document.getElementById("btn4").addEventListener("click", beat4);
  // document.getElementById("btn5").addEventListener("click", beat5);

  for (let i = 0; i < colors.length; i++) {
    if (i == 0) {
      var x = document.createElement("audio");
      x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/knock.wav");
      x.setAttribute("id", "audio1");
      document.getElementById("btn1").appendChild(x);
      colors[i].addEventListener("click", beat1);
    }
    if (i == 1) {
      var x = document.createElement("audio");
      x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/cork.mp3");
      x.setAttribute("id", "audio2");
      document.getElementById("btn2").appendChild(x);
      colors[i].addEventListener("click", beat2);
    }
    if (i == 2) {
      var x = document.createElement("audio");
      x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/coins.wav");
      x.setAttribute("id", "audio3");
      document.getElementById("btn3").appendChild(x);
      colors[i].addEventListener("click", beat3);
    }
    if (i == 3) {
      var x = document.createElement("audio");
      x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/keys.wav");
      x.setAttribute("id", "audio4");
      document.getElementById("btn4").appendChild(x);
      colors[i].addEventListener("click", beat4);
    }
    if (i == 4) {
      var x = document.createElement("audio");
      x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/laugh.wav");
      x.setAttribute("id", "audio5");
      document.getElementById("btn5").appendChild(x);
      colors[i].addEventListener("click", beat5);
    }
  }

  $("#btn1").med;

  // for (let i = 0; i < colors.length; i++) {
  //   console.log("in for");
  //   colors[i].addEventListener("click", songClick);
  // }
})();
