import React from 'react'
import TareaItem from './TareaItem';

export default function TareaList({tareas,ToggleTarea}) {
    return ( 
       <ul>
       {tareas.map((tarea)=>(
           <TareaItem key={tarea.id} tarea={tarea} ToggleTarea={ToggleTarea}/>
       ))}
       </ul>
       );
}