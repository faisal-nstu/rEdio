const remote = require("electron").remote;
const stations = require("./scripts/stations");

const volumeImage = 'images/volume.png';
const muteImage = 'images/mute.png';

playing = false;
player = document.getElementById("radio");
playBtn = document.getElementById("play-btn");
pausedBg = document.getElementById("paused-bg");
analyzer = document.getElementById("analyzer");
loadingAnim = document.getElementById("loading-anim");
title = document.getElementById("title");
volumeBtn = document.getElementById("volume-btn");
volumeSlider = document.getElementById("volume-slider");
volumeSection = document.getElementById("volume-section");
volumeIcon = document.getElementById("volume-icon");

stationIndex = 0;
currentVolume = 0;
clicks = 0;

function playPause() {
  const station = stations[stationIndex];
  title.innerHTML = station.name;

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

function setStation(index) {
  const station = stations[index];
  player.src = station.radio_url;
  analyzer.hidden = true;
  playPause();
}

function prev() {
  playPause();
  // go to previous station
  stationIndex--;
  if (stationIndex < 0) {
    stationIndex = stations.length - 1;
  }
  setStation(stationIndex);
};

function next() {
  playPause();
  // go to next station
  stationIndex++;
  if (stationIndex === stations.length) {
    stationIndex = 0;
  }
  setStation(stationIndex);
};

function showLoader(show) {
  pausedBg.hidden = show;
  loadingAnim.hidden = show;
};

document.addEventListener("DOMContentLoaded", function () {
  // player.src =
  //   "https://playerservices.streamtheworld.com/api/livestream-redirect/symphony924aac.aac";
  player.src = stations[0].radio_url;

});

document.getElementById("min-btn").addEventListener("click", function (e) {
  const window = remote.getCurrentWindow();
  window.minimize();
});

document.getElementById("exit-btn").addEventListener("click", function (e) {
  remote.app.exit(0);
});

player.addEventListener("playing", function (e) {
  const station = stations[stationIndex];
  title.innerHTML = station.name;
  analyzer.hidden = false;
  showLoader(true);
});

player.addEventListener("pause", function (e) {
  analyzer.hidden = true;
  pausedBg.hidden = false;
});

player.addEventListener("error", function (e) {
  console.log(JSON.stringify(e));
});

player.addEventListener("volumechange", function (e) {
  volumeIcon.src = this.volume > 0 ? volumeImage : muteImage;
});

volumeBtn.addEventListener("click", function (e) {
  clicks++;
  if (clicks == 1) {
    setTimeout(function () {
      if (clicks == 1) {
        volumeBtnSingleClick();
      } else {
        volumeBtnDoubleClick();
      }
      clicks = 0;
    }, 300);
  }
});

function volumeBtnSingleClick() {
  const display = getComputedStyle(volumeSection, null).display;
  if (display === 'none') {
    volumeSlider.value = player.volume * 100;
    volumeSection.style.display = 'grid';
  } else {
    volumeSection.style.display = 'none';
  }
}

function volumeBtnDoubleClick() {
  if (player.volume > 0) {
    currentVolume = player.volume;
    player.volume = 0;
  } else {
    player.volume = currentVolume;
  }
  volumeSlider.value = player.volume * 100;
}

volumeSlider.onchange = function () {
  player.volume = this.value / 100;
  currentVolume = player.volume;
};
