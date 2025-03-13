import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../api/supabaseClient.js";
import { UserContext } from "../contexts/user/user-context.jsx";

export default function SignUp() {
  const navigate = useNavigate();
  const { userInfo, setUserInfo } = useContext(UserContext);

  const handleOnChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setUserInfo((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email: userInfo.email,
      password: userInfo.password,
    });
    if (!error) {
      navigate("/login");
    }
  };
  return (
    <>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="input-group flex flex-col gap-y-2">
          <label htmlFor="email">email</label>
          <input
            id="email"
            type="email"
            className="bg-white"
            onChange={handleOnChange}
          />
        </div>
        <div className="input-group flex flex-col gap-y-2">
          <label htmlFor="password">password</label>
          <input
            id="password"
            type="password"
            className="bg-white"
            onChange={handleOnChange}
          />
        </div>
        <button className="bg-orange-500 text-white p-2">sign up</button>
      </form>

      <Link to="/login">login</Link>
    </>
  );
}
