import React, { Component } from 'react';
import QuotesText from '../Components/QuotesText';
import QuoteAuthor from '../Components/QuoteAuthor';
import Buttons from '../Components/Buttons';
import axios from 'axios';
import './Quotes.css';

class Quotes extends Component {
	state = {
		quote: 'Balls and weiners in and around my mouth',
		author: 'Aaron Gardiner (Peace be upon him)',
		quotesData: [],
		color: 'rgb(243, 156, 18)',
	};
	randomColor = () => {
		var colorPatterns = '1234567890ABCDEF';
		var color = '#';
		for (var i = 0; i < 6; i++) {
			color += colorPatterns[Math.floor(Math.random() * 16)];
		}
		return color;
	};

	componentDidMount() {
		if (this.state.quotesData.length > 0) {
			return;
		} else {
			this.fetchQuotes();
		}
	}

	fetchQuotes = () => {
		axios
			.get(
				'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
			)
			.then((res) => {
				const quotesData = [...res.data.quotes];
				const color = this.randomColor;
				document.body.style.color = color;
				document.body.style.backgroundColor = color;

				this.setState({
					quotesData: quotesData,
					color: color,
				});
			})
			.catch((error) => console.log(error));
	};
	handleClick = () => {
		let randomIndex = Math.floor(Math.random() * 16);
		let { quote, author } = this.state.quotesData[randomIndex];

		const color = this.randomColor();
		document.body.style.color = color;
		document.body.style.backgroundColor = color;

		this.setState({
			quote: quote,
			author: author,
		});
	};
	render() {
		return (
			<div id="quote-box">
				<QuotesText quote={this.state.quote} color={this.state.color} />
				<QuoteAuthor author={this.state.author} color={this.state.color} />
				<Buttons handleClick={this.handleClick} color={this.state.color} />
			</div>
		);
	}
}

export default Quotes;
