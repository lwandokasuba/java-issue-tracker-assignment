import { gql } from '@apollo/client';

const ADD_STATUS = gql`
  mutation addStatus($name: String, $description: String) {
    addStatus(name: $name, description: $description) {
      id
    }
  }
`;

const GET_STATUS = gql`
  query getStatus{
    status {
      id
      name
      description
    }
  }
`;

const GET_STATUS_BY_ID = gql`
  query getStatusById($id: ID) {
    statusById(id: $id) {
      id
      name
      description
    }
  }
`;

export {
  ADD_STATUS,
  GET_STATUS,
  GET_STATUS_BY_ID,
};
