/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  BrowserRouter, Routes, Route, Outlet, Link,
} from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import routes from './routes';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route
              path={route.href}
              element={<route.component />}
              key={route.href}
            />
          ))}
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <Outlet />
      </BrowserRouter>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <Toolbar />
      <h2>Nothing to see here! This Page does'nt exist</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
      <Toolbar />
      <Toolbar />
    </div>
  );
}
