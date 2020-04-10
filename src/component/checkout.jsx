import React from 'react';

export default function CheckOut({ products }) {
	let total = 0;
	return (
		<div>
			<ul className="list-group">
				{products.map((product) => {
					if (product.value > 0) {
						total = total + product.price * product.value;
						return (
							<li className="list-group-item" key={product.id}>
								<div style={{ maxHeight: 120 }} className="row no-gutters">
									<div className="col-md-4">
										<figure className="figure">
											<img
												src={product.imgUrl}
												className="figure-img img-fluid rounded"
												alt="product.name"
												style={{ maxWidth: 50 }}
											/>
											<figcaption className="figure-caption">{product.name}</figcaption>
										</figure>
									</div>
									<div className="col-md-8">
										<div className="card-body">
											<h5 className="card-title">{product.name}</h5>
											<p className="card-text">Price : {product.price * product.value}</p>
											<p className="card-text">Qty : {product.value}</p>
										</div>
									</div>;
								</div>
							</li>
						);
					} else {
						return '';
					}
				})}
			</ul>

			{total > 0 ? (
				<span>
					<hr />
					<div className="alert alert-success" role="alert">
						<h4 className="alert-heading">Total : {total}</h4>
					</div>
				</span>
			) : (
				<div className="alert alert-danger" role="alert">
					<h4 className="alert-heading">No items selected</h4>
				</div>
			)}
		</div>
	);
}
