import * as React from "react";
import {context} from "./Provider";
import {motion, AnimatePresence} from "framer-motion"
const {useContext} =React

export default function TaskList(){
    const {state, dispatch}=useContext(context);

function handleDelete(task){
    dispatch({type:"DELETE_TASK", payload:task.id});
}
function handleCheckboxClick(task){
    dispatch({type:"TOGGLE_TASKS_COMPLETED",payload:task});
}
if(!state.tasks){
    return <div />;
}
return(
    <>
    <ul className="task-list">
       {state.tasks.map(task =>{
        return(
            <AnimatePresence exitBeforeEnter>
            <motion.li initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            className="task-list__item"
            key={task.id}>
            <span onClick={()=>handleCheckboxClick(task)}>
                {task.completed ?(
                    <span className="task-list__item__completed"/>
                ):(
                    <span className="task-list__item__not-completed"/> 
                )
                }
            </span>
            {task.text}
            <span className="task-list__item__deleted-button" onClick={()=>handleDelete(task)}>
                X</span>
            </motion.li>
            </AnimatePresence>
        )
       })} 
    </ul>
    </>
)
}