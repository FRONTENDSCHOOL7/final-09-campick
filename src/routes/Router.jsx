import React from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import LoginEmail from "../pages/loginEmail/LoginEmail";
import Homefeed from "../pages/home/Homefeed";
import Signup from "../pages/signup/Signup";
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
