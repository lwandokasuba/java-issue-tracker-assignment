import { gql } from '@apollo/client';

const ADD_EQUIPMENT = gql`
  mutation addEquipment($name: String, $description: String) {
    addEquipment(name: $name, description: $description) {
      id
    }
  }
`;

const GET_EQUIPMENT = gql`
  query getEquipment {
    equipments {
      id
      name
      description
      location
    }
  }
`;

const GET_EQUIPMENT_BY_ID = gql`
  query getEquipment($id: ID) {
    equipmentById (id: $id) {
      id
      name
      description
      location
    }
  }
`;

export {
  ADD_EQUIPMENT,
  GET_EQUIPMENT,
  GET_EQUIPMENT_BY_ID,
};
