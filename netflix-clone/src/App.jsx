import React from 'react'
import "./App.css"
import Home from './Pages/Home/Home'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <>
      <Home />
      <ToastContainer position='top-right'/>
    </>
  )
} 

export default App