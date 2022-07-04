/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import React, { createContext, useContext } from 'react';
import {
  ApolloClient, InMemoryCache, useMutation, useLazyQuery,
} from '@apollo/client';
import { ADD_USER, GET_USER } from '../graphql';

const IssueContext = createContext();

export function useIssue() {
  return useContext(IssueContext);
}

const client = new ApolloClient({
  uri: 'local',
  cache: new InMemoryCache(),
});

export function IssueProvider({ children }) {
  // User
  const [addUserMutation, {
    loading: addingUser,
    error: errorAddingUser,
    data: addUserData,
  }] = useMutation(ADD_USER, {
    client,
  });

  const addUser = (username) => addUserMutation(
    { variables: { username } },
  );

  const [getUserMutation, {
    loading: gettingUser,
    error: errorGettingUser,
    data: getUserData,
  }] = useLazyQuery(GET_USER, {
    client,
  });

  const getUser = (id) => getUserMutation(
    { variables: { id } },
  );

  // Inspections
  return (
    <IssueContext.Provider
      value={{
        // user
        addingUser,
        addUser,
        addUserData,
        errorAddingUser,
        errorGettingUser,
        gettingUser,
        getUser,
        getUserData,
      }}
    >
      {children}
    </IssueContext.Provider>
  );
}
