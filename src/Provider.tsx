import * as React from "react";
import produce from "immer";
const {useReducer, createContext,useEffect}=React
interface Task{
    text:string;
    id:number;
    completed:boolean;
}
interface Draft{
    tasks:Task[];
    id:number
}
interface State{
    tasks?:Task[];
    id?:number;
}
type Actions=
| {type:"SET_TASKS"; payload:Task[]}
|{type:"ADD_TASK";payload:string}
|{type:"DELETE_TASK";payload:number}
|{type:"CLEAR_TASKS"}
|{type:"TOGGLE_TASK_COMPLETED";payload:Task};
const taskReducer=produce((draft:Draft,action:Actions)=>{
    switch(action.type){
        case "SET_TASKS":
            draft.tasks=action.payload;
            break;
        case "ADD_TASK":
            const task:Task={
                text:action.payload,
                id:draft.id,
                completed:false
            };
            draft.tasks.push(task);
            draft.id=draft.id+1;
            break;
        case "DELETE_TASK":
            draft.tasks=draft["tasks"].filter(el=>el.id !== action.payload);
            break;
        case "CLEAR_TASKS":
            draft.tasks=[];
            break;
        case "TOGGLE_TASK_COMPLETED":
            const taskIdx=draft.tasks.findIndex(el=>el.id === action.payload.id);
            draft.tasks[taskIdx].completed=!draft.tasks[taskIdx].completed;
    }
});
const initialState:Draft={
    tasks:[],
    id:0
};
interface Props{
    children:React.ReactNode;
}
let context;
export default function Provider(props:Props){
    context=createContext<{state:State;dispatch:()=>void}>({
        state:{},
        dispatch:()=>{}
    });
    const[state,dispatch]=useReducer(taskReducer,initialState);

    useEffect(()=> {
        const tasks: string = window.localStorage.getItem("tasks");
        dispatch ({type:"SET_TASKS",payload:JSON.parse(tasks) || []})

    },[]);
    useEffect(()=>{
        window.localStorage.setItem("tasks",JSON.stringify(state.tasks));
    },[state.tasks])
    return(
        <>
        <context.Provider value={{state, dispatch}}>
            {props.children}
        </context.Provider>
        </>
    )
}
export {context}