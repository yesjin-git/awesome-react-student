import React, { Component } from 'react'

export default function Todo({onClick, text}) {
    return (
        <li
            onClick={onClick}
        >
        {text}
        </li>
    )
}
