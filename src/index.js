import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './styles.css';
import Navbar from './layout/Navbar';
import Users from './users/Users';

class App extends React.Component {
	state = {
		loading: false,
		users: []
	};

	async componentDidMount() {
		this.setState({ loading: true });
		const res = await axios.get(
			`https://api.github.com/users?client_id${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		this.setState({ users: res.data, loading: false });
	}

	render() {
		const { loading, users } = this.state;
		return (
			<div className="App">
				<Navbar />
				<div className="container">
					<Users loading={loading} users={users} />
				</div>
			</div>
		);
	}
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
