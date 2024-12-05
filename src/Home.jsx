import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "./TaskReducer";

function Home() {
    const tasks = useSelector((state) => state.tasks );
    const [task, setTask] = useState('')
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!task){
            alert("Please enter a task.")
            event.target.reset();
            return
        }
        dispatch(addTask(
            {
                id: tasks.length ? tasks[tasks.length-1].id + 1 : 1 , 
                task: task 
            }
        ))
        event.target.reset();
    }

    const handleDelete = (id) => {
        dispatch(deleteTask(
            {
                id :id
            }
        ))
    }

    return (
        <div className="container my-4" >
            <div className='mx-auto rounded border p-4' style={{width:"600px", backgroundColor: "#f3f2f6"}} >
                
                <h2 className="text-center mb-4">Todo list App</h2>

                {
                    tasks.map((task, index) => {
                        return (
                            <div key={index} className="rounded mt-4 p-2 d-flex" style={{backgroundColor: "#ffffff"}}>

                                <div className='me-auto'>
                                    {task.task}
                                </div>
                                <div>
                                    <i className="bi bi-trash text-danger" style={{cursor:"pointer"}} 
                                     onClick={() => handleDelete(task.id) } ></i>
                                </div>

                            </div>
                        )
                    })
                }

                <br/>
                <form className="d-flex" onSubmit={handleSubmit} >
                    <input className='form-control me-2' placeholder='Add a new task...' type="text" name='task' onChange={e=> setTask(e.target.value)} />
                    <button className='btn btn-outline-success'>Add</button>
                </form>
            </div>
        </div>

    )
}

export default Home