import React, { useState } from 'react';
import Form from '../../components/Form/Form';
import { loggedIn } from '../../util/loggedIn';
require('./LogInPage.scss');

function LogInPage({ login, history }) {
	const [success, setSuccess] = useState({ success: false, username: '' });

	if (success.success) {
		history.push(`/profile/${success.username}`);
	}

	const check = loggedIn();
	return (
		<section id='login-page' className='container'>
			{check ? (
				<div>
					<p>Logged In</p>
				</div>
			) : (
				<>
					<Form formAction={login} formType={'login'} setSuccess={setSuccess} />
				</>
			)}
		</section>
	);
}

export default LogInPage;
