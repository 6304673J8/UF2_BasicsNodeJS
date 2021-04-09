import React, { Component } from 'react';
import ItemList from './ItemList';

class TodoList extends Component {
	constructor (props) {
		super(props);

		let todo_tasks= [];
		this.state = {
			items : todo_tasks
		};

		this.addItem = this.addItem.bind(this);
	}

	addItem(e) {
		e.preventDefault();

		let text_v = document.getElementById("text-task").value;
				
		this.state.items.push({id:10, item:text_v});
		this.setState({
			items: this.state.items
		});
	}

	render() {
		let lista = this.state.items.map( (todo_item) => {
			return (<ItemList item={todo_item.item}/>);
		});

		const listSize={
			textAlign: "center"
		}
		return (
			<div style={listSize}>
				<h2>Testerino tino tino, co-co-ding</h2>

				<ul>
					{lista}
				</ul>

				<form onSubmit={this.addItem}>
					<p><input type="text" id="text-task" /></p>
					<p><button type="submit">Add</button></p>
				</form>
			</div>
		);
	}
}

export default TodoList;
