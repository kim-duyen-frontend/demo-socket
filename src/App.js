import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginUser from "./pages/login/LoginUser";
import Home from "./pages/home/Home";
import NavbarHome from "./components/navbar";

function App() {
  return (
    <>
      <NavbarHome />
      <Routes>
        <Route path="/" element={<LoginUser />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
