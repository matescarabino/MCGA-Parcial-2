import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
} from 'react-router-dom'
import Header from 'Components/Header';
import Footer from 'Components/Footer';
import Home from 'Components/Home'
import Login from 'Components/Login'
import Products from 'Screens/Products';
import ProductsForm from 'Screens/Products/Form';
import { AuthContextProvider, useAuthState } from 'helpers/firebase'

const AuthenticatedRoute = ({ component: C, ...props }) => {
    const { isAuthenticated } = useAuthState()
    // console.log(`AuthenticatedRoute: ${isAuthenticated}`)
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
    // console.log(`UnauthenticatedRoute: ${isAuthenticated}`)
    return (
        <Route
            {...props}
            render={routeProps =>
                !isAuthenticated ? <C {...routeProps} /> : <Redirect to="/" />
            }
        />
    )
};

const Layout = () => {
    return (
        <AuthContextProvider>
            <Header />
            <Router>
                <div>
                    <Link to="/products">Products</Link> | <Link to="/">Home</Link> | <Link to="/login">Login</Link> |{' '}
                </div>
                <Route exact path="/" component={Home} />
                <UnauthenticatedRoute exact path="/login" component={Login} />
                <AuthenticatedRoute exact path="/products" component={Products} />
                <AuthenticatedRoute exact path="/products/form" component={ProductsForm} />
                <AuthenticatedRoute path="/products/form/:id" component={ProductsForm} />
            </Router>
            <Footer />
        </AuthContextProvider>
    )
}

export default Layout