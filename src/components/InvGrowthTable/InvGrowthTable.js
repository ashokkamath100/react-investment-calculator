import InvTabRow from "../InvTabRow/InvTabRow" ; 
import styles from "./InvGrowthTable.module.css" ; 
const InvGrowthTable = (props) =>
{
    console.log("inside InvGrowthTable rendering ") ; 

    return(
    <table className= {styles.result}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.yearlyData.length > 0 ?
          props.yearlyData.map((yearsData) =>(
            <InvTabRow annualData={yearsData}/>
          )) : <tr></tr>}
        </tbody>
    </table>
    ) ; 
}

export default InvGrowthTable ; 