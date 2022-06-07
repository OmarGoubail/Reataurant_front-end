import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Outlet, Route, Routes} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from './components/Menu';


function App() {

  return (
    <div className="App">
     <Navbar />
      
     <Menu />

     
    </div>
  )
}

export default App
