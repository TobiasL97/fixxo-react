import './App.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, createContext, useEffect } from 'react'
import HomeView from './Views/HomeView';
import NotFoundView from './Views/NotFoundView';
import ContactsView from './Views/ContactsView';
import ProductDetailsView from './Views/ProductDetailsView';
import Products from './Views/Products'
import { productContext, FeaturedProductsContext, TwoFor29ProductsContext, TwoFor49ProductsContext, SaleProductsContext } from './Contexts/contexts'
import { ShoppingCartProvider } from './Contexts/shoppingCartContext'

function App() {

  const [products, setProducts] = useState([])
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [twoFor29Products, setTwoFor29Products] = useState([])
  const [twoFor49Products, setTwoFor49Products] = useState([])
  const [saleProducts, setSaleProducts] = useState([])

  useEffect(() => {

    const fetchProducts = async () => {

      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts(await result.json())

    }
    fetchProducts();

    const fetchfeaturedProducts = async () => {

      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setFeaturedProducts(await result.json())

    }
    fetchfeaturedProducts();

    const fetchtwoFor29Products = async () => {

      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setTwoFor29Products(await result.json())

    }
    fetchtwoFor29Products();

    const fetchtwoFor49Products = async () => {

      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setTwoFor49Products(await result.json())

    }
    fetchtwoFor49Products();

    const fetchsaleProducts = async () => {

      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setSaleProducts(await result.json())

    }
    fetchsaleProducts();
    
  }, [setProducts, setFeaturedProducts, setTwoFor29Products, setTwoFor49Products, setSaleProducts])


  return (
    <BrowserRouter>
      <ShoppingCartProvider>
      <productContext.Provider value={products}>
      <FeaturedProductsContext.Provider value={featuredProducts}>
      <TwoFor29ProductsContext.Provider value={twoFor29Products}>
      <TwoFor49ProductsContext.Provider value={twoFor49Products}>
      <SaleProductsContext.Provider value={saleProducts}> 
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/home" element={<HomeView />} />
          <Route path="*" element={<NotFoundView />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:name" element={<ProductDetailsView />} />
          <Route path="/contacts" element={<ContactsView />} />
        </Routes>
        </SaleProductsContext.Provider> 
        </TwoFor49ProductsContext.Provider>
        </TwoFor29ProductsContext.Provider>
        </FeaturedProductsContext.Provider>
      </productContext.Provider>
      </ShoppingCartProvider>
    </BrowserRouter>
  );
}

export default App;
