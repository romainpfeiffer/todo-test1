import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import TaskReducer from './TaskReducer';

import storage from "redux-persist/lib/storage"
import {persistReducer} from "redux-persist"
import { combineReducers } from '@reduxjs/toolkit';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';


const persistConfig = {
  key: "root",
  version: 1,
  storage
};

const reducer = combineReducers({
  tasks: TaskReducer
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer
})

let persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> 
      <PersistGate persistor={persistor} >
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)