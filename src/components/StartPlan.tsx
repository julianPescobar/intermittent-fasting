import React, { useState } from "react";
import "./StartPlan.css";
import "./Textbox.css";
const options = [
  "Improve your heart health",
  "Fight obesity",
  "Improve your tissue health",
  "Improve your thinking and memory",
];

function returnRandomBenefit() {
  return options[Math.floor(Math.random() * options.length)];
}


   
interface PlanProps{
  clicked: boolean,
  nombre: string,
  edad: number,
  peso: number,
  inicia: Date,
  finaliza: Date
}
class StartPlan extends React.Component<{},{clicked: boolean, nombre: string, peso: number, inicio: Date, fin: Date}> {
  constructor(props: PlanProps) {
    super(props);
    this.state = {clicked: false, nombre: '', peso: 1, inicio: new Date(), fin : new Date()};
    
  }
  handleChange = (event: any) => {
    this.setState({clicked: true});
  };
  handleName = (event: any) => {
    this.setState({nombre: event.target.value});
  };
  handlePeso = (event: any) => {
    this.setState({peso: event.target.value});
  };
  handleInicio = (event: any) => {
    this.setState({inicio: event.target.value});
  };
  handleFin = (event: any) => {
    this.setState({fin: event.target.value});
  };
  beginProgram = (event: any) => {
    let usr = JSON.stringify({'name':this.state.nombre, 'weight':this.state.peso,'eatFrom':this.state.inicio,'eatTo':this.state.fin}) ;
    if(usr.length !== 0)
    {
      localStorage.setItem('user',usr)
      window.location.reload()
    }
    
  }

   first = 
  <div className="card">
    <h1>{<p className="option"> {returnRandomBenefit()} </p>}</h1>
    <h2>What is Intermittent Fasting?</h2>
    <code>
      also known as intermittent energy restriction, is any of various meal
      timing schedules that cycle between voluntary fasting and non-fasting
      over a given period. Methods of intermittent fasting include
      alternate-day fasting, periodic fasting, and daily time-restricted
      feeding.
    </code>
    <h2>Never did this before, how to get started?</h2>
    <code>
      The easiest way is to do a 12-hour fast, which includes the period of
      sleep in the fasting window. For example, a person could choose to
      fast between 7 p.m. and 7 a.m. They would need to finish their dinner
      before 7 p.m. and wait until 7 a.m. to eat breakfast but would be
      asleep for much of the time in between.
    </code>

    <div className="container">
      <button className="btn" onClick={this.handleChange} >
        Get Started
      </button>
    </div>
  </div>
  

 second = 
  <div className="container">
    <div className="card">
      <h1>Tell me a little bit about yourself, we won't share your info</h1>
      <code className="label">Your name (or nickname)</code>
      <input
      required
        className="Textbox"
        type="text"
        placeholder="Your name (or nickname)"
        onChange={this.handleName}
      ></input>

      <code className="label">Your weight (kg)</code>
      <input
        className="Textbox"
        type="number"
        required
        min={1}
        max={500}
        step="0.01"
        placeholder="Your weight"
        onChange={this.handlePeso}
      ></input>
      <br />
      <code>
        The minimum amount of time it takes to make fasting efficacious
        hasn't been proven via study, but the prevailing notion is it's
        somewhere between 12 and 18 hours. But it can take a few days —
        sometimes weeks — of fasting regularly for your body to start
        burning fat for fuel.{" "}
      </code>
      <h2>Please choose a time window to eat food.</h2>
      <code className="label">From</code>
      <input required className="Textbox" type="time" onChange={this.handleInicio}></input>
      <code className="label">To</code>
      <input required className="Textbox" type="time" onChange={this.handleFin}></input>
      <div className="container">
        <button className="btn" onClick={this.beginProgram} >
          Begin my program
        </button>
      </div>
    </div>
  </div>
 
  render() {
    
    return <div className="container">
      { !this.state.clicked ? this.first : this.second }
      </div>
  }
}

export default StartPlan;