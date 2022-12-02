import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import {
  firebaseLoginPending,
  firebaseLoginSuccess,
  firebaseLoginError,
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
