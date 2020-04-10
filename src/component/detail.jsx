import React, { Component, Fragment } from 'react';
import { faBold } from '@fortawesome/free-solid-svg-icons';
export default class Detail extends Component {
	render() {
		const { products, match: { params } } = this.props;
		const product = products.find((item) => item.id === Number(params.id));
		return (
			<Fragment>
				<div className="container">
					<div className="row">
						<div className="col-4">
							<img
								src={`http://localhost:3000/${product.imgUrl}`}
								className="card-img-top"
								alt={product.name}
							/>
						</div>
						<div
							className="col-8"
							style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
						>
							<h3 className="display-4">{product.name}</h3>
							<h5 className="lead mb-0" style={{ fontWeight: faBold }}>
								Product Detail :
							</h5>
							<p className="lead mb-0">
								Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est
								non commodo luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
								posuere erat a ante.
							</p>
							<h3>Price : ${product.price} </h3>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}
