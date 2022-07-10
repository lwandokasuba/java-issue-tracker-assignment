/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  BrowserRouter, Routes, Route, Outlet, Navigate,
} from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import routes from './routes';
import NavBar from './components/NavBar';
import { useIssue } from './context/IssueContext';
import { Login } from './components';
import SignUp from './components/SignUp';
import Drawer from './components/Drawer';

export default function App() {
  const { currentUser } = useIssue();

  if (!currentUser) {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/signup"
            element={<SignUp />}
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
        <Outlet />
      </BrowserRouter>
    );
  }
  return (
    <div>
      <Drawer />
      <NavBar />
      <Toolbar />
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route
              path={route.href}
              element={<route.component />}
              key={route.href}
            />
          ))}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Outlet />
      </BrowserRouter>
    </div>
  );
}

// function NoMatch() {
//   return (
//     <div>
//       <Toolbar />
//       <h2>Nothing to see here! This Page does'nt exist</h2>
//       <p>
//         <Link to="/">Go to the home page</Link>
//       </p>
//       <Toolbar />
//       <Toolbar />
//     </div>
//   );
// }
