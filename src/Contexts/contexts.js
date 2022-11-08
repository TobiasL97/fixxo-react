import { createContext, useContext } from 'react'

export const productContext = createContext()
export const FeaturedProductsContext = createContext()
export const TwoFor29ProductsContext = createContext()
export const TwoFor49ProductsContext = createContext()
export const SaleProductsContext = createContext()

export const useProductContext = () => {
    return useContext(productContext)
}