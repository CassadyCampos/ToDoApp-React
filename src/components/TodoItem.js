import React from 'react'

const TodoItem = ({todo, remove}) => {
    //Each Todo
    return (
        <a href='#' className='todoListItem' onClick={() => {remove(todo.id)}}>
        {todo.text}</a>
    );
}

export default TodoItem