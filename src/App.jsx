import { useState } from "react";
import Header from "./components/Header.jsx";
import InvestmentForm from "./components/InvestmentForm.jsx";
import Result from "./components/Result.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    arrivalInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleInputChange(inputType, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputType]: +newValue,
      };
    });
  }

  return (
    <div>
      <Header />
      <InvestmentForm userInput={userInput} onChange={handleInputChange} />
      <Result userInput={userInput} />
    </div>
  );
}

export default App;
