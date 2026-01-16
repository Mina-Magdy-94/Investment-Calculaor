import Header from "./components/Header"
import Results from "./components/Results"
import UserInputs from "./components/UserInputs"
import { useState } from 'react'


function App() {
      const [formValues,setFormValues]=useState({
        initialInvestment:10000,
        annualInvestment:1200,
        expectedReturn:6,
        duration:10
    })


  function  handleFormChanges(e){
        setFormValues(prevValues=>({...prevValues,[e.target.name]:+e.target.value}))
    }

  return (
    <>
    <Header/>
    <UserInputs onFormChange={handleFormChanges} formValues={formValues}/>
    {formValues.duration >=1 ? <Results inputs={formValues}/>:<p className="center">Enter duration greater than zero</p>}

    </>
  )
}

export default App
