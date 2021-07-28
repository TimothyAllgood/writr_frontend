import React, { useState } from 'react';

function Form({ formAction, formType }) {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await formAction({
        variables: {
          [formType + 'Username']: formData.username,
          [formType === 'signup' && formType + 'Email']: formData.email,
          [formType + 'Password']: formData.password,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="form-group">
        <label htmlFor="username">
          <p>Username</p>
        </label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={(e) => handleChange(e)}
        />
      </div>
      {formType === 'signup' && (
        <div className="form-group">
          <label htmlFor="email">
            <p>Email</p>
          </label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) => handleChange(e)}
          />
        </div>
      )}
      <div className="form-group">
        <label htmlFor="password">
          <p>Password</p>
        </label>
        <input
          type="text"
          name="password"
          id="password"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <input type="submit" value="Log In" />
    </form>
  );
}

export default Form;
