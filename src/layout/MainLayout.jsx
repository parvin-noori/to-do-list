import React, { useContext } from "react";
import { Outlet, useNavigate } from "react-router";
import { UserContext } from "../contexts/user/user-context";
import { ThemeContext } from "../contexts/theme/theme-context";

export default function MainLayout() {
  const navigate = useNavigate();
  const { userInfo, isAuthunticated, setIsAuthunticated } =
    useContext(UserContext);

  const { theme } = useContext(ThemeContext);

  const handleClick = () => {
    localStorage.removeItem("token");
    navigate("/login");
    setIsAuthunticated(false);
  };
  return (
    <div className="bg-gradient-to-r dark:bg-red-600 from-violet-500 to-fuchsia-500 h-svh grid place-content-center">
      {isAuthunticated && (
        <>
          <button
            type="button"
            onClick={handleClick}
            className="cursor-pointer text-white border border-transparent bg-orange-500 fixed top-5 right-5 py-3 px-5 rounded-3xl hover:bg-white hover:border-orange-500 hover:text-orange-500"
          >
            log out
          </button>
          <span>{userInfo.email}</span>
        </>
      )}
      <Outlet />
    </div>
  );
}
