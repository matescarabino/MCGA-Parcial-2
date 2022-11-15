import React from 'react';
import styles from './modalMessage.module.css';
import Button from '../../Button/index';

const ModalMessage = ({ show, onClose, modalTitle, modalContent }) => {
  return (
    show && (
      <div className={styles.container}>
        <div className={styles.modal}>
          <h3 className={modalTitle}>{modalTitle}</h3>
          <h4 className={styles.modalContent}>{modalContent}</h4>
          <div className={styles.buttonsDiv}>
            <div className={styles.buttonsDiv}>
              <Button
                variant={'confirm'}
                name={'Confirm'}
                onClick={onClose}
                disabled={false}
              >
              </Button>
            </div>
          </div>

        </div>
      </div>
    )
  );
};

export default ModalMessage;