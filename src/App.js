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

  const [products, setProducts] = useState({
    allProducts: [],
    featuredProducts: [],
    TwoFor29: [],
    TwoFor49: [],
    saleProductGrid: []
  })

  useEffect(() => {

    const fetchAllProducts = async () => {

      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts({...products, allProducts: await result.json()})

    }
    fetchAllProducts();

    const fetchfeaturedProducts = async () => {

      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setProducts({...products, featuredProducts: await result.json()})

    }
    fetchfeaturedProducts();

    const fetchTwoFor29 = async () => {

      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setProducts({...products, TwoFor29: await result.json()})

    }
    fetchTwoFor29();

    const fetchTwoFor49 = async () => {

      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setProducts({...products, TwoFor49: await result.json()})

    }
    fetchTwoFor49();

    const fetchsaleProductGrid = async () => {

      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setProducts({...products, saleProductGrid: await result.json()})

    }
    fetchsaleProductGrid();
    
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
