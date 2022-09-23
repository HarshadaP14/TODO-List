import * as React from "react";
import {context} from "./Provider"
const {useState,useContext}= React

export default function NewList(){
    const[task,setTask]=useState("");
    const {dispatch}=useContext(context);
    
    function handleSubmit(event){
        event.preventDefault();
        dispatch({type:"ADD_TASK",payload:task});
    }
    function handleKeyDown(event){
        if(event.keyCode === 13){
            handleSubmit(event)
        }
    }
    return(
        <>
        <input type="text" value={task} onChange={e=> setTask(e.target.value)}
        onKeyDown={handleKeyDown} />
        <button onClick={handleSubmit}>ADD</button>
        </>
    )
}