const remote = require("electron").remote;
const stations = require("./scripts/stations");

playing = false;
player = document.getElementById("radio");
playBtn = document.getElementById("play-btn");
pausedBg = document.getElementById("paused-bg");
analyzer = document.getElementById("analyzer");
loadingAnim = document.getElementById("loading-anim");
count = 0;

playPause = function () {
  if (playing) {
    player.pause();
    playBtn.innerHTML = `<span class="tooltiptext">PLAY</span>⯈`;
  } else {
    player.play();
    playBtn.innerHTML = `<span class="tooltiptext">PAUSE</span>❚❚`;
    showLoader(false);
  }
  playing = !playing;
};

prev = function () {
  playPause();
  // go to previous station
  count--;
  const station = stations[count];
  player.src = station.radio_url
  playPause();
};

next = function () {
  playPause();
  // go to next station
  count++;
  const station = stations[count];
  player.src = station.radio_url;
  analyzer.hidden = true;
  playPause();
};

showLoader = function(show) {
  pausedBg.hidden = show;
  loadingAnim.hidden = show;
};

document.addEventListener("DOMContentLoaded", function () {
  // player.src =
  //   "https://playerservices.streamtheworld.com/api/livestream-redirect/symphony924aac.aac";
  player.src = stations[0].radio_url;

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
  showLoader(true);
});

player.addEventListener("pause", function (e) {
  analyzer.hidden = true;
  pausedBg.hidden = false;
});

player.addEventListener("error", function (e) {
  alert(e);
});

