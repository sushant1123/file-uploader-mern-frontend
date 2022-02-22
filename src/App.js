import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./containers/home/Home";
import PrivateRoute from "./components/HOC/PrivateRoute";
import Signin from "./containers/signIn/Signin";
import Signup from "./containers/signup/Signup";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isUserLoggedIn } from "./redux/auth/auth.asyncActions";

function App() {
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!auth.authenticate) {
			dispatch(isUserLoggedIn());
		}
	}, [auth.authenticate]);

	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<PrivateRoute component={<Home />} />} />

					<Route path="/signin" element={<Signin />} />
					<Route path="/signup" element={<Signup />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
