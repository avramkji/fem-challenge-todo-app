import './App.css';
import {TodoForm} from './components/TodoForm/TodoForm';
import {TodoList} from './components/TodoList/TodoList';

const App = () => {
  return (
    <div className="App">
      <div className='Todo-Container'>
        <div className='Todo-Header'>
          <h1>TODO</h1>
          <button>toggle theme</button>
        </div>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
