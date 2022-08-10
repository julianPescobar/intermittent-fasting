import userEvent from "@testing-library/user-event";
import { useEffect } from "react";

import "./StartPlan.css";
import "./Textbox.css";
import Timer from "./Timer";
const Plan = () => {
  const LS = localStorage.getItem("user");
  const user = JSON.parse(LS ?? "");

  return (
    <div className="container">
      <div className="card">
        <h1>Greetings {user.name}!</h1>
        <h2>I hope you're having a nice day.</h2>
        <Timer startsEatingAt={user.eatFrom} endsEatingAt={user.eatTo} />
        <br />
        <br/>
        <code>Current weight: {user.weight} Kg.</code>
        <br/>
        <br/>
        <code>Your eating time starts at {user.eatFrom} and ends at {user.eatTo}.</code>
        <br />
        <br />
        <code>Keep up the good work!</code>
      </div>
    </div>
  );
};

export default Plan;
