import Countdown from './countdown.js';
import Buttons from './buttons.js';
import Utils from './utils.js';
import Sounds from './sounds.js';
import Sliders from './slider.js';
import './themes.js';

let countdownIsRunning = false;

const utils = Utils({});
const sounds = Sounds();
const sliders = Sliders({ musics: sounds.musics });

function endTheTime() {
  countdownIsRunning = false;
}

const countdown = Countdown({
  setTimeToDozens: utils.setTimeToDozens,
  endTheTime,
  sounds,
});

const playCountdown = () => {
  if (countdownIsRunning) {
    return;
  }

  countdownIsRunning = true;

  countdown.startTimer();
  sounds.buttonPressAudio.play();
};

const stopCountdown = () => {
  countdown.stopTimer();

  countdownIsRunning = false;
  sounds.buttonPressAudio.play();
};

const addTime = () => {
  if (countdownIsRunning) {
    return;
  }

  countdown.increaseMinutes();
  sounds.buttonPressAudio.play();
};

const removeTime = () => {
  if (countdownIsRunning) {
    return;
  }

  countdown.decreaseMinutes();
  sounds.buttonPressAudio.play();
};

const toggleTreeMusic = () => {
  if (sounds.soundsElements.tree.classList.contains('active')) {
    sounds.musics.tree.pause();
  } else {
    sounds.musics.tree.play();
  }

  sounds.soundsElements.tree.classList.toggle('active');
};

const toggleRainMusic = () => {
  if (sounds.soundsElements.rain.classList.contains('active')) {
    sounds.musics.rain.pause();
  } else {
    sounds.musics.rain.play();
  }

  sounds.soundsElements.rain.classList.toggle('active');
};

const toggleCafeteriaMusic = () => {
  if (sounds.soundsElements.cafeteria.classList.contains('active')) {
    sounds.musics.cafeteria.pause();
  } else {
    sounds.musics.cafeteria.play();
  }

  sounds.soundsElements.cafeteria.classList.toggle('active');
};

const toggleFireMusic = () => {
  if (sounds.soundsElements.fire.classList.contains('active')) {
    sounds.musics.fire.pause();
  } else {
    sounds.musics.fire.play();
  }

  sounds.soundsElements.fire.classList.toggle('active');
};

Buttons.buttonPlay.onclick = playCountdown;
Buttons.buttonStop.onclick = stopCountdown;
Buttons.buttonRemove.onclick = removeTime;
Buttons.buttonAdd.onclick = addTime;
sounds.soundsElements.tree.onclick = toggleTreeMusic;
sounds.soundsElements.rain.onclick = toggleRainMusic;
sounds.soundsElements.cafeteria.onclick = toggleCafeteriaMusic;
sounds.soundsElements.fire.onclick = toggleFireMusic;
