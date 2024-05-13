import { useState } from 'react'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {

  const [todos , setTodos]=useState([]);
  const createTodo = (newTodo)=>{
    setTodos([...todos,newTodo]);
  
  }

  const removeTodo = (todoId)=>{
    setTodos( [...todos.filter((todo)=> todo.id !== todoId)]);
  }

  const updateTodo = (newtodo)=>{

    const updateTodo = todos.map((todo)=> {
      if(todo.id !== newtodo.id){
        return todo;
      }
      return newtodo;
   })
   setTodos([...updateTodo]);
      
  }




  console.log(todos);

  return (
    <div className='App'>
      <div className='main'>
        <TodoCreate onCreateTodo={createTodo}/>
        <TodoList todos={todos} onRemoveTodo={removeTodo}   onupdateTodo={updateTodo}/>
      </div>
      </div>
  )

      

     
}

export default App
