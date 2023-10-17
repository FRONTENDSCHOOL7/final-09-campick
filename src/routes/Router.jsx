import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Signin from "../pages/signin/Signin";
import Signup from "../pages/signup/Signup";
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
}
