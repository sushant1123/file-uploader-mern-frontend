import { USER_SIGNIN_FAILURE, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from "./auth.constants";

const initialAuthState = {
	token: "",
	user: {
		firstName: "",
		lastName: "",
		email: "",
		username: "",
	},
	authenticate: false,
	authenticating: false,
	error: null,
	message: "",
	loading: false,
};

export const authReducer = (state = initialAuthState, action) => {
	switch (action.type) {
		case USER_SIGNIN_REQUEST:
			state = {
				...state,
				authenticating: true,
				authenticate: false,
				loading: true,
			};
			break;

		case USER_SIGNIN_SUCCESS:
			const { token, user } = action.payload;
			state = {
				...state,
				authenticating: false,
				authenticate: true,
				loading: false,
				token,
				user: {
					firstName: user.firstName,
					lastName: user.lastName,
					email: user.email,
					username: user.username,
				},
			};
			break;

		case USER_SIGNIN_FAILURE:
			state = {
				...state,
				authenticating: false,
				authenticate: false,
				loading: false,
				error: action.payload.error,
			};
			break;

		default:
			break;
	}
	return state;
};
