import logo from './assets/investment-calculator-logo.png';
import InvCalc from './components/InvCalc/InvCalc';
import InvGrowthTable from './components/InvGrowthTable/InvGrowthTable';
import { useState } from "react"

function App() {

  const [tableAvailable, setTableAvailable] = useState(false) ; 
  const [yearlyData,setYearlyData] = useState([]) ; 
  const calculateHandler = (userInput) => {
    //setYearlyData(null) ; 
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    console.log(userInput)
     // per-year results

    let currentSavings = +userInput['currentSavings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearlySavings']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expectedInterest'] / 100;
    const duration = +userInput['investmentDuration'];
    const newData = [] ; 
    // The below code calculates yearly results (total savings, interest etc)
    let totalInterest = 0 ; 
    let investedCapital = currentSavings ; 
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      totalInterest += yearlyInterest ; 
      investedCapital += yearlyContribution ; 
      newData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        savingsEndOfYear: currentSavings,
        yearlyInterest: yearlyInterest,
        totalInterest: totalInterest,
        investedCapital: investedCapital
      });

    }
    setYearlyData(newData) ; 
    setTableAvailable(true) ; 

    // do something with yearlyData ...
  };

  const resetHandler = () =>
  {
    setYearlyData([]) ; 
    setTableAvailable(false) ; 
  }

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <InvCalc onCalculate={calculateHandler} onReset={resetHandler}/> 

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {tableAvailable ? <InvGrowthTable yearlyData={yearlyData} /> :
       <h3 style={{textAlign:'center'}}>Input data to see results</h3>}
    </div>
  );
}
//
//<InvGrowthTable yearlyData={yearlyData} />
export default App;
