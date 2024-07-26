import { useState } from "react";

import InputValue from "./components/InputValue";
import Result from "./components/Results"

function App() {

  const [userInput , setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 1,
  });
  
  const inputIsValid = userInput.duration >= 1;

  function handleInput(inputIdentifier , newValue){
    setUserInput(prevUserInput => {
        return{
            ...prevUserInput,
            [inputIdentifier]: +newValue,
        };
    });
  }

  return (
    <>
      <InputValue onChangeInput={handleInput} userInput={userInput}/>
      {!inputIsValid && <p className="center">Please enter a duration greater than 0</p>}
      { inputIsValid && <Result input={userInput}/>}
    </>
  );
}

export default App;
