/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  BrowserRouter, Routes, Route, Outlet,
} from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import routes from './routes';
import NavBar from './components/NavBar';
import { useIssue } from './context/IssueContext';
import { Login } from './components';
import SignUp from './components/SignUp';
import Drawer from './components/Drawer';
import Loading from './components/Loading';

export default function App() {
  const { currentUser } = useIssue();

  if (!currentUser) {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Login />}
          />
          <Route
            path="/signup"
            element={<SignUp />}
          />
          <Route path="*" element={<Loading />} />
        </Routes>
        <Outlet />
      </BrowserRouter>
    );
  }
  return (
    <div>
      <BrowserRouter>
        <Drawer />
        <NavBar />
        <Toolbar />
        <Routes>
          {currentUser && routes.map((route) => (
            <Route
              path={route.href}
              element={<route.component />}
              key={route.href}
            />
          ))}
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/signup"
            element={<SignUp />}
          />
          <Route path="*" element={<Loading />} />
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
