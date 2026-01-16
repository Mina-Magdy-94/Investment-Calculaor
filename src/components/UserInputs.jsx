
const UserInputs = ({formValues,onFormChange}) => {

  return (
    <form id='user-input' onChange={(e)=>onFormChange(e)}>
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