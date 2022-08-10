
import './Textbox.css';
export default function SecondPlan(){
    return(
        <div className="container">
            <div className="card">
                <h1>Tell me a little bit about yourself</h1>
            <input className='Textbox' type='text' placeholder='Your name'></input>
            <input className='Textbox' type='number' min={1} max={100} placeholder='Your age'></input>
            <br />
            <code>The minimum amount of time it takes to make fasting efficacious hasn't been proven 
                via study, but the prevailing notion is it's somewhere between 12 and 18 hours. 
                But it can take a few days — sometimes weeks — of fasting regularly for your body 
                to start burning fat for fuel. Having said that, please choose a time window to do 
                intermittent fasting.</code>
            <input className='Textbox' type='time' min={0} max={100} placeholder='At what time do you want to start fasting?'></input>
            <input className='Textbox' type='time' min={0} max={100} placeholder='At what time do you want to finish fasting?'></input>
            
            </div>
            
        </div>
    )
}