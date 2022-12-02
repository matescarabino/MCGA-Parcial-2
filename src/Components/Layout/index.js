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
import { getAuth, signOut } from 'firebase/auth'

import styles from './layout.module.css';

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
            <button onClick={() => signOut(getAuth())}>Sign out</button>
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
    return(
        <h2>Welcome {user?.email}</h2>
    )
}

const Layout = () => {
    return (
        <>
            <AuthContextProvider>
                <Router>
                    <header>
                        <nav className={styles.navbar}>
                            <div className={styles.appName}>
                                MCGA - Parcial 2
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