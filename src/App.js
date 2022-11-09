import './App.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, createContext, useEffect } from 'react'
import HomeView from './Views/HomeView';
import NotFoundView from './Views/NotFoundView';
import ContactsView from './Views/ContactsView';
import ProductDetailsView from './Views/ProductDetailsView';
import Products from './Views/Products'
import { ProductProvider } from './Contexts/ProductContext'
import { ShoppingCartProvider } from './Contexts/ShoppingCartContext'

function App() {

  return (
    <BrowserRouter>
      <ShoppingCartProvider>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/home" element={<HomeView />} />
          <Route path="*" element={<NotFoundView />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:name" element={<ProductDetailsView />} />
          <Route path="/contacts" element={<ContactsView />} />
        </Routes>
      </ProductProvider>  
      </ShoppingCartProvider>
    </BrowserRouter>
  );
}

export default App;
