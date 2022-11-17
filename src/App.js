import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginUser from "./pages/login/LoginUser";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginUser />} />
      </Routes>
    </>
  );
}

export default App;
