import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Signup from "../pages/signup/Signup";
import LoginEmail from "../pages/loginEmail/LoginEmail";
import Homefeed from "../pages/home/Homefeed";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homefeed />} />
        {/* <Route path="/homefeed" element={<Homefeed />} />

        <Route path="/account/" element={<Outlet />}>
          <Route path="login/" element={<LoginEmail />} />
          <Route path="signup/" element={<Signup />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}
