import React from 'react';
import styles from './input.module.css';

const Input = ({ disabled, id, name, onChange, required, placeholder, type, value }) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        className={`${disabled && styles.disabled} ${styles.input}`}
        disabled={disabled}
        id={id}
        name={name}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </div>
  );
};

export default Input;
