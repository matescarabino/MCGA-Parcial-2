import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/products/thunks';
import styles from './products.module.css';
import ModalDelete from '../../Components/Shared/Modal/ModalDelete';

const Products = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [itemId, setItemId] = useState(null);
  const {
    isPending,
    list: productsList,
    error,
  } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const closeModal = () => {
    setShowModal(false);
  };

  if (isPending) {
    return (
      <div className={styles.tableTitle}>
        <h2>Products</h2>
        <div className={styles.spinnerContainer}>
          <img src="/assets/icons/spinner.gif" alt="spinner" />
        </div>
      </div>
    )
  } else if (error !== false) {
    return (
      <section className={styles.container}>
        <div className={styles.tableTitle}>
          <h2>Could not GET products list</h2>
          <h2>{error}</h2>
        </div>
      </section>
    )
  } else {
    return (
      <section className={styles.container}>
        <ModalDelete
          show={showModal}
          closeModal={closeModal}
          itemId={itemId}
          title={'Do you want to delete this Product ?'}
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
                <th className={styles.textLeft}>Product Name</th>
                <th className={styles.textLeft}>Description</th>
                <th className={styles.textLeft}>Price USD</th>
                <th className={styles.textLeft}>Stock</th>
                <th className={styles.button}></th>
              </tr>
            </thead>
            <tbody>
              {productsList.map((product) => {
                return (
                  <tr key={product._id}>
                    <td className={styles.textLeft}>{product.name}</td>
                    <td className={styles.textLeft}>{product.description}</td>
                    <td className={styles.textLeft}>$ {product.price['$numberDecimal']}</td>
                    <td className={styles.textLeft}>{product.stock}</td>
                    <td className={styles.buttons}>
                      <Link to={`/products/${product._id}`}>
                        <button className={styles.update}>
                          <img src="/assets/icons/edit.svg" alt="update" />
                        </button>
                      </Link>
                      <button
                        className={styles.delete}
                        onClick={() => {
                          setItemId(product._id);
                          setShowModal(true);
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
  }
};

export default Products;