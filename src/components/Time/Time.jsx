import React, { useEffect, useState } from "react";
import "./Time.css";

function Time() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return <div className="time-cont">{time}</div>;
}

export default Time;
