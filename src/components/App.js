import React from 'react'
import TodoItem from './TodoItem'
import InputTask from './NextTask'
function App() {
    return (
        <div id='container'>
            <h3>To Do List</h3>
            <InputTask />
            <TodoItem
                task= 'Clean car' />
            <TodoItem
                task= 'Cut hair' />
            <TodoItem
                task= 'Get blank check from TD Bank' />
        </div>
    )
}

export default App;