import React, { Component, Fragment } from 'react';
import Product from './product';

export default class Products extends Component {
	render() {
		const { products, onAddItem, onRemoveItem, onDelete } = this.props;
		return (
			<Fragment>
				<div className="row row-cols-1 row-cols-md-4">
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
