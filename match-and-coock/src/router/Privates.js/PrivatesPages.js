import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const PrivatesPages = () => {
  const user = useSelector((state) => state.auth);

  return user ? <Outlet /> : <Navigate replace to={"/auth"} />;
};
