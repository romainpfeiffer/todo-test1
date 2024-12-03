import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addTask, deleteTask } from "./TaskReducer";

function Home() {
    const tasks = useSelector((state) => state.tasks );
    const [task, setTask] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addTask({id: tasks[tasks.length-1].id + 1 , task: task }))
        navigate('/');
    }

    const handleDelete = (id) => {
        dispatch(deleteTask({id :id}))
    }

    return (
        <div className="container" >

            <h2>Todo list app</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Task</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => (
                        <tr key={index}>
                            <td>{task.id}</td>
                            <td>{task.task}</td>
                            <td>
                                <Link to={`/edit/${task.id}`} className="btn btn-sm btn-primary" >Edit</Link>
                                <button onClick={()=> handleDelete(task.id)} className="btn btn-sm btn-danger ms-2" >Delete</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>

            <div className='border bg-secondary text-white p-5'>
                <h3>Add new task</h3>
                <form onSubmit={handleSubmit} >
                    <div>
                        <input type="text" name='task' className='form-control' onChange={e=> setTask(e.target.value)} />
                    </div><br/>
                    <button className='btn btn-info' >Submit</button>
                </form>
            </div>

        </div>

        

        
    )
}

export default Home