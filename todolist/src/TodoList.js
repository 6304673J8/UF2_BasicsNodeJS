import React, { Component } from 'react';
import ItemList from './ItemList';

class TodoList extends Component {
	constructor (props) {
		super(props);

		this.state = {
			items : []
		};

		this.last_id = 0;
		this.addItem = this.addItem.bind(this);
		this.eraseItem = this.eraseItem.bind(this);
	}

	addItem(e) {
		e.preventDefault();

		let text_v = document.getElementById("text-task").value;
		
		document.getElementById("text-task").value = "";
		document.getElementById("text-task").value.focus;
		
		this.last_id++;

		this.state.items.push({id: this.last_id, item:text_v});
		console.log(this.state.items);

		this.setState({
			items: this.state.items
		});
	}

	eraseItem(id_item) {
		for (let i=0; i < this.state.items.length; i++){
			if(this.state.items[i].id === id_item){
				this.state.items.splice(i, 1);
				break;
			}
		}

		this.setState({
			items: this.state.items
		});
	}

	render() {
		let lista = this.state.items.map( (todo_item) => {
			return (<ItemList item={todo_item.item}
					id_item={todo_item.id}
					parentRemove={this.eraseItem} />);
		});
		
		return (
			<div>
        <p>Num Items: NUM</p>

				<form onSubmit={this.addItem}>
					<p><input type="text" id="text-task" />
					<button type="submit">Add</button></p>
				</form>
				
				<ul>
					{lista}
				</ul>


			</div>
		);
	}
}

export default TodoList;
