// import React, { useEffect } from 'react';
// import { Redirect, Switch, Route } from 'react-router-dom';
// import styles from './layout.module.css';
// import Header from 'Components/Header';
// import Footer from 'Components/Footer';
// import Home from 'Components/Home';
// import Login from 'Components/Login';
// import PrivateRoute from './PrivateRoute';
// import ProductsRoutes from './products';
// import { tokenListener } from 'helpers/firebase';

// const Layout = () => {
//     useEffect(() => {
//         tokenListener();
//     }, []);

//     return (
//         <div className={styles.container}>
//             <Header />
//             <Switch>
//                 <PrivateRoute path="/products/" component={ProductsRoutes} />
//                 <Route path="/login" component={Login}/>
//                 <Redirect to="/login" component={Login}/>
//                 <Route exact path="/">
//                     <Redirect to="/home" component={Home}/>
//                 </Route>
//             </Switch>
//             <Footer />
//         </div>
//     );
// };

// export default Layout;
