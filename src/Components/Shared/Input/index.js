import React from 'react';
import styles from './input.module.css';

const Input = ({ label, disabled, id, register, name, required, placeholder, type, error }) => {
  return (
    <div className={styles.inputWrapper}>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        disabled={disabled}
        id={id}
        name={name}
        {...register(name)}
        required={required}
        placeholder={placeholder}
        type={type}
      />
      {error && <p className={styles.inputError}> {error} </p>}
    </div>
  );
};

export default Input;