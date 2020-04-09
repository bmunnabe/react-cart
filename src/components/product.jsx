import React from 'react';
import logo from '../../src/logo.svg';

export default function Product(props) {
	const { product, onAddItem, onDelete, onRemoveItem } = props;
	const classesName = ({ value }) => (value === 0 ? 'badge m-2 badge-warning' : 'badge m-2 badge-primary');
	return (
		<React.Fragment>
			<div className="card">
				<img src={logo} className="card-img-top App-logo" alt="logo" />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and make up the bulk of the card's content.
					</p>
				</div>
				<div className="card-footer">
					<span className={classesName(product)}>{product.value}</span>
					<button className="btn btn-secondary btn-sm card-link" onClick={() => onAddItem(product)}>
						Add
					</button>
					<button className="btn btn-secondary btn-sm card-link" onClick={() => onRemoveItem(product)}>
						Remove
					</button>
					{/* <button className="btn btn-danger btn-sm card-link" onClick={() => onDelete(product)}>
						Delete
					</button> */}
				</div>
			</div>
		</React.Fragment>
	);
}
