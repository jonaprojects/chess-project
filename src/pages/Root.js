import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.js";

export default function Root(props) {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
