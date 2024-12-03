import { createSlice } from "@reduxjs/toolkit";
import { taskList } from "./Data";

const taskSlice = createSlice({
    name: "tasks",
    initialState: taskList,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload)
        },
        updateTask: (state, action) => {
            const {id, task} = action.payload;
            const updatedTask = state.find(task => task.id == id);
            if(updatedTask) {
                updatedTask.task = task;
            }
        },
        deleteTask: (state, action) => {
            const {id} = action.payload;
            const updatedTask = state.find(task => task.id == id);
            if(updatedTask) {
                return state.filter(task => task.id !== id);
            }

        }
    }
})

export const {addTask, updateTask, deleteTask} = taskSlice.actions;
export default taskSlice.reducer;