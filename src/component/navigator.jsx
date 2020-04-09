import React from 'react';
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
		return (
			<span>
				Items : {total.items} Qty : {total.qty}
			</span>
		);
	};

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="navbar-header">
				<a className="navbar-brand" href="#">
					Munna Babu
				</a>
			</div>
			<ul className="nav justify-content-end">
				<li className="nav-item">
					<a className="nav-link active" href="#">
						Active
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						Link
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
						Disabled
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
						<FontAwesomeIcon size="2x" icon={faShoppingCart} />
						{countOfSelectedProduct(products)}
					</a>
				</li>
			</ul>
		</nav>
	);
}
