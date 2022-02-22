import { USER_SIGNIN_REQUEST, USER_SIGNIN_FAILURE, USER_SIGNIN_SUCCESS } from "./auth.constants";

export const userSigninRequest = () => {
	return {
		type: USER_SIGNIN_REQUEST,
	};
};
export const userSigninSuccess = (token, user) => {
	return {
		type: USER_SIGNIN_SUCCESS,
		payload: { token, user },
	};
};
export const userSigninFailure = (error) => {
	return {
		type: USER_SIGNIN_FAILURE,
		payload: { error },
	};
};
