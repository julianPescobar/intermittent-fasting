import './animations.css'
import './Button.css'
import "./Textbox.css";
import { useState } from "react";
const ChangeTime = () => {
  const [getInicio, handleInicio] = useState('');
  const [getFin, handleFin] = useState('');
  const [onError, setError] = useState(false);

  const setInicio = (event: any) => {
    handleInicio(event.target.value);
  };
  const setFin= (event: any) => {
    handleFin(event.target.value);
  };
  const handleErrorValues = () => {
    setError(current => !current);
  };
  const changeTimeValue = () => {
    const newInicio = getInicio;
    const newFin = getFin
    
    if (newInicio.length > 0 && newFin.length > 0) {
        var data : any = localStorage.getItem("user");
        let user = JSON.parse(data);  
        user.eatFrom = newInicio; 
        user.eatTo = newFin;
        localStorage.setItem("user", JSON.stringify(user));
        window.location.reload();
    } else {
      if(onError == false)
      handleErrorValues();
    }
  };

return(
    <div className='animatedContainer'>
        <h2>Please choose a time window to eat food.</h2>
      <code className="label">From</code>
      <input required className="Textbox" type="time" onChange={setInicio}></input>
      <br />
      <code className="label">To</code>
      <input required className="Textbox" type="time" onChange={setFin}></input>
      <br />
      {onError && (
        <p style={{color: "red"}}>Invalid values, please edit them.</p>
      )}
      <button className="btn " onClick={changeTimeValue}>Save</button>
        
    </div>
)
}

export default ChangeTime;