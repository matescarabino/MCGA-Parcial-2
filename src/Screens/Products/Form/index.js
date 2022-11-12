import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './form.module.css';
import Input from '../../../Components/Shared/Input';
import { useForm } from "react-hook-form";

const Form = (props) => {
 
  const [formMode, setFormMode] = useState(true);
  const [formText, setFormText] = useState('Add Product');
  const params = useParams();
  const id = params.id ? params.id : '';

  const { register, setValue, handleSubmit, watch, formState: { errors } } = useForm();

  useEffect(() => {
    async function fetchProduct() {
      if (id) {
        try {
          const response = await fetch(`${process.env.REACT_APP_API_URL}/product/${id}`, {
            method: 'GET'
          });
          const json = await response.json();
          setFormMode(false);
          setFormText('Update Product');
          setValue("name", json.data.name); 
          setValue("description", json.data.description); 
          setValue("price", json.data.price['$numberDecimal']); 
          setValue("stock", json.data.stock); 
        } catch (error) {
          alert('Could not GET Product.', error);
        }
      } else {
        return null;
      }
    }
    fetchProduct();
  }, [id]);


  const onSubmit = async (event) => {
    if (formMode) {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/product/add`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: event.name,
            description: event.description,
            price: event.price,
            stock: event.stock
          })
        });
        if (response.status === 201) {
          alert('Product Added.');
          props.history.push('/products');
        } else {
          alert('Product could not be Added.');
        }
      } catch (error) {
        alert('Product could not be Added.');
      }
    } else {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/product/update/${id}`, {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: event.name,
            description: event.description,
            price: event.price,
            stock: event.stock
          })
        });
        if (response.status === 202) {
          alert('Product Updated.');
          props.history.push('/products');
        } else {
          alert('Product could not be Updated.');
        }
      } catch (error) {
        alert('Product could not be Updated.');
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.card}>
          <div className={styles.cardTitle}>{formText}</div>
          <div>
            <label>Product</label>
            <Input
              register={register}
              nameRegister={'name'}
              required={'required: true, maxLength: 20 '}
              placeholder={'Product Name'}
            />
             {errors.name?.type === 'required' && <p className={styles.fail}>Name is required</p>}
             {errors.name?.type === 'maxLength' && <p className={styles.fail}>MaxLength is 20</p>}
          </div>
          <div>
            <label>Description</label>
            <Input
              register={register}
              nameRegister={'description'}
              required={'required: true, maxLength: 50 '}
              placeholder={'Description'}
            />
             {errors.description?.type === 'required' && <p className={styles.fail}>description is required</p>}
             {errors.description?.type === 'maxLength' && <p className={styles.fail} >MaxLength is 50</p>}
          </div>
          <div>
            <label>Price</label>
            <Input
              register={register}
              nameRegister={'price'}
              required={'required: true, min: 1 '}
              type="number"
              placeholder={'Price'}
            />
            {errors.price?.type === 'required' && <p className={styles.fail}>price is required</p>}
            {errors.price?.type === 'maxLength' && <p  className={styles.fail}>Min is 1</p>}
          </div>
          <div>
            <label>Stock</label>
            <Input
              register={register}
              nameRegister={'stock'}
              required={'required: true, min: 1 '}
              type="number"
              placeholder={'Stock'}
            />
            {errors.stock?.type === 'required' && <p className={styles.fail}>Stock is required</p>}
            {errors.stock?.type === 'maxLength' && <p className={styles.fail} >Min is 1</p>}
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
};

export default Form;