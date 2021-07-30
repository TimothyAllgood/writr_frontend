import React, { useRef, useState } from 'react';
require('./Form.scss');

function Form({ formAction, formType, setSuccess }) {
	const [formData, setFormData] = useState({});
	// const [error, setError] = useState({ exists: true, msg: '' });
	let error = useRef({ exists: true, msg: '' });

	const handleChange = (e) => {
		const key = e.target.name;
		const value = e.target.value;
		setFormData({ ...formData, [key]: value });
	};

	const validate = async (input) => {
		if (input.value.length <= 0) {
			// await setError({ exists: true, msg: 'All Fields Required' });
			error.current.exists = true;
			error.current.msg = 'All Fields Required';
		} else {
			// setError({ exists: false, msg: '' });
			error.current.exists = false;
			error.current.msg = '';
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const inputs = document.querySelectorAll('input[type=text]');

		for (let i = 0; i < inputs.length; i++) {
			inputs[i].classList.remove('error');
			await validate(inputs[i]);
			if (error.current.exists) {
				inputs[i].classList.add('error');
				document.querySelector('.error-msg').innerText = error.current.msg;
				document.querySelector('.error-msg').classList.remove('hide');
				break;
			}
		}
		if (!error.current.exists) {
			try {
				await formAction({
					variables: {
						[formType + 'Username']: formData.username,
						[formType === 'signup' && formType + 'Email']: formData.email,
						[formType + 'Password']: formData.password,
					},
				});
				if (formType === 'login') {
					setSuccess({ success: true, username: formData.username });
				} else if (formType === 'signup') {
					setSuccess({ success: true });
				}
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<section className='form-container'>
			<div className='inner-form'>
				<h2>{formType === 'login' ? 'Log In' : 'Sign Up'}</h2>
				<form className='user-form' onSubmit={(e) => handleSubmit(e)}>
					<div className='form-group'>
						<label htmlFor='username'>
							<p>Username</p>
						</label>
						<input
							type='text'
							name='username'
							id='username'
							onChange={(e) => handleChange(e)}
						/>
					</div>
					{formType === 'signup' && (
						<div className='form-group'>
							<label htmlFor='email'>
								<p>Email</p>
							</label>
							<input
								type='text'
								name='email'
								id='email'
								onChange={(e) => handleChange(e)}
							/>
						</div>
					)}
					<div className='form-group'>
						<label htmlFor='password'>
							<p>Password</p>
						</label>
						<input
							type='text'
							name='password'
							id='password'
							onChange={(e) => handleChange(e)}
						/>
					</div>
					<input
						type='submit'
						className='btn'
						value={formType === 'signup' ? 'Sign Up' : 'Log In'}
					/>
					<p className='error-msg hide'></p>
				</form>
			</div>

			<div className='image'></div>
		</section>
	);
}

export default Form;
