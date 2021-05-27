import React, { Component } from 'react';
import ItemList from './ItemList';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';

class TodoList extends Component {
	constructor (props) {
		super(props);

		this.state = {
			items : []
		};

		this.last_id = 0;
		this.addItem = this.addItem.bind(this);
		this.eraseItem = this.eraseItem.bind(this);
	
		fetch("//10.40.1.44:8081/get_items")
                        .then (res => res.json())
                        .then(data => {
                                data.forEach(item => {
                                        this.state.items.push({
                                                id: item.id,
                                                item: item.item
                                        });
                                });
                                this.setState({
                                        items: this.state.items
                                });
                                this.last_id = data[data.lenght-1].id;
                        });

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

		let item_data = JSON.stringify({
			id: this.last_id,
			item: text_v
		});

		fetch("//10.40.1.44:8081/submit", {
			method: "POST",
			headers: {
				'Content-Type':'text/json',
			},
			body: item_data
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
					parentRemove={this.eraseItem}
				/>);
		});
		
		return (
			<div className="main-box">

				<form onSubmit={this.addItem}>
					<p><TextFiel id="text-task" 
					autocomplete="off" helperText="Add Item" />
					<Button color="primary" variant="contained" type="submit">Add</Button></p>
				</form>
				
				<ul>
					{lista}
				</ul>


			</div>
		);
	}
}

export default TodoList;
