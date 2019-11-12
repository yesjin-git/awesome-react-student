import React from "react";
import Todo from "../components/Todo";

export default function TodoList({ todos }) {
  return (
    <div> 
      <ul>
        {todos.map((todo, index) => (
          // index를 key값으로 주어서는 안됨
          <Todo key={index} todo={todo} />
        ))}
      </ul>
    </div>
  );
}