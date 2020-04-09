import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Navigator(props) {
	const { products } = props;
	const countOfSelectedProduct = (products) => {
		const total = products.reduce(
			(acc, item) => {
				const qty = acc.qty + item.value;
				const items = item.value > 0 ? acc.items + 1 : acc.items;
				return { qty, items };
			},
			{ qty: 0, items: 0 }
		);
		let classes = total.qty > 0 ? 'btn btn-success' : 'btn';
		const styleTxt = { marginLeft: 5, display: 'flex', flexDirection: 'column', justifyContent: 'center' };
		const styleBtn = { display: 'flex', alignItems: 'center' };
		return (
			<span>
				<button style={styleBtn} className={classes}>
					<FontAwesomeIcon size="2x" icon={faShoppingCart} />
					<span style={styleTxt}>
						<span>Items : {total.items} </span>
						<span>Qty : {total.qty}</span>
					</span>
				</button>
			</span>
		);
	};

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="navbar-header">
				<span className="navbar-brand">MunnaCart</span>
			</div>
			<ul className="nav justify-content-end">
				<li className="nav-item">
					<span className="nav-link active">
						<Link to="/">Home</Link>
					</span>
				</li>
				<li className="nav-item">
					<span className="nav-link">
						<Link to="/about">About</Link>
					</span>
				</li>
				<li className="nav-item">
					<span className="nav-link">
						<Link to="/contact">Contact</Link>
					</span>
				</li>
				<li className="nav-item">{countOfSelectedProduct(products)}</li>
			</ul>
		</nav>
	);
}
