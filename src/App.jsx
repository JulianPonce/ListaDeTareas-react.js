import React,{useState,useRef,useEffect} from "react";
import TareaList from "./componentes/TareaList";
import { v4 as uuidv4 } from "uuid";

const KEY = "tareasApp.tareas"


export function App() {
     
    const[tareas,setTareas] = useState([{id:1,task:"tarea 1",completed:false},])
    
    const TodoTaskRef =useRef();
        
useEffect (()=>{
    const tareasStored = JSON.parse(localStorage.getItem(KEY));
    if(tareasStored){
        setTareas(tareasStored)
    }
},[])

    useEffect(()=>{
     localStorage.setItem(KEY,JSON.stringify(tareas))
    },[tareas])
    
    const todoAdd = () =>{

            const task = TodoTaskRef.current.value;
            if(task ==='') return;
            setTareas((prevTareas)=>{

                return[...prevTareas,{id:uuidv4() ,task,completed:false}];
            });
            TodoTaskRef.current.value = null
        }

    const ToggleTarea=(id)=>{
        const newTarea = [...tareas];
        const tarea = newTarea.find((tarea)=>tarea.id===id);
        tarea.completed = !tarea.completed
        setTareas(newTarea) 

    }    
    const ClearAll = () =>{
       
        const newtareas = tareas.filter((tareas)=>!tareas.completed)
         setTareas(newtareas)
    }
    return(
         <>
        <TareaList tareas={tareas} ToggleTarea={ToggleTarea}/>
        <input ref={TodoTaskRef} type="text" placeholder="nueva tarea"/>
        <button onClick={todoAdd}>+</button>
        <button onClick={ClearAll}>eliminar tarea terminadas</button>
        <div>Te quedan {tareas.filter((tarea)=>!tarea.completed).length} tareas por terminar</div>
        </>
    )

}

export default App