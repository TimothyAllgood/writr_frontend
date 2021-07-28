import { gql } from '@apollo/client';

export default class User {
  static loginMutation = gql`
    mutation Login($loginUsername: String!, $loginPassword: String!) {
      login(username: $loginUsername, password: $loginPassword) {
        token
        username
      }
    }
  `;
  static signupMutation = gql`
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

  static getUser = gql`
    query getUser($getUserId: String!) {
      getUser(id: $getUserId) {
        username
        email
      }
    }
  `;
}
