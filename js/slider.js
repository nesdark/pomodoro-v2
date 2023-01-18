export default function Sliders({ musics }) {
  const sliderElements = {
    tree: document.querySelector('#tree .volume'),
    rain: document.querySelector('#rain .volume'),
    cafeteria: document.querySelector('#cafeteria .volume'),
    fire: document.querySelector('#fire .volume'),
  };

  function setVolume(slider, sliderName) {
    switch (sliderName) {
      case 'tree':
        musics.tree.volume = slider.value / 100;
        break;

      case 'rain':
        musics.rain.volume = slider.value / 100;
        break;

      case 'cafeteria':
        musics.cafeteria.volume = slider.value / 100;
        break;

      case 'fire':
        musics.fire.volume = slider.value / 100;
        break;
    }
  }

  sliderElements.tree.addEventListener('input', () => {
    setVolume(sliderElements.tree, 'tree');
  });
  sliderElements.rain.addEventListener('input', () => {
    setVolume(sliderElements.rain, 'rain');
  });
  sliderElements.cafeteria.addEventListener('input', () => {
    setVolume(sliderElements.cafeteria, 'cafeteria');
  });
  sliderElements.fire.addEventListener('input', () => {
    setVolume(sliderElements.fire, 'fire');
  });
}
