import React, { useState } from "react";


export const TodoForm = () => {
    const [todo, setTodo] = useState('');

    return (
        <div className='Todo-Form'>
          <input type='text' placeholder='create a new todo..' value={todo} onChange={
              (e) => {
                  setTodo(e.target.value);
              }
          }/>
        </div>
    )
}