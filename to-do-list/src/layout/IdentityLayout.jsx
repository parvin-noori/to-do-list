import React from "react";
import { Outlet } from "react-router";

export default function IdentityLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
