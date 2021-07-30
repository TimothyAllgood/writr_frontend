import React, { useState } from 'react';
import Form from '../../components/Form/Form';
import { loggedIn } from '../../util/loggedIn';

require('./SignUpPage.scss');

function SignUpPage({ signup, history }) {
	const check = loggedIn();
	const [success, setSuccess] = useState({ success: false, username: '' });

	if (success.success) {
		history.push(`/`);
	}

	return (
		<section id='signup-page' className='container'>
			{check ? (
				<div>
					<p>Logged In</p>
				</div>
			) : (
				<>
					<Form
						formAction={signup}
						formType={'signup'}
						setSuccess={setSuccess}
					/>
				</>
			)}
		</section>
	);
}

export default SignUpPage;
