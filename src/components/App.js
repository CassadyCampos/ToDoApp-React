import React from 'react'
import NextTask from './NextTask'
import TodoItem from './TodoItem'
import TodoList from './TodoList'



//* Todo  ID
window.id = 0;

class App extends React.Component {
    constructor(props) {
        //* Pass props to parent class
        super(props);
        //* Set initial state
        this.state = {
            data: []
        }
    }

    //* Add Todo handlers
    addTodo(val) {
        //* Assemble data
        const todo = {text: val, id: window.id++}
        //* Update data
        this.state.data.push(todo);
        //* Update state
        this.setState({data: this.state.data});
    }

    //* Handle remove
    handleRemove(id) {
        //* Filter all todo's except the one we want to remove
        const remainder = this.state.data.filter((todo) => {
            if(todo.id !== id) return todo;
        });
        //* Update state with filter
        this.setState({data: remainder});
    }

    render() {
        return (
            <div id='container'>
            <h3>To Do List</h3>
            <NextTask addTodo={this.addTodo.bind(this)} />
            <TodoList
                todos={this.state.data}
                remov={this.handleRemove.bind(this)} />
        </div>
        )

    }

    
}

export default App;