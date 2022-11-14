import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './form.module.css';
import Input from '../../../Components/Shared/Input';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import { getByIdProducts, postProducts, editProducts } from '../../../redux/products/thunks';

const Form = (props) => {

  const [formMode, setFormMode] = useState(true);
  const [formText, setFormText] = useState('Add Product');
  const params = useParams();
  const id = params.id ? params.id : '';
  const dispatch = useDispatch();

  const { register, setValue, handleSubmit, formState: { errors } } = useForm();

  const {
    isPending,
    item: product,
    error,
  } = useSelector((state) => state.products);


  useEffect(() => {
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
      setValue("price", product.price['$numberDecimal']);
      setValue("stock", product.stock);
    }
  }, [product]);

  const onSubmit = async (event) => {
    if (formMode) {
      dispatch(postProducts(event.name, event.description, event.price, event.stock));
      window.location.reload();

    } else {
      dispatch(editProducts(id, event.name, event.description, event.price, event.stock));
      props.history.push('/products');
      window.location.reload();
    }
  };

  if (isPending) {
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
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.card}>
            <div className={styles.cardTitle}>{formText}</div>
            <div>
              <label>Product</label>
              <Input
                register={register}
                requiredMany={{ required: true, maxLength: 20, minLength: 5, pattern: /(^$)|[a-zA-Z0-9]/ }}
                nameRegister={'name'}
                placeholder={'Product Name'}
              />
              {errors.name?.type === 'required' && <p className={styles.fail}>Name is required</p>}
              {errors.name?.type === 'maxLength' && <p className={styles.fail}>MaxLength is 20</p>}
              {errors.name?.type === 'minLength' && <p className={styles.fail}>MinLength is 5</p>}
              {errors.name?.type === 'pattern' && <p className={styles.fail}>Spaces are not allowed</p>}
            </div>
            <div>
              <label>Description</label>
              <Input
                register={register}
                nameRegister={'description'}
                requiredMany={{ required: true, maxLength: 50, pattern: /(^$)|[a-zA-Z0-9]/ }}
                placeholder={'Description'}
              />
              {errors.description?.type === 'required' && <p className={styles.fail}>Description is required</p>}
              {errors.description?.type === 'maxLength' && <p className={styles.fail} >MaxLength is 50</p>}
              {errors.description?.type === 'pattern' && <p className={styles.fail} >Spaces are not allowed</p>}
            </div>
            <div>
              <label>Price</label>
              <Input
                register={register}
                nameRegister={'price'}
                requiredMany={{ required: true, min: 1 }}
                type="number"
                placeholder={'Price'}
              />
              {errors.price?.type === 'required' && <p className={styles.fail}>Price is required</p>}
              {errors.price?.type === 'min' && <p className={styles.fail}>Min is 1</p>}
            </div>
            <div>
              <label>Stock</label>
              <Input
                register={register}
                nameRegister={'stock'}
                requiredMany={{ required: true, min: 1 }}
                type="number"
                placeholder={'Stock'}
              />
              {errors.stock?.type === 'required' && <p className={styles.fail}>Stock is required</p>}
              {errors.stock?.type === 'min' && <p className={styles.fail} >Min is 1</p>}
            </div>
            <div className={styles.cardButton}>
              <div>
                <button className={styles.cancel} onClick={() => props.history.push('/products')}>
                  Cancel
                </button>
              </div>
              <div>
                <button className={styles.confirm} type="submit">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default Form;