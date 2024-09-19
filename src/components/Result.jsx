import React from "react"
import { calculateInvestmentResults, formatter } from "../util/investment"

function Result({ formData }) {
  const result = calculateInvestmentResults({ ...formData })
  const initialInvestment =
    result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Invested Capital</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Investment Return</th>
        </tr>
      </thead>
      <tbody>
        {result.map((item) => {
          const totalInterest =
            item.valueEndOfYear -
            item.annualInvestment * item.year -
            initialInvestment
          const totalAmountInvested = item.valueEndOfYear - totalInterest
          return (
            <tr key={item.year}>
              <td>{item.year}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(item.valueEndOfYear)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Result
