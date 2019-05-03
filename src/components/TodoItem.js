import React from 'react'

function TodoItem(prop) {
    return (
        <div>           
            <input type='checkbox' />
            <p> {prop.task} </p>
            <hr></hr>
        </div>
    )
}

export default TodoItem