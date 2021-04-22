import React, { Component } from 'react';

//import './TodoList.css';

class ItemList extends Component {
	constructor (props){
		super(props);

		this.eraseItem = this.eraseItem.bind(this);
	}

	eraseItem(){
		this.props.parentRemove(this.props.id_item);
	}
	render(){ 
		return (
			<li className="list">
				{this.props.item}
				<button className="delete" onClick={this.eraseItem}>X</button>
			</li>
		);
	}
}

export default ItemList;
