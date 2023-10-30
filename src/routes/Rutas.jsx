import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar';


const Rutas = () => {
  return (
    <BrowserRouter>
        <NavBar />
    </BrowserRouter>
  )
}

export default Rutas