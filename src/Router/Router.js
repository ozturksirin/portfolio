import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home/Home';
import Navbar from '../pages/Layouts/Navbar';
import Sidebar from '../pages/Layouts/Sidebar';

const Router = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>

  )
}

export default Router
