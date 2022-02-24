import { useEffect, useRef, useState } from 'react'

const SimpleInput = (props) => {
	const [enteredName, setEnteredName] = useState('')
	const [enteredNameTouched, setEnterdNameTouched] = useState(false)

	const enteredNameIsValid = enteredName.trim() !== ''
	const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched
  let formIsValid = false

  if(enteredNameIsValid){
    formIsValid = true
  }else{
    formIsValid = false
  }


	const nameInputBlurHandler = (e) => {
		setEnterdNameTouched(true)
	}

	const nameInputChangeHandler = (e) => {
		setEnteredName(e.target.value)
	}

	const formSubmitHandler = (e) => {
		e.preventDefault()
		setEnterdNameTouched(true)
    if(!enteredNameIsValid){
      return
    }
    setEnterdNameTouched(false)
		setEnteredName('')
	}
	const nameInputClasses = !nameInputIsInvalid
		? 'form-control'
		: 'form-control invalid'
	return (
		<form onSubmit={formSubmitHandler}>
			<div className={nameInputClasses}>
				<label htmlFor='name'>Your Name</label>
				<input
					type='text'
					id='name'
					value={enteredName}
					onChange={nameInputChangeHandler}
					onBlur={nameInputBlurHandler}
				/>
				{nameInputIsInvalid && (
					<p className='error-text'>Name must not be empty</p>
				)}
			</div>
			<div className='form-actions'>
				<button disabled = {!formIsValid}>Submit</button>
			</div>
		</form>
	)
}

export default SimpleInput
