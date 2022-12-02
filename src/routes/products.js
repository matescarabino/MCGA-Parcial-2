import Layout from 'Components/Layout';
import { useRouteMatch, Route, Switch } from 'react-router-dom';
import Products from 'Screens/Products';
import ProductsForm from 'Screens/Products/Form';

const routes = [
  {
    name: 'home',
    path: '/products'
  }
];
const ProductsRouter = () => {
  const { url } = useRouteMatch();
  return (
    <Layout routes={routes}>
      <Switch>
        <Route exact path={`${url}/`} component={Products} />
        <Route exact path={`${url}/form`} component={ProductsForm} />
        <Route path={`${url}/form/:id`} component={ProductsForm} />
      </Switch>
    </Layout>
  );
};

export default ProductsRouter;
