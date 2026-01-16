import React from 'react'
import { calculateInvestmentResults, formatter } from '../util/investment'

const Results = ({ inputs }) => {
    let resultData = calculateInvestmentResults(inputs)
    return (
        <table id='result'>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultData && resultData.map((data) => {
                    const totalInterest = data.valueEndOfYear - data.annualInvestment * data.year
                    const totalAmountInvested=data.valueEndOfYear - totalInterest
                    return (<tr key={data.year}>
                        <td>{data.year}</td>
                        <td>{formatter.format(data.valueEndOfYear)}</td>
                        <td>{formatter.format(data.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>)
                }
                )
                }
            </tbody>
        </table>
    )
}

export default Results