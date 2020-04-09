import React from 'react';

export default function RemoveItem(props) {
	const { product, onRemoveItem } = props;
	const style = {
		margin: '0px 3px'
	};
	return (
		<React.Fragment>
			<button style={style} className="btn btn-secondary btn-sm" onClick={() => onRemoveItem(product)}>
				-
			</button>
		</React.Fragment>
	);
}
