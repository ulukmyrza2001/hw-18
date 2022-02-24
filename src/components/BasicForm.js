import { Alert } from '@mui/material'
import { REGEXP_EMAIL, REGEXP_NAME } from '../helpers/rejex'
import useInput from '../hooks/useInput'


const BasicForm = () => {
	const userName = useInput(REGEXP_NAME)
	const userLastName = useInput(REGEXP_NAME)
	const userEmail = useInput(REGEXP_EMAIL)
	const error = {nameError: '',lastNameError: '',emailError: '',}
	let formIsValid = false
	formIsValid =  userName.inputValidRegex && userLastName.inputValidRegex && userEmail.inputValidRegex;

	if( userName.valueInputIsInValid){
		error.nameError = 'Введите имя'
	}else if(userName.validateRejex){
		error.nameError = `Имя должна содержать латиницу и не должна содержать цифр`
	}
	if( userLastName.valueInputIsInValid){
		error.lastNameError = 'Введите фамилию'
	}else if(userLastName.validateRejex){
		error.lastNameError = 'Фамилия должна содержать латиницу и не должна содержать цифр'
	}
	if( userEmail.valueInputIsInValid){
		error.emailError =  'Введите Email'
	}else if(userEmail.validateRejex){
		error.emailError = 'Email должно содержать от 6 до 30 символов'
	}
	let nameInputClasses = userName.valueInputIsInValid || userName.validateRejex ? 'form-control invalid' : 'form-control'
	let lastNameInputClasses = userLastName.valueInputIsInValid || userLastName.validateRejex ? 'form-control invalid' : 'form-control'
	let emailInputClasses = userEmail.valueInputIsInValid || userEmail.validateRejex	? 'form-control invalid' : 'form-control'
	const submitHandler = (e) => {
		e.preventDefault()
        userName.onClear()
        userLastName.onClear()
        userEmail.onClear()
	}
	return (
		<form onSubmit={submitHandler}>
			<div className='control-group'>
				<div className={nameInputClasses}>
				{console.log(userName)}
					<label htmlFor='name'>First Name</label>
					<input value={userName.value} onChange={userName.onChange} onBlur={userName.onBlur}	type='text'/>
					{error.nameError && <Alert className='error-text' severity='error'>{error.nameError}</Alert>}
				</div>
				<div className={lastNameInputClasses}>
					<label htmlFor='name'>Last Name</label>
					<input value={userLastName.value} onChange={userLastName.onChange} onBlur={userLastName.onBlur} type='text'/>
					{error.lastNameError && <Alert className='error-text' severity='error'>{error.lastNameError}</Alert>}
				</div>
			</div>
			<div className={emailInputClasses}>
				<label htmlFor='name'>E-Mail Address</label>
				<input value={userEmail.value} onChange={userEmail.onChange} onBlur={userEmail.onBlur} type='text'/>
				{error.emailError && <Alert className='error-text' severity='error'>{error.emailError}</Alert>}
			</div>
			<div className='form-actions'>
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	)
}
export default BasicForm
