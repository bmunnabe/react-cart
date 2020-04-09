import React from 'react';
import AddItem from './add-item';
import RemoveItem from './remove-item';

export default function Product(props) {
	const { product, onAddItem, onRemoveItem } = props;
	const classesName = ({ value }) => (value === 0 ? 'badge m-2 badge-warning' : 'badge m-2 badge-primary');
	return (
		<React.Fragment>
			<div className="card">
				<img src={product.imgUrl} className="card-img-top" alt="product.name" />
				<div className="card-body">
					<h5 className="card-title">{product.name}</h5>
					<p className="card-text">Price : ${product.price}</p>
				</div>
				<div className="card-footer">
					<span className={classesName(product)}>{product.value}</span>
					<AddItem onAddItem={() => onAddItem(product)} />
					<RemoveItem onRemoveItem={() => onRemoveItem(product)} />
				</div>
			</div>
		</React.Fragment>
	);
}
