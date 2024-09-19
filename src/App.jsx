import { useEffect, useState } from "react"
import { calculateInvestmentResults, formatter } from "./util/investment"
import UserInput from "./components/UserInput"
import Result from "./components/Result"

function App() {
  const [formData, setFormData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  })

  const changeHandler = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: Number(e.target.value),
    }))
  }

  return (
    <>
      <UserInput formData={formData} changeHandler={changeHandler} />
      <Result formData={formData} />
    </>
  )
}

export default App
