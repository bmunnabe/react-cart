import React, { Component } from 'react';
import './App.css';
import Products from './components/products';
import Navigator from './components/navigator';

export default class App extends Component {
	state = {
		products: [ { id: 1, value: 4 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 } ]
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
		const products = [
			...this.state.products.slice(0, index),
			{ id: product.id, value: product.value + 1 },
			...this.state.products.slice(index + 1)
		];
		this.setState({ products });
	};

	handleDecrement = (product) => {
		const index = this.getIndexOfSelectedProduct(product);
		const value = product.value - 1 <= 0 ? 0 : product.value - 1;
		const products = [
			...this.state.products.slice(0, index),
			{ id: product.id, value },
			...this.state.products.slice(index + 1)
		];
		this.setState({ products });
	};

	render() {
		return (
			<div className="App">
				<Navigator />
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
