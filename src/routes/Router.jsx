import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Signin from "../pages/signin/Signin";
import Signup from "../pages/signup/Signup";
import LoginEmail from "../pages/loginEmail/LoginEmail";
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/loginemail" element={<LoginEmail/>}/>
    </Routes>
  );
}
