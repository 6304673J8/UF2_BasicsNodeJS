import React, { Component } from 'react';

//import './TodoList.css';

class ItemList extends Component {
	render() {
		const listContent = {
			backgroundColor:"#eeeeff",
			padding:0,
			margin:0,
			listStyleType:"none"
		}
		return (
			<div style={listContent}>
				<li>
					{this.props.item}
					<button>X</button>
				</li>	
			</div>
		);
	}
}

export default ItemList;
