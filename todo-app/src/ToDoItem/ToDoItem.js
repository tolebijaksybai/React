import React from 'react';

const ToDoItem = props => {

	const resolvedClass = {
		textDecoration: 'line-through'
	}

	return (
		<div className="todo_item">
			<div className="description_wrapper">
				<p style={props.completed == true ? resolvedClass : {}}>{props.description}</p>
			</div>
			<div className="input_wrapper">
				<input type="checkbox" defaultChecked={props.completed} onChange={props.handleChange}></input>
			</div>
		</div>
	)
}

export default ToDoItem;