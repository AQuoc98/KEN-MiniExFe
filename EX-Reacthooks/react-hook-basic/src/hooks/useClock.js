import { useState, useEffect } from "react";

function formatDate(date) {
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);

  return `${hours}:${minutes}:${seconds}`;
}

function useClock(props) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const clockInterval = setInterval(() => {
      const date = new Date();
      const time = formatDate(date);
      setTime(time);
    }, 1000);

    return () => {
      clearInterval(clockInterval);
    };
  }, []);

  return { time };
}

export default useClock;
