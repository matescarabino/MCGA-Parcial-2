import Input from 'Components/Shared/Input';
import styles from './form.module.css';

import { useForm } from "react-hook-form";
import { joiResolver } from '@hookform/resolvers/joi';
import { loginSchema } from './validations';

import { useSelector, useDispatch } from 'react-redux';
import { loginFirebase } from 'redux/auth/thunks';
import ModalMessage from 'Components/Shared/Modal/ModalMessage';
import {
  messageModalClose
} from 'redux/auth/actions';

const Login = () => {

  const {
    isLoading,
    modalContent,
    showModalMessage,
  } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const onSubmit = async e => {
    dispatch(loginFirebase(e.email, e.password))
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: joiResolver(loginSchema)
  });


  const onClose = () => {
    dispatch(messageModalClose());
  };

  if (isLoading) {
    return (
      <div className={styles.spinnerContainer}>
        <img src="/assets/icons/spinner.gif" alt="spinner" />
      </div>
    )
  } else {

    return (
      <>
        <ModalMessage
          show={showModalMessage}
          modalTitle={modalContent.title}
          modalContent={modalContent.content}
          onClose={onClose}
        />
        <div className={styles.card}>
          <div className={styles.cardTitle}>Login</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              register={register}
              label={'Email'}
              name="email"
              type="text"
              error={errors.email?.message}
              placeholder={'Email'}
            />
            <Input
              register={register}
              label={'Password'}
              name="password"
              type="password"
              error={errors.password?.message}
              placeholder={'Password'}
            />
            <div className={styles.cardButton}>
              <button className={styles.confirm} type="submit">Login</button>
            </div>
          </form>
        </div>
      </>
    )
  }
};

export default Login;
