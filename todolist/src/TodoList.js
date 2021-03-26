import React, { Component } from 'react';
import ItemList from './ItemList';

class TodoList extends Component {

	addItem(e) {
		e.preventDefault();	
	}
	render() {
		const listTitle = {
			backgroundColor:"DodgerBlue",
			flexGrow:1
		}
		const listSize={			
			textAlign: "center"
		}
		return (
			<div style={listSize}>
				<h2>Testerino tino tino, co-co-ding</h2>
		
				<ul>
					<p style={listTitle}>Shopping List</p>
					<ItemList item="Patata" />
					<ItemList item="Boniato" />
					<ItemList item="Amapola" />
				</ul>

				<form onSubmit={this.addItem}>
					<p><input type="text" /></p>
					<p><button type="submit">Add</button></p>
				</form>
			</div>
		);
	}
}

export default TodoList;
