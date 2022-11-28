import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Landing from "../layout/Landing";

export const PrivateRoutes = () => {
  const token = localStorage.getItem("token");
  let auth = { token };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export const LoginRoutes = () => {
  const token = localStorage.getItem("token");
  let auth = { token };
  return auth.token ? <Navigate to="/" /> : <Landing />;
};
