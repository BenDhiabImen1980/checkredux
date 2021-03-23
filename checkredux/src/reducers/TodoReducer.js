import { v4 as uuidv4 } from 'uuid';

let todos=[
    {
    id:uuidv4(), 
    description:"checkpoint",
    isDone:false,
    },
    {
     id:uuidv4(), 
     description:"check",
     isDone:false,
     }
]
const TodoReducer=(state={todos,filt:"no"},action)=>{
return state
}
export default TodoReducer;
