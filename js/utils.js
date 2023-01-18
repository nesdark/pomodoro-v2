export default function Utils({}) {
  const setTimeToDozens = (time) => {
    const formattedTime = time < 10 ? '0' + time : time;
    return formattedTime;
  };

  return {
    setTimeToDozens,
  };
}
