import React, { useState } from 'react'
import { IoMdRemoveCircle } from "react-icons/io";
import { AiFillEdit } from "react-icons/ai";
import '../App.css'
import { FaCheck } from "react-icons/fa";



function Todo({todo, onRemoveTodo,onupdateTodo}) {
  const {id,content} =todo;

  const [editable , seteditable]=useState(false);
  const [newtodo , setNewTodo]= useState(content);


  const removeTodo = ()=>{
    onRemoveTodo(id);
  }

  const updateTodo=()=>{
    const request = {
      id:id,
      content:newtodo
    }
    onupdateTodo(request);
    seteditable(false);

  }

  

  return (
    <div className='Todo'>
        <div>
          {
            editable ? <input value={newtodo}  onChange={(e) => setNewTodo(e.target.value)} className='Todo-input' type="text"/> : content
            
          }

            

        </div>
        <div >
        <IoMdRemoveCircle className='Todo-icons' onClick={removeTodo}/>
        {
          editable ? <FaCheck className='Todo-icons' onClick={updateTodo}/> : <AiFillEdit className='Todo-icons' onClick={()=> seteditable(true)}/>
        }
        
        



        </div>

    </div>
  )
}

export default Todo