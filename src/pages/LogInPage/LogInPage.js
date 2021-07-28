import React from 'react';
import Form from '../../components/Form/Form';
require('./LogInPage.scss');

function LogInPage({ login }) {
  return (
    <section id="login-page" className="container">
      <p>Log In</p>
      <Form formAction={login} formType={'login'} />
    </section>
  );
}

export default LogInPage;
