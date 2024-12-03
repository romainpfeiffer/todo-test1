import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateTask } from "./TaskReducer";


function Update() {
    const {id} = useParams();
    const tasks = useSelector((state)=>state.tasks);
    const existingTask = tasks.filter(task => task.id == id)
    const {task} = existingTask[0];
    const [updatedTask, setTask] = useState(task)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(updateTask({
            id: id,
            task: updatedTask
        }))
        navigate('/')
    }

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <h3>Update Task</h3>
                <form onSubmit={handleUpdate} >
                    <div>
                        <label htmlFor="task">Task:</label>
                        <input type="text" name='task' className='form-control' 
                        value={updatedTask} onChange={e => setTask(e.target.value)} />
                    </div><br/>
                    <button className='btn btn-info' >Update</button>
                </form>
            </div>
        </div>    
    )
}

export default Update