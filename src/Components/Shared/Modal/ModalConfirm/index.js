import styles from './modalConfirm.module.css';
import Button from 'Components/Shared/Button/index.js';

const ModalConfirm = ({ show, onCancel, onConfirm, modalTitle, modalContent }) => {
  return (
    show && (
      <div className={styles.container}>
        <div className={styles.modal}>
          <h3 className={styles.modalTitle}>{modalTitle}</h3>
          <h4 className={styles.modalContent}>{modalContent}</h4>
          <div className={styles.buttonsDiv}>
            <div>
              <Button
                variant={'cancel'}
                name={'Cancel'}
                onClick={onCancel}
                disabled={false}
              >
              </Button>
            </div>
            <div>
              <Button
                variant={'confirm'}
                name={'Confirm'}
                onClick={onConfirm}
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

export default ModalConfirm;