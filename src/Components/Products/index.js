import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './products.module.css';
import Modal from '../Shared/Modal/index';

const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [productId, setProductId] = useState(undefined);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/products/`);
        const json = await response.json();
        setProducts(json.data);
      } catch (error) {
        alert('Could not GET Products.', error);
      }}
    fetchProducts();
  }, []);

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/product/delete/${id}`, {
        method: 'DELETE'
      });
      if (response.status === 202) {
        alert('Product removed.');
        setProducts([...products.filter((product) => product._id !== id)]);
      } else {
        alert('Product could not be removed.');
      }
    } catch (error) {
      alert('Product could not be removed.', error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className={styles.container}>
      <Modal
        show={showModal}
        closeModal={closeModal}
        deleteProduct={deleteProduct}
        productId={productId}
        title="Do you want to delete this Product?"
      />
      <div className={styles.list}>
        <div className={styles.tableTitle}>
          <h2>Products</h2>
          <button
            className={styles.add}
            onClick={() => {
              props.history.push('/products/form');
            }}
          >
            <img src="/assets/icons/add.svg" alt="add Products" />
            <p>Add new Product</p>
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th className={styles.textLeft}>Name</th>
              <th className={styles.textLeft}>Description</th>
              <th className={styles.textLeft}>Price</th>
              <th className={styles.textLeft}>Stock</th>
              <th className={styles.button}></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr key={product._id}>
                  <td className={styles.textLeft}>{product.name}</td>
                  <td className={styles.textLeft}>{product.description}</td>
                  <td className={styles.textLeft}>$ {product.price['$numberDecimal']}</td>
                  <td className={styles.textLeft}>{product.stock}</td>
                  <td className={styles.buttons}>
                    <Link to={`/products/form/${product._id}`}>
                      <button className={styles.update}>
                        <img src="/assets/icons/edit.svg" alt="update" />
                      </button>
                    </Link>
                    <button
                      className={styles.delete}
                      onClick={() => {
                        setShowModal(true);
                        setProductId(product._id);
                      }}
                    >
                      <img src="/assets/icons/trash.svg" alt="delete" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
};

export default Products;