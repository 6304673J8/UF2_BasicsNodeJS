import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import './TodoList.css';

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
		
			<Button className="delete" color="secondary" 
				variant="contained" onClick={this.eraseItem}>
				<DeleteIcon />
				
			</Button>

			</li>
		);
	}
}

export default ItemList;
