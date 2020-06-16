const container = document.getElementById("container");
const text = document.querySelector("#text");
const soundbtn = document.querySelector(".sound-button");
const soundicon = document.getElementById("sound-icon");
let audio = new Audio();
audio.src = "./sound/track.mp3";
audio.loop = true;

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerText = "Breathe In!";
  container.className = "container grow";

  setTimeout(() => {
    text.innerText = "Hold";

    setTimeout(() => {
      text.innerText = "Breathe Out!";
      container.className = "container shrink";
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);

function initAudioPlayer() {
  if (soundicon.classList.contains("active")) {
    soundicon.setAttribute("class", "fas fa-pause fa-2x sound notactive");
    audio.play();
  } else {
    soundicon.setAttribute("class", "fas fa-music fa-2x sound active");
    audio.pause();
  }
}

soundbtn.addEventListener("click", initAudioPlayer);
