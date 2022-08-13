import { useState } from "react";
import "./animations.css";
import "./Button.css";
import "./Textbox.css";
const ChangeWeight = () => {
  const [peso, setPeso] = useState(0);
  const [onError, setError] = useState(false);
  const handlePeso = (event: any) => {
    setPeso(event.target.value);
  };
  const handleErrorValues = () => {
    setError(current => !current);
  };
  const changeWeightValue = () => {
    const newValue = peso;
    if (newValue > 0) {
        var data : any = localStorage.getItem("user");
        let user = JSON.parse(data);
       
        
         if(user.prevWeights){
             user.prevWeights.push({weight: newValue, date: new Date()});
         }
         else{
             user.prevWeights = [{weight: newValue, date: new Date()}];
         }
        
        user.weight = newValue; 
        localStorage.setItem("user", JSON.stringify(user));
        window.location.reload();
    } else {
      if(onError == false)
      handleErrorValues();
    }
  };
  return (
    <div className="animatedContainer">
      <br />
      <input
        type="number"
        className="Textbox"
        onChange={handlePeso}
        placeholder="Set new weight"
        min={1}
        max={999}
      ></input>
      <br />
      {onError && (
        <p style={{color: "red"}}>Invalid values, please edit them.</p>
      )}
      <button className="btn " onClick={changeWeightValue}>
        Save
      </button>
    </div>
  );
};

export default ChangeWeight;
