import * as React from "react";
import {context} from "./Provider";
import TaskList from "./TaskList";
import NewList from "./NewList";

const {useContext}=React;
export default function Task(){
    const{dispatch}=useContext(context);
    function handleClearButtonClick(event){
        event.preventDefault();
        dispatch({type: "CLEAR_TASKS"});
    }
    return(
        <>
        <button onClick={handleClearButtonClick}>clear</button>
        <TaskList />
        <NewList />
        </>
    )
}