import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Footer from 'Components/Footer';
import Home from 'Components/Home'
import Login from 'Components/Login'
import Products from 'Screens/Products';
import ProductsForm from 'Screens/Products/Form';

import { AuthContextProvider } from 'helpers/firebase'
import ModalMessage from 'Components/Shared/Modal/ModalMessage';
import {
    messageModalClose
} from 'redux/auth/actions';
import { useSelector, useDispatch } from 'react-redux';

import { LoginLogout } from './Components/LoginLogout';
import { Welcome } from './Components/Welcome';
import { AuthenticatedRoute } from './Components/AuthenticatedRoute';
import { UnauthenticatedRoute } from './Components/UnauthenticatedRoute';

import styles from './layout.module.css';

const Layout = () => {
    const {
        modalContent,
        showModalMessage,
    } = useSelector((state) => state.login);
    const dispatch = useDispatch();

    const onClose = () => {
        dispatch(messageModalClose());
    };

    return (
        <>
            <ModalMessage
                show={showModalMessage}
                modalTitle={modalContent.title}
                modalContent={modalContent.content}
                onClose={onClose}
            />
            <AuthContextProvider>
                <Router>
                    <header className={styles.header}>
                        <nav className={styles.navbar}>
                            <div className={styles.appName}>
                                MCGA - Final
                            </div>
                            <ul className={styles.rutes}>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/products">Products</Link>
                                </li>
                            </ul>
                            <LoginLogout />
                        </nav>
                    </header>

                    <Welcome />

                    <Route exact path="/" component={Home} />
                    <UnauthenticatedRoute exact path="/login" component={Login} />
                    <Route exact path="/products" component={Products} />
                    <AuthenticatedRoute exact path="/products/form" component={ProductsForm} />
                    <AuthenticatedRoute path="/products/form/:id" component={ProductsForm} />
                </Router>

                <Footer />

            </AuthContextProvider>
        </>
    )
}

export default Layout