import React from 'react';

function Buttons(props) {
	return (
		<div className="buttons">
			<button
				className="button"
				id={props.id}
				onClick={props.handleClick}
				style={{ color: 'white', backgroundColor: props.color }}
			>
				New Quote
			</button>
		</div>
	);
}

export default Buttons;
