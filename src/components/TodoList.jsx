import React from 'react'
import Todo from './Todo'

function TodoList({todos  , onRemoveTodo,onupdateTodo}) {
  return (
    <div className='Todo-List'>
        {
            todos && todos.map((todo)=>(
                <Todo key={todo.id} todo = {todo} onRemoveTodo={onRemoveTodo} onupdateTodo={onupdateTodo}/>


            )
            
            )
        }

        


    </div>
  )
}

export default TodoList