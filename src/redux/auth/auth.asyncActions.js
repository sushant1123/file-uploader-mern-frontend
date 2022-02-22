import { userSigninFailure, userSigninRequest, userSigninSuccess } from "./auth.actionCreators";
import axios from "../../helpers/axios";

export const signInUser = (payload) => {
	return async (dispatch) => {
		try {
			dispatch(userSigninRequest());
			const res = await axios.post("/user/signin", payload);
			console.log(res);
			if (res.status === 200) {
				const { token, user } = res.data;

				//save this info in localstorage
				localStorage.setItem("token", token);
				localStorage.setItem("user", JSON.stringify(user));

				dispatch(userSigninSuccess(token, user));
			} else {
				console.log(res.data);
				dispatch(userSigninFailure(res.data.message));
			}
		} catch (error) {
			console.log(error.response);
			dispatch(userSigninFailure(error.response.data));
		}
	};
};

export const isUserLoggedIn = () => {
	return async (dispatch) => {
		const token = localStorage.getItem("token");
		if (token) {
			const user = JSON.parse(localStorage.getItem("user"));
			dispatch(userSigninSuccess(token, user));
		} else {
			dispatch(userSigninFailure("failed to login"));
		}
	};
};
