import React from "react";
import { Outlet, useNavigate } from "react-router";

export default function MainLayout() {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-svh grid place-content-center">
      <button
        type="button"
        onClick={handleClick}
        className="cursor-pointer text-white border border-transparent bg-orange-500 fixed top-5 right-5 py-3 px-5 rounded-3xl hover:bg-white hover:border-orange-500 hover:text-orange-500"
      >
        log out
      </button>
      <Outlet />
    </div>
  );
}
