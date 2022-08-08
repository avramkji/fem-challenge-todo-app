import './App.css';
import { TodoForm } from './components/TodoForm/TodoForm';
import { TodoList } from './components/TodoList/TodoList';
import { ThemeSwitcher } from './components/ThemeSwitcher/ThemeSwitcher';
import { useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState([
    'Jog around the park',
    '10 minute meditation'
  ]);

  const handleSetTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  const handleClearAll = () => {
    setTodos([]);
  }

  return (
    <div className="App">
      <div className='Todo-Container'>
        <div className='Todo-Header'>
          <h1>TODO</h1>
          <ThemeSwitcher />
        </div>
        <TodoForm handleSetTodo={handleSetTodo} />
        <TodoList todos={todos} handleClearAll={handleClearAll} />
      </div>
    </div>
  );
}

export default App;
