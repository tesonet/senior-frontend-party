import { Action } from '@ngrx/store';
import * as login from './action';
import * as ComponentText from './componentText';

export interface State {
	response: any;
	token: string;
	message: {};
	loading: boolean;
}

const initialState: State = {
	response: null,
	token: null,
	message: null,
	loading: false
};

function handleLogin(state: State, action: Action): State {
	return Object.assign(
		{},
		state,
		{
			message: null,
			loading: true
		}
	);
}

function handleLoginSuccess(state: State, action: Action): State {
	return Object.assign(
		{},
		state,
		{
			token: action.payload.token,
			message: {
				'type': 'success',
				'text': ComponentText.MESSAGE_LIST.loginSuccessful
			},
			loading: false
		}
	);
}

function handleLoginFailed(state: State, action: Action): State {
	return Object.assign(
		{},
		state,
		{
			response: action.payload,
			message: {
				'type': 'failed',
				'text': ComponentText.MESSAGE_LIST.loginFailed
			},
			loading: false
		}
	)

}

export function reducer(state = initialState, action: Action): State {
	switch (action.type) {
		case login.ActionTypes.LOGIN:
			return handleLogin(state, action);
		case login.ActionTypes.LOGIN_SUCCESS:
			return handleLoginSuccess(state, action);
		case login.ActionTypes.LOGIN_FAILED:
			return handleLoginFailed(state, action);
		default:
			return state;
	}
}
