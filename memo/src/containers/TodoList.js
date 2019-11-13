import React from "react";
import Todo from "../components/Todo";

export default function TodoList({ todos }) {
  return (
    <div>
      <ul>
        {todos.map((todo, id) => (
          <Todo key={id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}