import React, { Component } from "react";
import { CardList } from "./components/cards-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			sins: [],
			searchField: "",
		};
	}
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((users) => this.setState({ sins: users }));
	}

	handleChange = (e) => {
		this.setState({ searchField: e.target.value });
	};

	render() {
		const { sins, searchField } = this.state;
		const filteredSins = sins.filter((sin) =>
			sin.name.toLowerCase().includes(searchField.toLowerCase())
		);

		return (
			<div className="App">
				<h1>The Seven Deadly Sins</h1>
				<SearchBox placeholder="Search sins" handleChange={this.handleChange} />
				<CardList sins={filteredSins} />
			</div>
		);
	}
}

export default App;
