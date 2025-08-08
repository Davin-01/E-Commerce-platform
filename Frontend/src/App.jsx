import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import HomePage from './components/Home/HomePage';
import NotFound from './pages/NotFound';
import ProductPage from './components/product/ProductPage';

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/products/:slug" element={<ProductPage />} />
      <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </BrowserRouter>
   
  )
}

export default App
