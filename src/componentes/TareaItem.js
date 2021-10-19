import React from 'react'

export default function TareaItem({tarea,ToggleTarea}) {
   const{id,task,completed}=tarea
   
    
   const handletareaclick = ()=>{
      ToggleTarea(id)
   }
   
   return (
       <li>
          <input type="checkbox" checked={completed} onChange={handletareaclick}/>
         {task}
       </li>
    )
}
