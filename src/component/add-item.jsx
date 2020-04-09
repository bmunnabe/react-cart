import React from 'react';

export default function AddItem(props) {
	const { product, onAddItem } = props;
	const style = {
		margin: '0px 3px'
	};
	return (
		<React.Fragment>
			<button style={style} className="btn btn-secondary btn-sm" onClick={() => onAddItem(product)}>
				+
			</button>
		</React.Fragment>
	);
}
