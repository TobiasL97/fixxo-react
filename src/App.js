import './App.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, createContext, useEffect } from 'react'
import HomeView from './Views/HomeView';
import NotFoundView from './Views/NotFoundView';
import ContactsView from './Views/ContactsView';
import ProductDetailsView from './Views/ProductDetailsView';
import Products from './Views/Products'
import { productContext } from './Contexts/contexts'

function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {

    const fetchData = async () => {

      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts(await result.json())

    }
    fetchData();
    
  }, [setProducts])


  return (
    <BrowserRouter>
      <productContext.Provider value={products}>
        <Routes>
          <Route path="/home" element={<HomeView />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:name" element={<ProductDetailsView />} />
          <Route path="/contacts" element={<ContactsView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </productContext.Provider>
    </BrowserRouter>
  );
}

export default App;
