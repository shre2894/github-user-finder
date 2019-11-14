import React, { Component } from 'react';
import propTypes from "prop-types";

class Search extends Component {
	state = {
		text: ''
	};

	onChange = e => this.setState({ [e.target.name]: e.target.value });

	/** @param {Event} e */
	onSubmit = e => {
		e.preventDefault();
		this.props.searchUsers(this.state.text);
		this.setState({ text: '' });
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

	static propTypes = {
		searchUsers: propTypes.func.isRequired
	};
}

export default Search;
