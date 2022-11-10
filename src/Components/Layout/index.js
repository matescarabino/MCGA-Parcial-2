import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import styles from './layout.module.css';
import Header from '../Header/index';
import Footer from '../Footer/index';
import Home from '../Home/index';
import Products from '../Products/index';
import ProductsForm from '../Products/Form';

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
