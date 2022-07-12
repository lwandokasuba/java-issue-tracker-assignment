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
import { ADD_INSPECTION, GET_INSPECTIONS, GET_INSPECTION_BY_ID } from '../graphql/inspection';
import { GET_STATUS } from '../graphql/status';

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
  const [addIssueDialog, setAddIssueDialog] = useState(false);
  // Login
  const [loginQuery, {
    loading: loadingLogin,
    error: errorLogin,
    data: loginData,
  }] = useLazyQuery(LOGIN, {
    client,
  });

  const login = (username, password) => loginQuery({ variables: { username, password } })
    .then((value) => {
      if (value && value.data.login.success) {
        setCurrentUser(value.data.login);
        localStorage.setItem('user', JSON.stringify(value.data));
      }
    });

  const logout = () => {
    localStorage.clear();
    setCurrentUser(null);
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      let foundUser = null;
      try {
        foundUser = JSON.parse(loggedInUser);
      } catch {
        foundUser = loggedInUser;
      }
      setCurrentUser(foundUser.login);
    }
  }, []);
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
  }).then(() => login(username, password));

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

  // Inspection
  const [addInspectionMutation, {
    loading: addingInspection,
    error: errorAddingInspection,
    data: addInspectionData,
  }] = useMutation(ADD_INSPECTION, {
    client,
  });

  const addInspection = ({
    name,
    description,
    equipmentId,
    userId,
    statusId,
    date,
  }) => addInspectionMutation({
    variables: {
      name,
      description,
      equipmentId,
      userId,
      statusId,
      date,
    },
  });

  const [getInspectionsQuery, {
    loading: gettingInspections,
    error: errorGettingInspections,
    data: getInspectionsData,
    refetch: refetchInspections,
  }] = useLazyQuery(GET_INSPECTIONS, {
    client,
  });

  const getInspections = () => getInspectionsQuery();

  const [getInspectionByIdQuery, {
    loading: gettingInspectionById,
    error: errorGettingInspectionById,
    data: getInspectionByIdData,
  }] = useLazyQuery(GET_INSPECTION_BY_ID, {
    client,
  });

  const getInspectionById = (id) => getInspectionByIdQuery({ variables: { id } });

  // Role
  const [getRoleQuery, {
    loading: gettingRole,
    error: errorGettingRole,
    data: getRoleData,
  }] = useLazyQuery(GET_ROLE, {
    client,
  });

  const getRoles = () => getRoleQuery();

  // Status
  const [getStatusQuery, {
    loading: gettingStatus,
    error: errorGettingStatus,
    data: getStatusData,
  }] = useLazyQuery(GET_STATUS, {
    client,
  });

  const getStatus = () => getStatusQuery();

  // useEffect(() => {
  //   if (loginData && loginData.login) {
  //     setCurrentUser(loginData.login.success ? loginData.login : null);
  //     localStorage.setItem('user', loginData.login);
  //   }
  // }, [loginData]);

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
      logout,
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
      // inspection
      addingInspection,
      addInspection,
      addInspectionData,
      errorAddingInspection,
      errorGettingInspections,
      getInspectionsData,
      getInspections,
      gettingInspections,
      refetchInspections,
      gettingInspectionById,
      errorGettingInspectionById,
      getInspectionByIdData,
      getInspectionById,
      // status
      gettingStatus,
      errorGettingStatus,
      getStatus,
      getStatusData,
      // states
      menuOpen,
      setMenuOpen,
      addEquipmentDialog,
      setAddEquipmentDialog,
      addIssueDialog,
      setAddIssueDialog,
    }}
    >
      {children}
    </IssueContext.Provider>
  );
}
