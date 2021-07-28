import React from 'react';
import Form from '../../components/Form/Form';
require('./SignUpPage.scss');

function SignUpPage({ signup }) {
  return (
    <section id="signup-page" className="container">
      <p>Sign Up</p>
      <Form formAction={signup} formType={'signup'} />
    </section>
  );
}

export default SignUpPage;
