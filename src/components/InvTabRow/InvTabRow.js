
const formatter = new Intl.NumberFormat('en-US',
{
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
})
const InvTabRow = (props) =>
{

    return(
    <tr>
        <td>{props.annualData.year}</td>
        <td>{formatter.format(props.annualData.savingsEndOfYear)}</td>
        <td>{formatter.format(props.annualData.yearlyInterest)}</td>
        <td>{formatter.format(props.annualData.totalInterest)}</td>
        <td>{formatter.format(props.annualData.investedCapital)}</td>
    </tr>) ; 
}
// year: i + 1,
//         yearlyInterest: yearlyInterest,
//         savingsEndOfYear: currentSavings,
//         yearlyContribution: yearlyContribution,
export default InvTabRow ; 