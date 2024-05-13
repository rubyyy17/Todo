import React, { useState } from 'react'
import '../App.css'

function TodoCreate({ onCreateTodo }) {
    
    const [newTodo,setNewTodo] = useState(''); 

    const clearInput = ()=>{

     setNewTodo('');
    }

    const createTodo = () => {
        if(!newTodo) return;
        const request = {
            id: Math.floor(Math.random() * 99999999),
            content: newTodo
        }
        onCreateTodo(request)
        clearInput();

    }
  return (
    <div className='Todo-create'>
        <input
        value={newTodo}  
        onChange={(e) => setNewTodo(e.target.value)}
        className='Todo-input' type="text" placeholder='Todo girin..'/>
        <button onClick={createTodo} className='Todo-button'>Todo Olustur</button>
    </div>
  )
}

export default TodoCreate