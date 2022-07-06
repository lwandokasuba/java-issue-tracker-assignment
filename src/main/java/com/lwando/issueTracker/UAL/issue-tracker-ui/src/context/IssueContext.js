/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useContext } from 'react';
import {
  ApolloClient, InMemoryCache, useMutation, useLazyQuery,
} from '@apollo/client';
import { ADD_USER, GET_USER } from '../graphql/user';
import { GET_ROLE } from '../graphql/role';

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

  // Role
  const [getRoleQuery, {
    loading: gettingRole,
    error: errorGettingRole,
    data: getRoleData,
  }] = useLazyQuery(GET_ROLE, {
    client,
  });

  const getRoles = () => getRoleQuery();

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
      // role
      errorGettingRole,
      getRoleData,
      getRoles,
      gettingRole,
    }}
    >
      {children}
    </IssueContext.Provider>
  );
}
