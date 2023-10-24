import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Signup from "../pages/signup/Signup";
import ProfileSetup from "../pages/profileSetup/ProfileSetup";
import LoginEmail from "../pages/loginEmail/LoginEmail";
import MyCampsiteRegister from "../pages/myCampsiteRegister/MyCampsiteRegister";
import Homefeed from "../pages/home/Homefeed";
import SignIn from "../pages/signin/Signin";
import Profile from "../pages/profile/Profile";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginEmail />} />
        <Route path="/homefeed" element={<Homefeed />} />
        <Route path="/account/" element={<Outlet />}>
          <Route path="login/" element={<LoginEmail />} />
          <Route path="signup/" element={<Signup />} />
          <Route path="signup/profileSetup" element={<ProfileSetup />} />
        </Route>
        <Route path="/profile/" element={<Outlet />}>
          <Route path="" element={<Profile />} />
          <Route path=":accountUsername" element={<Profile />} />
          <Route path="mycampsiteregister" element = {<MyCampsiteRegister/>}/>
        </Route>
          
      </Routes>
    </BrowserRouter>
  );
}
