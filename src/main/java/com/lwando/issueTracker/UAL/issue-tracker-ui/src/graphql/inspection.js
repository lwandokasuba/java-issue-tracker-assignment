import { gql } from '@apollo/client';

const ADD_INSPECTION = gql`
  mutation addInspection(
    $name: String!
    $description: String
    $equipmentId: ID!,
    $userId: ID,
    $statusId: ID,
    $date: String
  ) {
    addInspection(
      name: $name
      description: $description
      equipmentId: $equipmentId
      userId: $userId
      statusId: $statusId
      date: $date
    ) {
      id
    }
  }
`;

const GET_INSPECTIONS = gql`
  query getInspections {
    inspections {
      id
      name
      description
      date
      equipment {
        id
        name
        description
        location
      }
      user {
        id
        username
        role {
          id 
          name
          description
        }
      }
      status {
        id
        name
        description
      }
    }
  }
`;

const GET_INSPECTION_BY_ID = gql`
query getInspections($id: ID) {
  inspectionById(id: $id) {
    id
    name
    description
    date
    equipment {
      id
      name
      description
      location
    }
    user {
      id
      username
    }
    status {
      id
      name
      description
    }
  }
}
`;

export {
  ADD_INSPECTION,
  GET_INSPECTIONS,
  GET_INSPECTION_BY_ID,
};
