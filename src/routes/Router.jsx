import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Signup from "../pages/signup/Signup";
import LoginEmail from "../pages/loginEmail/LoginEmail";
import MyCampsiteRegister from "../pages/myCampsiteRegister/MyCampsiteRegister";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/email" element = {<LoginEmail/>}/>
        <Route path="/login/signup" element = {<Signup/>}/>
        <Route path="/profile/mycampsiteregister" element = {<MyCampsiteRegister/>}/>
      </Routes>
    </BrowserRouter>
  );
}
