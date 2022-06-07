import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App'
import './index.css'
import Home from "./components/Home"
import Signup from "./components/Signup"
import Signin from './components/Signin';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="Signin" element={<Signin />} />
      <Route path="Signup" element={<Signup />} />
      
    </Routes>
  </BrowserRouter>
)
