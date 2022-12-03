import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './form.module.css';
import Input from 'Components/Shared/Input';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import { getByIdProducts, postProducts, editProducts, getProducts } from 'redux/products/thunks';
import {
  messageModalClose
} from 'redux/products/actions';
import ModalMessage from 'Components/Shared/Modal/ModalMessage';

import { joiResolver } from '@hookform/resolvers/joi';
import { productSchema } from './validations';

const Form = (props) => {

  const [formMode, setFormMode] = useState(true);
  const [formText, setFormText] = useState('Add Product');
  const params = useParams();
  const id = params.id ? params.id : '';
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState({});

  const {
    handleSubmit,
    register,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: joiResolver(productSchema)
  });

  const {
    isLoading,
    item: product,
    error,
    modalContent,
    showModalMessage,
  } = useSelector((state) => state.products);


  useEffect(() => {
    setFormValues({
      name: '',
      description: '',
      price: '',
      stock: ''
    });

    if (id) {
      dispatch(getByIdProducts(id));
    }
  }, []);


  useEffect(() => {
    if (product && id) {
      setFormMode(false);
      setFormText('Update Product');
      setValue("name", product.name);
      setValue("description", product.description);
      setValue("price", product.price);
      setValue("stock", product.stock);
    }
  }, [product]);

  const onSubmit = async (event) => {
    if (formMode) {
      dispatch(postProducts(event.name, event.description, event.price, event.stock));
    } else {
      dispatch(editProducts(id, event.name, event.description, event.price, event.stock));
    }
  };

  const onClose = () => {
    dispatch(messageModalClose());
    reset(formValues);
  };

  if (isLoading) {
    return (
      <div className={styles.spinnerContainer}>
        <img src="/assets/icons/spinner.gif" alt="spinner" />
      </div>
    )
  } else if (error !== false) {
    return (
      <section className={styles.container}>
        <div className={styles.tableTitle}>
          <h2>{error}</h2>
        </div>
      </section>
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
        <div className={styles.container}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>{formText}</h2>
            <Input
              register={register}
              label={'Product'}
              name="name"
              type="text"
              error={errors.name?.message}
              placeholder={'Product Name'}
            />
            <Input
              register={register}
              label={'Description'}
              name="description"
              type="text"
              error={errors.description?.message}
              placeholder={'Description'}
            />
            <Input
              register={register}
              label={'Price'}
              name="price"
              type="text"
              error={errors.price?.message}
              placeholder={'Price'}
            />
            <Input
              register={register}
              label={'Stock'}
              name="stock"
              type="text"
              error={errors.stock?.message}
              placeholder={'Stock'}
            />
            <div className={styles.cardButton}>
              <div>
                <button
                  className={styles.cancel}
                  onClick={() => {
                    dispatch(getProducts());
                    props.history.push('/products');
                  }}
                >
                  Close
                </button>
              </div>
              <div>
                <button className={styles.confirm} type="submit">
                  Confirm
                </button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
};

export default Form;