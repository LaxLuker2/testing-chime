const colors = document.getElementsByTagName(`video`);
const onSquareClicked = song => {
  console.log("videos clicked");
  console.log(song);
  var audio = new Audio(song);
  audio.play();
};

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

// background music
window.onload = function() {
  document.getElementById("my_audio").play();
};

const songEnded = () => {
  window.location.pathname = "/thankyou";
};

//each audio element to play beat
for (let i = 0; i < colors.length; i++) {
  if (i == 0) {
    console.log(colors);
    // var x = document.createElement("audio");
    // x.setAttribute("src", "https://mysound.cad.rit.edu/exhibit/animations/music/blueOne.wav");
    // x.setAttribute("id", "audio1");
    // document.getElementById("v1").appendChild(x);
    colors[i].addEventListener("click", function() {
      var audio = new Audio(
        "https://mysound.cad.rit.edu/exhibit/animations/music/boardOneMusic/blue1.wav"
      );
      audio.play();
    });
  }
  if (i == 1) {
    // var x = document.createElement("audio");
    // x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/cork.mp3");
    // x.setAttribute("id", "audio2");
    // document.getElementById("v2").appendChild(x);
    colors[i].addEventListener("click", function() {
      var audio = new Audio(
        "https://mysound.cad.rit.edu/exhibit/animations/music/boardOneMusic/blue2.wav"
      );
      audio.play();
    });
  }
  if (i == 2) {
    // var x = document.createElement("audio");
    // x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/coins.wav");
    // x.setAttribute("id", "audio3");
    // document.getElementById("v3").appendChild(x);
    colors[i].addEventListener("click", function() {
      var audio = new Audio(
        "https://mysound.cad.rit.edu/exhibit/animations/music/boardOneMusic/blue3.wav"
      );
      audio.play();
    });
  }
  if (i == 3) {
    // var x = document.createElement("audio");
    // x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/keys.wav");
    // x.setAttribute("id", "audio4");
    // document.getElementById("v4").appendChild(x);
    colors[i].addEventListener("click", function() {
      var audio = new Audio(
        "https://mysound.cad.rit.edu/exhibit/animations/music/boardOneMusic/blue4.wav"
      );
      audio.play();
    });
  }
  if (i == 4) {
    // var x = document.createElement("audio");
    // x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/laugh.wav");
    // x.setAttribute("id", "audio5");
    // document.getElementById("v5").appendChild(x);
    colors[i].addEventListener("click", function() {
      var audio = new Audio(
        "https://mysound.cad.rit.edu/exhibit/animations/music/boardOneMusic/green1.wav"
      );
      audio.play();
    });
  }
  if (i == 5) {
    // var x = document.createElement("audio");
    // x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/laugh.wav");
    // x.setAttribute("id", "audio5");
    // document.getElementById("v5").appendChild(x);
    colors[i].addEventListener("click", function() {
      var audio = new Audio(
        "https://mysound.cad.rit.edu/exhibit/animations/music/boardOneMusic/green2.wav"
      );
      audio.play();
    });
  }
  if (i == 6) {
    // var x = document.createElement("audio");
    // x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/laugh.wav");
    // x.setAttribute("id", "audio5");
    // document.getElementById("v5").appendChild(x);
    colors[i].addEventListener("click", function() {
      var audio = new Audio(
        "https://mysound.cad.rit.edu/exhibit/animations/music/boardOneMusic/green3.wav"
      );
      audio.play();
    });
  }
  if (i == 7) {
    // var x = document.createElement("audio");
    // x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/laugh.wav");
    // x.setAttribute("id", "audio5");
    // document.getElementById("v5").appendChild(x);
    colors[i].addEventListener("click", function() {
      var audio = new Audio(
        "https://mysound.cad.rit.edu/exhibit/animations/music/boardOneMusic/green4.wav"
      );
      audio.play();
    });
  }
  if (i == 8) {
    // var x = document.createElement("audio");
    // x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/laugh.wav");
    // x.setAttribute("id", "audio5");
    // document.getElementById("v5").appendChild(x);
    colors[i].addEventListener("click", function() {
      var audio = new Audio(
        "https://mysound.cad.rit.edu/exhibit/animations/music/boardOneMusic/red1.wav"
      );
      audio.play();
    });
  }
  if (i == 9) {
    // var x = document.createElement("audio");
    // x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/laugh.wav");
    // x.setAttribute("id", "audio5");
    // document.getElementById("v5").appendChild(x);
    colors[i].addEventListener("click", function() {
      var audio = new Audio(
        "https://mysound.cad.rit.edu/exhibit/animations/music/boardOneMusic/red2.wav"
      );
      audio.play();
    });
  }
  if (i == 10) {
    // var x = document.createElement("audio");
    // x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/laugh.wav");
    // x.setAttribute("id", "audio5");
    // document.getElementById("v5").appendChild(x);
    colors[i].addEventListener("click", function() {
      var audio = new Audio(
        "https://mysound.cad.rit.edu/exhibit/animations/music/boardOneMusic/red3.wav"
      );
      audio.play();
    });
  }
  if (i == 11) {
    // var x = document.createElement("audio");
    // x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/laugh.wav");
    // x.setAttribute("id", "audio5");
    // document.getElementById("v5").appendChild(x);
    colors[i].addEventListener("click", function() {
      var audio = new Audio(
        "https://mysound.cad.rit.edu/exhibit/animations/music/boardOneMusic/red4.wav"
      );
      audio.play();
    });
  }
  if (i == 12) {
    // var x = document.createElement("audio");
    // x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/laugh.wav");
    // x.setAttribute("id", "audio5");
    // document.getElementById("v5").appendChild(x);
    colors[i].addEventListener("click", function() {
      var audio = new Audio(
        "https://mysound.cad.rit.edu/exhibit/animations/music/boardOneMusic/yellow1.wav"
      );
      audio.play();
    });
  }
  if (i == 13) {
    // var x = document.createElement("audio");
    // x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/laugh.wav");
    // x.setAttribute("id", "audio5");
    // document.getElementById("v5").appendChild(x);
    colors[i].addEventListener("click", function() {
      var audio = new Audio(
        "https://mysound.cad.rit.edu/exhibit/animations/music/boardOneMusic/yellow2.wav"
      );
      audio.play();
    });
  }
  if (i == 14) {
    // var x = document.createElement("audio");
    // x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/laugh.wav");
    // x.setAttribute("id", "audio5");
    // document.getElementById("v5").appendChild(x);
    colors[i].addEventListener("click", function() {
      var audio = new Audio(
        "https://mysound.cad.rit.edu/exhibit/animations/music/boardOneMusic/yellow3.wav"
      );
      audio.play();
    });
  }
  if (i == 15) {
    // var x = document.createElement("audio");
    // x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/laugh.wav");
    // x.setAttribute("id", "audio5");
    // document.getElementById("v5").appendChild(x);
    colors[i].addEventListener("click", function() {
      var audio = new Audio(
        "https://mysound.cad.rit.edu/exhibit/animations/music/boardOneMusic/yellow4.wav"
      );
      audio.play();
    });
  }
}
