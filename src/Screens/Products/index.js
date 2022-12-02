import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts, deleteProducts } from 'redux/products/thunks';
import {
  confirmModalOpen,
  confirmModalClose,
  messageModalClose
} from 'redux/products/actions';
import ModalConfirm from 'Components/Shared/Modal/ModalConfirm';
import ModalMessage from 'Components/Shared/Modal/ModalMessage';
import styles from './products.module.css';

const Products = (props) => {
  const [itemId, setItemId] = useState(null);
  const {
    isLoading,
    list: productsList,
    modalContent,
    showModalMessage,
    showConfirmModal
  } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const onConfirm = () => {
    dispatch(deleteProducts(itemId));
    dispatch(confirmModalClose());
  };

  const onCancel = () => {
    dispatch(confirmModalClose());
  };

  const onClose = () => {
    dispatch(messageModalClose());
  };


  if (isLoading) {
    return (
      <div className={styles.tableTitle}>
        <div className={styles.spinnerContainer}>
          <img src="/assets/icons/spinner.gif" alt="spinner" />
        </div>
      </div>
    )
  } else {
    return (
      <section className={styles.container}>
        <ModalConfirm
        show={showConfirmModal}
        modalTitle={modalContent.title}
        modalContent={modalContent.content}
        onConfirm={onConfirm}
        onCancel={onCancel}
        />
        <ModalMessage
        show={showModalMessage}
        modalTitle={modalContent.title}
        modalContent={modalContent.content}
        onClose={onClose}
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
                    <td className={styles.textLeft}>$ {product.price}</td>
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
                          setItemId(product._id);
                          const content = `Do you want to DELETE Product: ${product.name}`
                          dispatch(confirmModalOpen(content));
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