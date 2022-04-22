import React from 'react';

function QuotesText({ quote, color }) {
	return (
		<div className="quote-text" style={{ width: '100%', color: color }}>
			<span id="text">
				<h1>{quote}</h1>
			</span>
		</div>
	);
}

export default QuotesText;
