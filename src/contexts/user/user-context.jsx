import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [userInfo, setUserInfo] = useState("");
  const [isAuthunticated, setIsAuthunticated] = useState(
    () => localStorage.getItem("token") !== null
  );

  return (
    <UserContext.Provider
      value={{ userInfo, setUserInfo, isAuthunticated, setIsAuthunticated }}
    >
      {children}
    </UserContext.Provider>
  );
}
