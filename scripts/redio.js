const remote = require("electron").remote;

playing = false;
player = document.getElementById("radio");
playBtn = document.getElementById("play-btn");
pausedBg = document.getElementById("paused-bg");
analyzer = document.getElementById("analyzer");
loadingAnim = document.getElementById("loading-anim");

playPause = function () {
  if (playing) {
    player.pause();
    playBtn.innerHTML = `<span class="tooltiptext">PLAY</span>⯈`;
  } else {
    player.play();
    playBtn.innerHTML = `<span class="tooltiptext">PAUSE</span>❚❚`;
    loadingAnim.hidden = false;
  }
  playing = !playing;
};

document.addEventListener('DOMContentLoaded', function() {
  player.src="https://playerservices.streamtheworld.com/api/livestream-redirect/symphony924aac.aac";
});

document.getElementById("min-btn").addEventListener("click", function (e) {
  var window = remote.getCurrentWindow();
  window.minimize();
});

document.getElementById("exit-btn").addEventListener("click", function (e) {
  remote.app.exit(0);
});

player.addEventListener("playing", function (e) {
  analyzer.hidden = false;
  pausedBg.hidden = true;
  loadingAnim.hidden = true;
});

player.addEventListener("pause", function (e) {
  analyzer.hidden = true;
  pausedBg.hidden = false;
});

player.addEventListener("error", function (e) {
  alert(e);
});
