const colors = document.getElementsByClassName("color");
const onSquareClicked = song => {
    console.log("colors clicked");
    console.log(song);
    var audio = new Audio(song);
    audio.play();
  };

  window.onload = function() {
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
  
    for (let i = 0; i < colors.length; i++) {
      if (i == 0) {
        var x = document.getElementById("audio1");
        x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/knock.wav");
        colors[i].addEventListener("click", beat1);
      }
      if (i == 1) {
        var x = document.getElementById("audio2");
        x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/cork.mp3");
        colors[i].addEventListener("click", beat2);
      }
      if (i == 2) {
        var x = document.getElementById("audio3");
        x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/coins.wav");
        colors[i].addEventListener("click", beat3);
      }
      if (i == 3) {
        var x = document.getElementById("audio4");
        x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/keys.wav");
        colors[i].addEventListener("click", beat4);
      }
      if (i == 4) {
        var x = document.getElementById("audio5");
        x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/laugh.wav");
        colors[i].addEventListener("click", beat5);
      }
    }
  };