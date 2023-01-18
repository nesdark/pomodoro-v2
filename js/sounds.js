export default function Sounds() {
  const musics = {
    tree: new Audio('./sounds/tree.wav'),
    rain: new Audio('./sounds/rain.wav'),
    cafeteria: new Audio('./sounds/cafeteria.wav'),
    fire: new Audio('./sounds/fire.wav'),
  };

  const soundsElements = {
    tree: document.querySelector('#tree'),
    rain: document.querySelector('#rain'),
    cafeteria: document.querySelector('#cafeteria'),
    fire: document.querySelector('#fire'),
  };

  musics.tree.loop = true;
  musics.rain.loop = true;
  musics.cafeteria.loop = true;
  musics.fire.loop = true;

  const buttonPressAudio = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
  );
  const kitchenTimer = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
  );

  return {
    buttonPressAudio,
    kitchenTimer,
    musics,
    soundsElements,
  };
}
