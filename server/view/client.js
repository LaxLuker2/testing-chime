const colors = document.getElementsByClassName("color");
const onSquareClicked = song => {
  console.log("colors clicked");
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
