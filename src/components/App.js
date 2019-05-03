import React from 'react'
import TodoItem from './TodoItem'
function App() {
    return (
        <div id='container'>
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