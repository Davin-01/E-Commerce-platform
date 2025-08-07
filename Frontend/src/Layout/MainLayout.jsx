import React from 'react';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-white">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
