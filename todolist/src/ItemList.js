import React, { Component } from 'react';

//import './TodoList.css';

class ItemList extends Component {
	render(){ 
		return (
			<li>
				{this.props.item}
				<button>X {this.props.eraseItem}</button>
			</li>
		);
	}
}

export default ItemList;
