import React, { Component, Fragment } from 'react';
import Product from './product';

export default class Products extends Component {
	render() {
		const { products, onAddItem, onRemoveItem, onDelete, onReset } = this.props;
		return (
			<Fragment>
				<button onClick={onReset} className="btn btn-primary btn-sm">
					Reset
				</button>
				<div className="card-deck">
					{products.map((product) => (
						<Product
							key={product.id}
							onAddItem={() => onAddItem(product)}
							onRemoveItem={() => onRemoveItem(product)}
							onDelete={() => onDelete(product)}
							product={product}
						/>
					))}
				</div>
			</Fragment>
		);
	}
}
