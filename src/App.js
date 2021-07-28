// import { gql, useQuery } from '@apollo/client';
import { useMutation, gql } from '@apollo/client';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Routes from './config/Routes';

require('./App.scss');

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setisLoggedIn(true);
    } else {
      setisLoggedIn(false);
    }
  }, []);

  // GRAPHQL QUERY EXAMPLE
  // const AllUsers = gql`
  //   query GetAllUsers {
  //     getAllUsers {
  //       username
  //     }
  //   }
  // `;
  // const { loading, error, data } = useQuery(AllUsers);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error</p>;
  // if (data) {
  //   console.log(data.getAllUsers[0]);
  // }
  //

  // Log In Mutation
  const loginMutation = gql`
    mutation Login($loginUsername: String!, $loginPassword: String!) {
      login(username: $loginUsername, password: $loginPassword) {
        token
      }
    }
  `;

  const [login, { data: loginData }] = useMutation(loginMutation);

  //Sign Up Mutation
  const signupMutation = gql`
    mutation signup(
      $signupUsername: String!
      $signupEmail: String!
      $signupPassword: String!
    ) {
      signup(
        username: $signupUsername
        email: $signupEmail
        password: $signupPassword
      ) {
        username
      }
    }
  `;

  const [signup, { data: signupData }] = useMutation(signupMutation);

  // Logout
  const logout = () => {
    localStorage.removeItem('token');
    setisLoggedIn(false);
  };

  // Set Token on Login
  useEffect(() => {
    if (loginData) {
      if (loginData.login.token) {
        setisLoggedIn(true);
        localStorage.setItem('token', loginData.login.token);
      }
    }
  }, [loginData]);

  useEffect(() => {
    if (signupData) {
      console.log(signupData);
    }
  }, [signupData]);

  return (
    <div className="app">
      <Header isLoggedIn={isLoggedIn} logout={logout} />
      <Routes login={login} signup={signup} />
    </div>
  );
}

export default App;
