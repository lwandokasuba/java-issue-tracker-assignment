import { gql } from '@apollo/client';

const ADD_ROLE = gql`
  mutation addRole($name: String, $description: String) {
    addRole(name: $name, description: $description) {
      id
    }
  }
`;

const GET_ROLE = gql`
  query getRoles {
    role {
      id
      name
      description
    }
  }
`;

const GET_ROLE_BY_ID = gql`
  query getRoleById($id: ID) {
    roleById(id: $id) {
      id
      name
      description
    }
  }
`;

export {
  ADD_ROLE,
  GET_ROLE,
  GET_ROLE_BY_ID,
};
