import React, { Component } from 'react';
import './App.css';
import Products from './component/products';
import Navigator from './component/navigator';
import { productList } from './assets/data/products';

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
			<div className="App">
				<Navigator products={this.state.products} />
				<main className="container">
					<Products
						onAddItem={this.handleIncrement}
						onRemoveItem={this.handleDecrement}
						onDelete={this.handleDelete}
						onReset={this.handleReset}
						products={this.state.products}
					/>
				</main>
			</div>
		);
	}
}
