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
		let classes = total.qty > 0 ? 'btn btn-success nav-link' : 'btn bt-success nav-link';
		const styleTxt = { marginLeft: 5, display: 'flex', flexDirection: 'column', justifyContent: 'center' };
		const styleBtn = { display: 'flex', alignItems: 'center' };
		return (
			<Link className="nav-link" to="/checkout">
				<button style={styleBtn} className={classes}>
					<FontAwesomeIcon size="2x" icon={faShoppingCart} />
					<span style={styleTxt}>
						<span>Items : {total.items} </span>
						<span>Qty : {total.qty}</span>
					</span>
				</button>

				{/* <button type="button" class="btn btn-primary">
					<FontAwesomeIcon size="2x" icon={faShoppingCart} />
					<span class="badge badge-light">{total.items}</span>
				</button> */}
			</Link>
		);
	};

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="navbar-header">
				<span className="navbar-brand">MunnaCart</span>
			</div>
			<ul className="nav justify-content-end" style={{ alignItems: 'center' }}>
				<li className="nav-item">
					<Link className="nav-link" to="/">
						Home
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/about">
						About
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/contact">
						Contact
					</Link>
				</li>
				<li className="nav-item">{countOfSelectedProduct(products)}</li>
			</ul>
		</nav>
	);
}
