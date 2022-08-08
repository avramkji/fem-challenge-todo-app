import React, { useState } from "react";


export const TodoForm = (props) => {
  const [todo, setTodo] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSetTodo(todo);
    setTodo("");
  }
  
  return (
      <div className='Todo-Form'>
      <input type='text' placeholder='create a new todo..' value={todo} onChange={
        (e) => {
          setTodo(e.target.value);
        }
      } onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleSubmit(e);
          setTodo('');
        }
      }} />
      </div>
  )
}