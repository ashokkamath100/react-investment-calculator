import { useState } from "react"
import styles from "./InvCalc.module.css"
const InvCalc = (props) =>
{

    const [calcInputs,setCalcInputs] = useState({
        currentSavings: '',
        yearlySavings: '',
        expectedInterest: '',
        investmentDuration: ''
    })

    const onSubmitHandler = (e) =>
    {
        e.preventDefault() ;
        props.onReset() ;
        console.log(calcInputs) ; 
        props.onCalculate(calcInputs)  ; 

    }

    const onResetHandler = (e) =>
    {
        //e.preventDefault() ; 
        props.onReset() ;
    }

    const updateAttribute = (attributeName, newValue) =>
    {
        setCalcInputs(prevState => (
            {
                ...prevState,
                [attributeName]: newValue
            }
        ))
    }

    return (
    <form className={styles.form}>
        <div className={styles['input-group']}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" value={calcInputs.currentSavings} onChange={e => updateAttribute('currentSavings',e.target.value)} id="current-savings" />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" value={calcInputs.yearlySavings} onChange={e => updateAttribute('yearlySavings',e.target.value)}id="yearly-contribution" />
          </p>
        </div>
        <div className={styles['input-group']}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" value={calcInputs.expectedInterest} onChange={e => updateAttribute('expectedInterest',e.target.value)} id="expected-return" />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" value={calcInputs.investmentDuration} onChange={e => updateAttribute('investmentDuration',e.target.value)} id="duration" />
          </p>
        </div>
        <p className="actions">
          <button type="reset" onClick={onResetHandler} className={styles['buttonAlt']}>
            Reset
          </button>
          <button type="submit"  onClick={onSubmitHandler} className={styles['button']}>
            Calculate
          </button>
        </p>
      </form>
    ) ; 
}

export default InvCalc ; 