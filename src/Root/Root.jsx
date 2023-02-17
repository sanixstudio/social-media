import React from "react";
import { Outlet } from "react-router-dom";
import { LeftSideBar, Navbar, RightSidebar } from "../components";

const Root = () => {
  return (
    <div>
      <Navbar />
      <LeftSideBar />
      {<Outlet />}
      <RightSidebar />
    </div>
  );
};

export default Root;
