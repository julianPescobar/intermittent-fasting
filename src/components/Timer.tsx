import "./Timer.css";
import './animations.css'
import "./StartPlan.css";
import { useEffect, useState } from "react";
const Timer = (props: any) => {
  const {
    startsEatingAt = "",
    endsEatingAt = "",
    mode = "",
    time = "",
  } = props;
  const [currentMode, setMode] = useState(mode);
  const [currentTime, setTime] = useState(time);

  let startH = startsEatingAt.substring(0, 2);
  let startM = startsEatingAt.substring(3, 5);
  let endH = endsEatingAt.substring(0, 2);
  let endM = endsEatingAt.substring(3, 5);

  function padTo2Digits(num: number) {
    return num.toString().padStart(2, "0");
  }

  function convertMsToTime(milliseconds: number) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    seconds = seconds % 60;
    minutes = minutes % 60;

    hours = hours % 24;

    return `${padTo2Digits(hours)}h:${padTo2Digits(minutes)}m:${padTo2Digits(
      seconds
    )}s`;
  }
  useEffect(() => {
    let myInterval = setInterval(() => {
      var ahora: Date = new Date();
      var empieza: Date = new Date();
      empieza.setHours(startH, startM, 0);
      var termina: Date = new Date();
      termina.setHours(endH, endM, 0);

      var diff;
      if (ahora <= empieza && ahora <= termina) {
        diff = Math.abs(ahora.getTime() - empieza.getTime());
        setMode("fast");
      } else if (ahora > empieza && ahora < termina) {
        diff = Math.abs(termina.getTime() - ahora.getTime());
        setMode("eat");
      } else {
        //la cantidad de horas 
        empieza.setDate(empieza.getDate() + 1);

        diff = Math.abs(ahora.getTime() - empieza.getTime());
        setMode("fast");
      }
      setTime(convertMsToTime(diff));
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div className={currentMode + ' animatedContainer'}>
      <code>
        <b>You have </b>
      </code>
      <div className={'timer-card '}>
        <div className={'timer-container  '}>
          <h1 >{currentTime}</h1>
        </div>
      </div>
      <code>
        <b>left to {currentMode}</b>
      </code>
    </div>
  );
};

export default Timer;
