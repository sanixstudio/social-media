import React from "react";
import { LeftSideBar, Navbar, RightSidebar } from "../components";

const Root = ({ children }) => {
  return (
    <div>
      <Navbar />
      <LeftSideBar />
      {children}
      <RightSidebar />
    </div>
  );
};

export default Root;
