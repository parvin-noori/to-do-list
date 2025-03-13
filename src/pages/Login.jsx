import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../services/api/supabaseClient.js";
import { toast } from "react-toastify";
import {
  setUserInfo,
  setIsAuthunticated,
} from "../features/authentication/AuthSlice.jsx";
import { useDispatch, useSelector } from "react-redux";

export default function SignUp() {
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    dispatch(setUserInfo({ [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let { data, error } = await supabase.auth.signInWithPassword({
      email: userInfo.email,
      password: userInfo.password,
    });
    if (!error) {
      localStorage.setItem("token", data.session.access_token);
      toast.success("success login");
      navigate("/");
      dispatch(setIsAuthunticated(true))
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
        <button className="bg-orange-500 text-white p-2" type="submit">
          sign up
        </button>
      </form>

      <Link to="/signUp">register</Link>
    </>
  );
}
