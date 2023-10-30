import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Signup from "../pages/signup/Signup";
import ProfileSetup from "../pages/profileSetup/ProfileSetup";
import LoginEmail from "../pages/loginEmail/LoginEmail";
import MyCampsiteRegister from "../pages/myCampsiteRegister/MyCampsiteRegister";
import Homefeed from "../pages/home/Homefeed";
import Profile from "../pages/profile/Profile";
import Followlist from "../pages/follow/Followlist";
import Login from "../pages/login/Login";
import Reservation from "../pages/reservation/Reservation";
import Community from "../pages/community/Community";
import Search from "../pages/search/Search";
import CommunityPost from "../pages/community/CommunityPost";
import ViewPost from "../pages/viewPost/ViewPost";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homefeed" element={<Homefeed />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/account/" element={<Outlet />}>
          <Route path="login" element={<LoginEmail />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signup/profileSetup" element={<ProfileSetup />} />
        </Route>
        <Route path="/profile/" element={<Outlet />}>
          <Route path="" element={<Profile />} />
          <Route path=":accountUsername" element={<Outlet />}>
            <Route path="" element={<Profile />} />
            <Route path=":follow/" element={<Followlist />} />
          </Route>
        </Route>
        <Route path="/product/" element={<Outlet />}>
          <Route path="upload/" element={<MyCampsiteRegister />} />
        </Route>
        <Route path="/community" element={<Community />} />
        <Route path="/search" element={<Search />} />
        <Route path="/community" element={<Outlet />}>
          <Route path="" element={<Community />} />
          <Route path="communitypost" element={<CommunityPost />} />
          <Route path=":post_id" element={<ViewPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
