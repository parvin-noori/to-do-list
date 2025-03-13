import { toast } from "react-toastify";
import { supabase } from "../../services/api/supabaseClient";
import { setIsAuthunticated } from "./AuthSlice";

export const signUpUser = async (userInfo, navigate) => {
  const { email, password } = userInfo;
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (!error) {
    navigate("/login");
    toast.success("Successfully signed up!");
  } else {
    toast.error("Registration failed: " + error.message);
  }
};

export const loginUser = async (userInfo, navigate, dispatch) => {
  let { data, error } = await supabase.auth.signInWithPassword({
    email: userInfo.email,
    password: userInfo.password,
  });
  if (!error) {
    localStorage.setItem("token", data.session.access_token);
    toast.success("success login");
    navigate("/");
    dispatch(setIsAuthunticated(true));
  }
};
