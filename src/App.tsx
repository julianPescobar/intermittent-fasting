import "./components/Button.css";
import "./App.css";
import StartPlan from "./components/StartPlan";
import { useEffect } from "react";
import Plan from "./components/Plan";

function App() {

  useEffect(() => {
    Welcome()
  },)
  function Welcome(){
   //if user does not exist, let it create one, or else greet existing user
    return localStorage.getItem("user") == null ? newUser() : existingUser()
  }
  function newUser() {
    return (
      <div>
        <StartPlan />
      </div>
    );
  }
  function existingUser() {
    return <div>
      <Plan />
    </div>;
  }

  return (
    <div className="App">
      {Welcome()}
    </div>
  );
}

export default App;
