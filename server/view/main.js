"use strict";

(function() {
  const socket = io();
  const canvas = document.getElementsByClassName("display")[0];
  const boardOne = document.getElementsByClassName("boardOne")[0];
  const colors = document.getElementsByTagName("video");
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
})();
