import { createContext, useContext, useState } from 'react'

const ProductContext = createContext()

export const useProductContext = () => {
    return useContext(ProductContext)
}

export const ProductProvider = ({children}) => {
    const url = 'https://win22-webapi.azurewebsites.net/api/products'
    const [product, setProduct] = useState({})
    const [products, setProducts] = useState([])
    const [featuredProducts, setFeaturedProducts] = useState([])
    const [twoFor29Products, setTwoFor29Products] = useState([])
    const [twoFor49Products, setTwoFor49Products] = useState([])
    const [saleProducts, setSaleProducts] = useState([])

    const getProduct = async (articleNumber) => {
        const res = await fetch(url + `/${articleNumber}`)
        setProduct(await res.json())
    }

    const getProducts = async () => {
        const res = await fetch(url)
        setProducts(await res.json())
    }

    const getFeaturedProducts = async (take = 0) => {
        const res = await fetch(url + `?take=${take}`)
        setFeaturedProducts(await res.json())
    }

    const getTwoFor29Products = async (take = 0) => {
        const res = await fetch(url + `?take=${take}`)
        setTwoFor29Products(await res.json())
    }

    const getTwoFor49Products = async (take = 0) => {
        const res = await fetch(url + `?take=${take}`)
        setTwoFor49Products(await res.json())
    }

    const getSaleProducts = async (take = 0) => {
        const res = await fetch(url + `?take=${take}`)
        setSaleProducts(await res.json())
    }

    return <ProductContext.Provider value={{product, getProduct, products, getProducts, featuredProducts, getFeaturedProducts, twoFor29Products, getTwoFor29Products, twoFor49Products, getTwoFor49Products, saleProducts, getSaleProducts}}>
        {children}
    </ProductContext.Provider>
}