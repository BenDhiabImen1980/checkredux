import React from 'react'
import {useSelector} from 'react-redux'

const ListTask = () => {
    const todo = useSelector(state => state.TodoReducer.todos)
    return (
        <div>
            {todo.map(el=>
                <div key={el.id}> 
                    <h2>{el.description}</h2>
                    <button>Delete</button>
                    <button>Done</button>
                    <button>Edit</button>

                </div>
            )}
            
        </div>
    )
}

export default ListTask;


