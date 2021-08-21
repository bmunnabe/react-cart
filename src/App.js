import React, { Component, Fragment, Suspense, lazy } from 'react';
import './App.css';

import Navigator from './component/navigator';
import { productList } from './assets/data/products';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Detail from './component/detail';

const Products = lazy(() => import('./component/products'));
const Contact = lazy(() => import('./component/contact'));
const About = lazy(() => import('./component/about'));
const Checkout = lazy(() => import('./component/checkout'));
const NotFound = lazy(() => import('./component/not-found'));
// const Detail = lazy(() => import('./component/product-detail'));

export default class App extends Component {
	state = {
	  products: productList
	};

	getIndexOfSelectedProduct = (product) => {
	  return [ ...this.state.products ].indexOf(product);
	};

	handleReset = () => {
	  const products = this.state.products.map((item) => {
	    item.value = 0;
	    return item;
	  });
	  this.setState({ products });
	};

	handleDelete = (product) => {
	  const index = this.getIndexOfSelectedProduct(product);
	  const products = [ ...this.state.products.slice(0, index), ...this.state.products.slice(index + 1) ];
	  this.setState({ products });
	};

	handleIncrement = (product) => {
	  const index = this.getIndexOfSelectedProduct(product);
	  const value = product.value + 1;
	  const products = [
	    ...this.state.products.slice(0, index),
	    { ...product, value },
	    ...this.state.products.slice(index + 1)
	  ];
	  this.setState({ products });
	};

	handleDecrement = (product) => {
	  const index = this.getIndexOfSelectedProduct(product);
	  const value = product.value - 1 <= 0 ? 0 : product.value - 1;
	  const products = [
	    ...this.state.products.slice(0, index),
	    { ...product, value },
	    ...this.state.products.slice(index + 1)
	  ];
	  this.setState({ products });
	};

	render() {
	  return (
	    <Fragment>
	      <Router>
	        <Navigator products={this.state.products} />
	        <div className="App" style={{ marginTop: 25 }}>
	          <main className="container">
	            <Suspense fallback={<div>Loading...</div>}>
	              <Switch>
	                <Route path="/checkout">
	                  <Checkout products={this.state.products} />
	                </Route>
	                <Route path="/about">
	                  <About />
	                </Route>
	                <Route path="/contact">
	                  <Contact />
	                </Route>
	                <Route
	                  path="/detail/:id"
	                  render={(props) => <Detail products={this.state.products} {...props} />}
	                />
	                <Route exact path="/">
	                  <Products
	                    onAddItem={this.handleIncrement}
	                    onRemoveItem={this.handleDecrement}
	                    onDelete={this.handleDelete}
	                    onReset={this.handleReset}
	                    products={this.state.products}
	                  />
	                </Route>
	                <Route path="/not-found" component={NotFound} />
	                <Redirect from="*" to="/not-found" />
	                <Route path="/*">
	                  <NotFound />
	                </Route>
	              </Switch>
	            </Suspense>
	          </main>
	        </div>
	      </Router>
	    </Fragment>
	  );
	}
}
