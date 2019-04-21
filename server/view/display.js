"use strict";

(function () {
    const socket = io();
    var outputCanvas = document.getElementById('output'),
        canvas = document.getElementById('output'),
        output = outputCanvas.getContext('2d'),
        bufferCanvas = document.getElementById('buffer'),
        buffer = bufferCanvas.getContext('2d'),
        video = document.getElementById('displayVid'),
        width = window.innerWidth,
        height = window.innerHeight,
        interval;
    const context = canvas.getContext("2d");


    socket.on("drawing", onDrawingEvent);


    function processFrame() {
        buffer.drawImage(video, 0, 0);

        // this can be done without alphaData, except in Firefox which doesn't like it when image is bigger than the canvas
        var image = buffer.getImageData(0, 0, width, height),
            imageData = image.data,
            alphaData = buffer.getImageData(0, height, width, height).data;

        for (var i = 3, len = imageData.length; i < len; i = i + 4) {
            imageData[i] = alphaData[i - 1];
        }

        output.putImageData(image, 0, 0, 0, 0, width, height);
        console.log(test);
    }

    // limit the number of events per second
    function throttle(callback, delay) {
        let previousCall = new Date().getTime();
        return function () {
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
    
      window.addEventListener("resize", onResize, false);
    onResize();

})();
