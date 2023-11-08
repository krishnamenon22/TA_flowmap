import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { useAppSelector } from './hooks/store-hooks';
// import { loginUser, LoginAPIResponse } from 'store/slice/authSlice';
import routes, { loginRts } from "./constants/routes.config";

const GlobalRoutes = () => useRoutes(routes);
const LoginRoutes = () => useRoutes(loginRts);

function App() {
  // const dispatch = useAppDispatch()
  const {isAuthenticated} = useAppSelector(({auth}) => auth);

  // React.useEffect(() => {
  //   const user = localStorage.getItem("user_info");
  //   const token = localStorage.getItem("access_token");
  //   const userGroups = localStorage.getItem("user_groups");
  //   if (user && token && userGroups) {
  //     const loginResp: LoginAPIResponse = {
  //       user_info: JSON.parse(user) || {},
  //       token: localStorage.getItem("access_token") || '',
  //       groups: JSON.parse(userGroups) || [],
  //     }
  //     dispatch(loginUser(loginResp));
  //   }
  // }, []);

  return (
    <Router>
      {
        isAuthenticated ? (
          <GlobalRoutes />
        ) : (
          <LoginRoutes />
        )
      }
    </Router>
  );
}

export default App;
