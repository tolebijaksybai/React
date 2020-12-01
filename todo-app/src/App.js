import React, { Component } from 'react';
import './App.css';
import ToDoItem from './ToDoItem/ToDoItem';
import todosData from './todosData';

class App extends Component {
	constructor() {
		super();
		this.state = {
			todosItem: todosData
		}
	}
	handleChange = id => {
		const index = this.state.todosItem.map(item => item.id).indexOf(id);

		this.setState(state => {
			let { todosItem } = state;
			todosItem[index].completed = true;
			return todosItem;
		});
	}
	render() {
		const { todosItem } = this.state;
		let activeTasks = todosItem.filter(tasks => tasks.completed === false);
		let completedTasks = todosItem.filter(tasks => tasks.completed === true);

		let finalTasks = [...activeTasks, ...completedTasks].map(item =>
			<ToDoItem key={item.id}
				description={item.description}
				completed={item.completed}
				handleChange={() => this.handleChange(item.id)}
			/>)

		return (
			<div className="App" >
				{finalTasks}
			</div>
		)
	}



}

export default App;
