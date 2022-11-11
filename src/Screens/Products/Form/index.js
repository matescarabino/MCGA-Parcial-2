import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './form.module.css';
import Input from '../../../Components/Shared/Input';

const Form = (props) => {
  const [productInput, setProductInput] = useState({
    name: '',
    description: '',
    price: '',
    stock: ''
  });
  const [formMode, setFormMode] = useState(true);
  const [formText, setFormText] = useState('Add Product');
  const params = useParams();
  const id = params.id ? params.id : '';

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
          setProductInput({
            name: json.data.name,
            description: json.data.description,
            price: json.data.price['$numberDecimal'],
            stock: json.data.stock
          });
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
      event.preventDefault();
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/product/add`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: productInput.name,
            description: productInput.description,
            price: productInput.price,
            stock: productInput.stock
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
      event.preventDefault();
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/product/update/${id}`, {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: productInput.name,
            description: productInput.description,
            price: productInput.price,
            stock: productInput.stock
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
      <form onSubmit={onSubmit}>
        <div className={styles.card}>
          <div className={styles.cardTitle}>{formText}</div>
          <div>
            <label>Product</label>
            <Input
              name="name"
              required
              type="text"
              value={productInput.name}
              onChange={(e) => {
                setProductInput({ ...productInput, name: e.target.value });
              }}
              placeholder={'Product Name'}
            />
          </div>
          <div>
            <label>Description</label>
            <Input
              name="description"
              required
              type="text"
              value={productInput.description}
              onChange={(e) => {
                setProductInput({ ...productInput, description: e.target.value });
              }}
              placeholder={'Description'}
            />
          </div>
          <div>
            <label>Price</label>
            <Input
              name="price"
              required
              type="text"
              value={productInput.price}
              onChange={(e) => {
                setProductInput({ ...productInput, price: e.target.value });
              }}
              placeholder={'Price'}
            />
          </div>
          <div>
            <label>Stock</label>
            <Input
              name="stock"
              required
              type="text"
              value={productInput.stock}
              onChange={(e) => {
                setProductInput({ ...productInput, stock: e.target.value });
              }}
              placeholder={'Stock'}
            />
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