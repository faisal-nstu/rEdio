const remote = require('electron').remote;

playing = false;
player = document.getElementById('radio');
playBtn = document.getElementById('play-btn');
pausedBg = document.getElementById('paused-bg');
analyzer = document.getElementById('analyzer');
loadingAnim = document.getElementById('loading-anim');

playPause = function () {
  if (playing) {
    player.pause();
    playBtn.innerHTML = '⯈';
  } else {
    player.play();
    playBtn.innerHTML = '❚❚';
    loadingAnim.hidden = false;
  }
  playing = !playing;
}

document.getElementById("min-btn").addEventListener("click", function (e) {
  var window = remote.getCurrentWindow();
  window.minimize(); 
});

document.getElementById("exit-btn").addEventListener("click", function (e) {
  remote.app.exit(0);
});

player.addEventListener("playing", function (e) {
  analyzer.hidden = false;
  loadingAnim.hidden = true;
  pausedBg.hidden = true;
});

player.addEventListener("pause", function (e) {
  analyzer.hidden = true;
  pausedBg.hidden = false;
});