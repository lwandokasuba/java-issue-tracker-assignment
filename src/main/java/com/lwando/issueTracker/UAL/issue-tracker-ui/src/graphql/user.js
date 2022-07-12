import { gql } from '@apollo/client';

const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!, $roleId: ID!) {
    addUser(username: $username, password: $password, roleId: $roleId) {
      id
      username
      password
    }
  }
`;

const GET_USER = gql`
  query getUser($id: ID) {
    user(id: $id) {
      id
      username
      password
      role {
        id
        name
        description
      }
    }
  }
`;

const LOGIN = gql`
  query login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      userId
      username
      success
      failed
    }
  }
`;

export {
  ADD_USER,
  GET_USER,
  LOGIN,
};
