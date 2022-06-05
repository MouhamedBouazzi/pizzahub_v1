import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const tooken = localStorage.getItem("tooken");
  return <div>{tooken ? children : <Navigate to="/login" />}</div>;
}

export default PrivateRoute;
 