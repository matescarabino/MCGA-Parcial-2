import styles from './modal.module.css';
import Button from '../../Button/index';
import { useDispatch } from 'react-redux';
import { deleteProducts } from '../../../../redux/products/thunks';

const Modal = (props) => {
  const dispatch = useDispatch();

  if (!props.show) {
    return null;
  }
  const onCloseModal = () => {
    if(props.itemId){
      dispatch(deleteProducts(props.itemId));
    }
    props.closeModal();
  };

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h3 className={styles.modalTitle}>{props.title}</h3>
        <div className={styles.buttonsDiv}>
          <div>
            <Button
              variant={'cancel'}
              name={'Cancel'}
              onClick={props.closeModal}
              disabled={false}
              >
            </Button>
          </div>
          <div>
            <Button
              variant={'confirm'}
              name={'Confirm'}
              onClick={() => {
                onCloseModal();
              }}
              disabled={false}
            >
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

