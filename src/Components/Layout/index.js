import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import styles from './layout.module.css';
import Header from '../Header';
import Footer from '../Footer';
import Home from '../Home';
import Products from '../../Screens/Products';
import ProductsForm from '../../Screens/Products/Form';

const Layout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route path="/products/form" component={ProductsForm} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
export default Layout;
