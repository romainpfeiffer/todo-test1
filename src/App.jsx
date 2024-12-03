import React from "react";
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Update from "./Update";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/edit/:id" element={<Update/>} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App