import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header';
import Footer from "../Footer"
import './Main.css';


const Main = () => {
  const location = useLocation();

  return (
    <div className="main">
      <Header location={location} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Main;
