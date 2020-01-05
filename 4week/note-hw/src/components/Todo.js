import React from 'react'

export default function Todo(props) {
    return (
        <li>
            {props.todo.text}
            <button onClick={props.del} value={props.todo.no}>삭제</button>
        </li>
    )
}