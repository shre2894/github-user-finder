import React, { Component } from 'react';

class Search extends Component {
	state = {
		text: ''
	};

	onChange = e => this.setState({ [e.target.name]: e.target.value });

	/** @param {Event} e */
	onSubmit = e => {
		e.preventDefault();
	};

	render() {
		const { text } = this.state;
		return (
			<div>
				<form onSubmit={this.onSubmit} className="form">
					<input
						type="text"
						name="text"
						placeholder="Search Users..."
						value={text}
						onChange={this.onChange}
					/>
					<input type="submit" value="search" className="btn btn-dark btn-block" />
				</form>
			</div>
		);
	}
}

export default Search;
