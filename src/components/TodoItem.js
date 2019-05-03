import React from 'react'

const TodoItem = ({todo, remove}) => {
    //Each Todo
    return (
        <li  className='todoListItem' onClick={() => {remove(todo.id)}}>
        {todo.text}</li>
    );
}

export default TodoItem