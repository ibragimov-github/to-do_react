import React from 'react';
import './ToDoElement.scss'

function ToDoElement({ todo, toggleTask, removeTask }) {
  return (
    <div  key={todo.id} className={todo.complete ? 'item-text strike' : 'item-text'}>
      <div onClick={() => toggleTask(todo.id)}>
        {todo.task}
      </div>
      <button onClick={() => removeTask(todo.id)}>Delete</button>
    </div>
  );
}

export default ToDoElement;