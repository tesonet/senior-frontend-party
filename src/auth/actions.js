import {action} from '~/common/redux';

import * as t from './actionTypes';
import * as s from './selectors';
import {setSession, removeSession, isActuallyAuthenticated} from './utils';


const loggedIn = () => action(t.LOGGED_IN);
const loggedOut = () => action(t.LOGGED_OUT);
const setAuthenticated = isAuthenticated => action(t.AUTHENTICATION_SET, isAuthenticated);


export const logIn = (token) => {
  if (token == null) throw new Error('No token provided');
  setSession(token);
  return loggedIn();
};


export const logout = () => {
  removeSession();
  return loggedOut();
};


// async
export const syncAuth = () => async (dispatch, getState) => {
  const state = getState();
  const authenticated = s.isAuthenticated(state);
  const actuallyAuthenticated = isActuallyAuthenticated();

  if (authenticated !== actuallyAuthenticated) {
    await dispatch(setAuthenticated(actuallyAuthenticated));
    if (!actuallyAuthenticated) removeSession();
  }
};
