import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import './Main.css'; // Import CSS for Main styling

const Main = () => {
  return (
    <div className="main">
      <Header />
      <main>
        <Outlet /> {/* This is where nested routes will render */}
      </main>
      <Footer />
    </div>
  );
};

export default Main;