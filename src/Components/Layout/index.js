import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
} from 'react-router-dom'
import Footer from 'Components/Footer';
import Home from 'Components/Home'
import Login from 'Components/Login'
import Products from 'Screens/Products';
import ProductsForm from 'Screens/Products/Form';

import { AuthContextProvider, useAuthState } from 'helpers/firebase'
// import { getAuth, signOut } from 'firebase/auth'
import { logOutFirebase } from 'redux/auth/thunks';
import ModalMessage from 'Components/Shared/Modal/ModalMessage';
import {
    messageModalClose
} from 'redux/auth/actions';
import { useSelector, useDispatch } from 'react-redux';


import styles from './layout.module.css';

const Layout = () => {
    const {
        modalContent,
        showModalMessage,
    } = useSelector((state) => state.login);
    const dispatch = useDispatch();

    const AuthenticatedRoute = ({ component: C, ...props }) => {
        const { isAuthenticated } = useAuthState()
        return (
            <Route
                {...props}
                render={routeProps =>
                    isAuthenticated ? <C {...routeProps} /> : <Redirect to="/login" />
                }
            />
        )
    }

    const UnauthenticatedRoute = ({ component: C, ...props }) => {
        const { isAuthenticated } = useAuthState()
        return (
            <Route
                {...props}
                render={routeProps =>
                    !isAuthenticated ? <C {...routeProps} /> : <Redirect to="/" />
                }
            />
        )
    };

    const LoginLogout = () => {
        const { isAuthenticated } = useAuthState()

        if (isAuthenticated) {
            return (
                <Link to="/">
                    <button onClick={() => dispatch(logOutFirebase())}>Logout</button>
                </Link>
            )
        } else {
            return (
                <Link to="/login">
                    <button>Login</button>
                </Link>
            )
        }
    }

    const Welcome = () => {
        const { user } = useAuthState()
        const { isAuthenticated } = useAuthState()

        if (isAuthenticated) {
            return (
                <h2 className={styles.welcome}>Welcome {user?.email}</h2>
            )
        }
    }

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