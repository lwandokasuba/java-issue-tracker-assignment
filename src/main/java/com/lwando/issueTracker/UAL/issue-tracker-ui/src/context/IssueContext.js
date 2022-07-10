/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext, useContext, useEffect, useState,
} from 'react';
import {
  ApolloClient, InMemoryCache, useMutation, useLazyQuery,
} from '@apollo/client';
import { ADD_USER, GET_USER, LOGIN } from '../graphql/user';
import { GET_ROLE } from '../graphql/role';
import { ADD_EQUIPMENT, GET_EQUIPMENT } from '../graphql/equipment';

const IssueContext = createContext();

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache(),
});

export function useIssue() {
  return useContext(IssueContext);
}

// eslint-disable-next-line react/prop-types
export function IssueProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [menuOpen, setMenuOpen] = useState(false);
  const [addEquipmentDialog, setAddEquipmentDialog] = useState(false);
  // User
  const [addUserMutation, {
    loading: addingUser,
    error: errorAddingUser,
    data: addUserData,
  }] = useMutation(ADD_USER, {
    client,
  });

  const addUser = (username, password, roleId) => addUserMutation({
    variables: { username, password, roleId },
  });

  const [getUserMutation, {
    loading: gettingUser,
    error: errorGettingUser,
    data: getUserData,
  }] = useLazyQuery(GET_USER, {
    client,
  });

  const getUser = (id) => getUserMutation({ variables: { id } });

  // Equipment
  const [addEquipmentMutation, {
    loading: addingEquipment,
    error: errorAddingEquipment,
    data: addEquipmentData,
  }] = useMutation(ADD_EQUIPMENT, {
    client,
  });

  // eslint-disable-next-line max-len
  const addEquipment = (name, description, location) => addEquipmentMutation({ variables: { name, description, location } });

  const [getEquipmentsQuery, {
    loading: gettingEquipments,
    error: errorGettingEquipments,
    data: getEquipmentsData,
    refetch: refetchEquipments,
  }] = useLazyQuery(GET_EQUIPMENT, {
    client,
  });

  const getEquipments = () => getEquipmentsQuery();

  // Role
  const [getRoleQuery, {
    loading: gettingRole,
    error: errorGettingRole,
    data: getRoleData,
  }] = useLazyQuery(GET_ROLE, {
    client,
  });

  const getRoles = () => getRoleQuery();

  // Login
  const [loginQuery, {
    loading: loadingLogin,
    error: errorLogin,
    data: loginData,
  }] = useLazyQuery(LOGIN, {
    client,
  });

  const login = (username, password) => loginQuery({ variables: { username, password } });

  useEffect(() => {
    if (loginData && loginData.login) {
      setCurrentUser(loginData.login.success ? loginData.login : null);
    }
  }, [loginData]);

  return (
    <IssueContext.Provider value={{
      // user
      addingUser,
      addUser,
      addUserData,
      errorAddingUser,
      errorGettingUser,
      gettingUser,
      getUser,
      getUserData,
      // login
      currentUser,
      errorLogin,
      loadingLogin,
      loginData,
      login,
      // role
      errorGettingRole,
      getRoleData,
      getRoles,
      gettingRole,
      // equipment
      addingEquipment,
      errorAddingEquipment,
      addEquipmentData,
      addEquipment,
      gettingEquipments,
      errorGettingEquipments,
      getEquipmentsData,
      getEquipments,
      refetchEquipments,
      // states
      menuOpen,
      setMenuOpen,
      addEquipmentDialog,
      setAddEquipmentDialog,
    }}
    >
      {children}
    </IssueContext.Provider>
  );
}
