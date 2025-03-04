import React from "react";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-svh grid place-content-center">
      <Outlet />
    </div>
  );
}
