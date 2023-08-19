import react, { useState } from 'react';
import './App.css';

function App() {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault()

    if (todo !== "") {
      setTodos([{ id: `${todo} - ${Date.now()}`, todo }, ...todos])
    }
  }

  const handleDelete = (id) => {
    const delTodo = todos.filter((to)=>{
      to.id !== id;
      setTodos([...delTodo])
    })
  }

  return (
    <div className='App'>
      <div className="container">
        <h1>To Do List App</h1>
        <form className="todoForm" onSubmit={handleSubmit}>
          <input type='text'
            onChange={(e) => setTodo(e.target.value)} />
          <button type="submit">Go</button>
        </form>

        <ul className='allTodos'>
          {
            todos.map((t) => {
              <li className='singleTodo'>
                <span className='todoText' key={t.id}>{t.todo}</span>
                <button>Edit</button>
                <button onClick={handleDelete(t.id)}>Delete</button>
              </li>
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
