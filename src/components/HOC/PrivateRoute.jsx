import { Navigate } from "react-router-dom";
import React from "react";

const PrivateRoute = ({ component }) => {
	const token = localStorage.getItem("token");

	return token ? component : <Navigate to={"/signin"} />;
};

export default PrivateRoute;
