import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'

import {
  firebaseLoginPending,
  firebaseLoginSuccess,
  firebaseLoginError,
  firebaseLogOutPending,
  firebaseLogOutSuccess,
  firebaseLogOutError,
} from './actions';

export const loginFirebase = (email, password) => {
  return async (dispatch) => {
    dispatch(firebaseLoginPending());

    const auth = getAuth()

    try {
      await signInWithEmailAndPassword(auth, email, password)

      dispatch(firebaseLoginSuccess());

    } catch (e) {
      dispatch(firebaseLoginError(e.message));
    }
  };
};

export const logOutFirebase = () => {
  return async (dispatch) => {
    dispatch(firebaseLogOutPending());

    try {
      await signOut(getAuth())

      dispatch(firebaseLogOutSuccess());

    } catch (e) {
      dispatch(firebaseLogOutError(e.message));
    }
  };
};