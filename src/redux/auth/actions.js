import {
  FIREBASE_LOGIN_PENDING,
  FIREBASE_LOGIN_SUCCESS,
  FIREBASE_LOGIN_ERROR,
  MESSAGE_MODAL_OPEN,
  MESSAGE_MODAL_CLOSE,
  CONFIRM_MODAL_OPEN,
  CONFIRM_MODAL_CLOSE
} from './constants';

export const firebaseLoginPending = () => {
  return {
    type: FIREBASE_LOGIN_PENDING
  };
};

export const firebaseLoginSuccess = () => {
  return {
    type: FIREBASE_LOGIN_SUCCESS,
  };
};

export const firebaseLoginError = (data) => {
  return {
    type: FIREBASE_LOGIN_ERROR,
    payload: data
  };
};

export const messageModalOpen = (content) => {
  return {
    type: MESSAGE_MODAL_OPEN,
    payload: content
  };
};

export const messageModalClose = () => {
  return {
    type: MESSAGE_MODAL_CLOSE
  };
};

export const confirmModalOpen = (content) => {
  return {
    type: CONFIRM_MODAL_OPEN,
    payload: content
  };
};

export const confirmModalClose = () => {
  return {
    type: CONFIRM_MODAL_CLOSE
  };
};