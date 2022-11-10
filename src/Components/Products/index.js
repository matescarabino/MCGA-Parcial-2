import React from 'react'
import { useEffect, useState } from 'react';
import styles from './products.module.css';

const Products = (props) => {
  const [products, setProducts] = useState([]);

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

  console.log(products)

  return (
    <section className={styles.container}>
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
                  <td className={styles.textLeft}>{product.price['$numberDecimal']}</td>
                  <td className={styles.textLeft}>{product.stock}</td>
                  <td className={styles.buttons}>
                    <button className={styles.update}>
                      <img src="/assets/icons/edit.svg" alt="update" />
                    </button>
                    <button className={styles.delete}>
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