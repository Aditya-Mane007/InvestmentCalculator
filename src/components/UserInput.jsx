import React from "react"

function UserInput({ formData, changeHandler }) {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    formData
  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment" className="initialInvestment">
            Initial Investment
          </label>
          <input
            type="number"
            name="initialInvestment"
            value={initialInvestment || 1}
            placeholder="Initial Inventment"
            onChange={changeHandler}
          />
        </p>

        <p>
          <label htmlFor="annualInvestment" className="annualInvestment">
            Annual Investment
          </label>
          <input
            type="number"
            name="annualInvestment"
            value={annualInvestment || 1}
            placeholder="Annual Inventment"
            onChange={changeHandler}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn" className="expectedReturn">
            Expected Return
          </label>
          <input
            type="number"
            name="expectedReturn"
            value={expectedReturn || 1}
            placeholder="In percentage e.g: 6"
            onChange={changeHandler}
          />
        </p>

        <p>
          <label htmlFor="duration" className="duration">
            Duration
          </label>
          <input
            type="number"
            name="duration"
            value={duration || 1}
            placeholder="Duration"
            onChange={changeHandler}
          />
        </p>
      </div>
    </div>
  )
}

export default UserInput
