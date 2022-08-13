
import {  useState } from "react";
import './Button.css'
import './animations.css'
import ChangeTime from "./ChangeTime";
import ChangeWeight from "./ChangeWeight";
import "./StartPlan.css";
import "./Textbox.css";
import Timer from "./Timer";
import WeightChart from "./Chart";
const Plan = () => {
  const LS = localStorage.getItem("user");
  const user = JSON.parse(LS ?? "");
  const [changeWeightShown, setChangeWeightShown] = useState(false);
  const [changeTimeShown, setChangeTimeShown] = useState(false);
 // const [showStats, setShowStats] = useState(false);

  const handleWeightClick = (event : any) => {
    setChangeWeightShown(current => !current);
  };
  const handleTimeClick = (event : any) => {
    setChangeTimeShown(current => !current);
  };

 // const handleShowStats = (event : any) => {
 //   setShowStats(current => !current);
  //};
  return (
    <div className="container">
      <div className="card">
        <h1>Greetings {user.name}!</h1>
        <h2>I hope you're having a nice day.</h2>
        <Timer  startsEatingAt={user.eatFrom} endsEatingAt={user.eatTo} />
        <code>Keep up the good work!</code>
        <br />
        <br />
        <br/>
        <code>Current weight: {user.weight} Kg.</code>
        <br/>
        <button className="btn" onClick={handleWeightClick} >
        Change my weight
      </button>
      {changeWeightShown && (
        <ChangeWeight/>
      )}
        <br/>
        <br/>
        <code>Your eating time starts at {user.eatFrom} and ends at {user.eatTo}.</code>
        <br/>
        <button className="btn " onClick={handleTimeClick} >
        Change my time
      </button>
      {changeTimeShown && (
        <ChangeTime/>
      )}
       <br/>
        <br/>
        
      </div>
      <br/>
      
      
      
    </div>
  );
};

export default Plan;
