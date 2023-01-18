export default function Countdown({ setTimeToDozens, endTheTime, sounds }) {
  const timerElements = {
    minutes: document.querySelector('#minutes'),
    seconds: document.querySelector('#seconds'),
  };

  let lastMinuteUsed = timerElements.minutes.textContent;
  let countdown;

  const resetTimer = () => {
    timerElements.minutes.textContent = '00';
    timerElements.seconds.textContent = '00';
  };

  const startTimer = () => {
    countdown = setTimeout(() => {
      let seconds = timerElements.seconds.textContent;
      let minutes = timerElements.minutes.textContent;

      const timeIsOver = minutes <= 0 && seconds <= 0;
      if (timeIsOver) {
        endTheTime();
        sounds.kitchenTimer.play();
        return;
      }

      const secondsAreZero = seconds <= 0;
      if (secondsAreZero) {
        seconds = 60;
        minutes = setTimeToDozens(--minutes);
        timerElements.minutes.textContent = minutes;
      }

      seconds = setTimeToDozens(--seconds);

      timerElements.seconds.textContent = seconds;

      setTextInTitle(minutes, seconds);

      startTimer();
    }, 1000);
  };

  const stopTimer = () => {
    resetTimer();

    timerElements.minutes.textContent = lastMinuteUsed;

    clearTimeout(countdown);
  };

  const increaseMinutes = () => {
    const minutes = Number(timerElements.minutes.textContent);

    timerElements.minutes.textContent = setTimeToDozens(minutes + 5);
    lastMinuteUsed = setTimeToDozens(minutes + 5);
  };

  const decreaseMinutes = () => {
    const minutes = timerElements.minutes.textContent;

    const minutesIsZero = minutes <= 0;
    if (minutesIsZero) {
      return;
    }

    timerElements.minutes.textContent = setTimeToDozens(minutes - 5);
    lastMinuteUsed = setTimeToDozens(minutes - 5);
  };

  const setTextInTitle = (minutes, seconds) => {
    const title = document.querySelector('title');

    title.textContent = `${minutes}:${seconds} - Pomodoro`;
  };

  return {
    startTimer,
    stopTimer,
    increaseMinutes,
    decreaseMinutes,
  };
}
