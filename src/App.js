import React, { Component, Fragment } from 'react';
import './App.css';
import Products from './component/products';
import Navigator from './component/navigator';
import { productList } from './assets/data/products';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './component/about';
import Contact from './component/contact';

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
					<div className="App">
						<main className="container">
							<Switch>
								<Route path="/about">
									<About />
								</Route>
								<Route path="/contact">
									<Contact />
								</Route>
								<Route path="/">
									<Products
										onAddItem={this.handleIncrement}
										onRemoveItem={this.handleDecrement}
										onDelete={this.handleDelete}
										onReset={this.handleReset}
										products={this.state.products}
									/>
								</Route>
							</Switch>
						</main>
					</div>
				</Router>
			</Fragment>
		);
	}
}
