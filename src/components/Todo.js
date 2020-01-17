import React from 'react'
import deleteTodo from '../containers/DeleteTodo'

export default function Todo({todo}) {
    //console.log(todo.id)
    return (
        <div>
            <li>{todo.text}</li>
            <button type="submit">delete</button>
            <deleteTodo />
        </div>
    );
}
