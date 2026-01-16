import React, { useState } from 'react'

const UserInputs = () => {
    const [formValues,setFormValues]=useState({
        initialInvestment:10000,
        annualInvestment:1200,
        expectedReturn:6,
        duration:10
    })


  function  handleFormChanges(e){
        setFormValues(prevValues=>({...prevValues,[e.target.name]:e.target.value}))
    }

    console.log(formValues)

  return (
    <form id='user-input' onChange={(e)=>handleFormChanges(e)}>
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input name='initialInvestment' type="number" value={formValues.initialInvestment} required/>
            </p>
            <p>
                <label>Annual Investment</label>
                <input name='annualInvestment' type="number" value={formValues.annualInvestment} required/>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input name='expectedReturn' type="number" value={formValues.expectedReturn} required/>
            </p>
            <p>
                <label>Duration</label>
                <input name='duration' type="number" value={formValues.duration} required/>
            </p>
        </div>
    </form>
  )
}

export default UserInputs