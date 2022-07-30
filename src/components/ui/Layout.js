import Header from './Header';
import { Outlet } from 'react-router-dom';
import React from 'react';

const Layout = () => (
  <React.Fragment>
    <Header />

    <main>
      <Outlet />
    </main>
  </React.Fragment>
);

export default Layout;
