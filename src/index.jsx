import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import TaskReducer from './TaskReducer';

//FICHIER MAIN.JSX//
/*
raf :
1. middleware memoire des tasks
2. typage des fichiers jsx -> tsx
3. Design (ui + ux editing)
*/

const store = configureStore({
  reducer: {
    tasks: TaskReducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> 
        <App />
    </Provider>
  </React.StrictMode>,
)