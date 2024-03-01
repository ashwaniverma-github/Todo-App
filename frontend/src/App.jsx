import { useState } from 'react'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  fetch('http://localhost:3000/todos')
  .then(async function(res){
    const json = await res.json();
    setTodos(json.todos);
  })
  return (
    <div>
     <CreateTodo></CreateTodo>
     <Todos todos = {todos}></Todos>
    </div>
  )
}

export default App
