import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import HomePage from './components/Home/HomePage';

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
      <Route index element="{<HomePage />}" />
      </Route>
    </Routes>
    </BrowserRouter>
   
  )
}

export default App
