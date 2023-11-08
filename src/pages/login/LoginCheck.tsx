import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from '../../hooks/store-hooks'
import { loginUser, LoginAPIResponse } from '../../store/slice/authSlice';

function LoginCheck() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    const user = localStorage.getItem("user_info");
    const token = localStorage.getItem("access_token");
    const userGroups = localStorage.getItem("user_groups");
    if (user && token && userGroups) {
      const loginResp: LoginAPIResponse = {
        user_info: JSON.parse(user) || {},
        token: localStorage.getItem("access_token") || '',
        groups: JSON.parse(userGroups) || [],
      }
      dispatch(loginUser(loginResp));
    } else {
      // localStorage.removeItem("user_info");
      // localStorage.removeItem("access_token");
      // localStorage.removeItem("user_groups");
      localStorage.clear();
      navigate("/");
    }
  }, []);
  return (
    <>
    </>
  )
}

export default LoginCheck;
