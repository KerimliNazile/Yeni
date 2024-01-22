import React, { createContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
export const BasketContext = createContext()
const BasketProvider = ({ children }) => {
    const [basket, setBasket] = useLocalStorage("basket")


    function addBasket(product) {
        const existBasket = basket.findIndex(x => x._id === product._id)
        if (existBasket === -1) {
            setBasket([...basket, { ...product, count: 1 }])
        } else {
            basket[existBasket].count++
        }
    }

    function deleteBasket(product) {
        const deletedBasket = basket.filter(x => x._id !== product._id)
        setBasket(deletedBasket)
    }

    function increaseBasket(product) {
        const existBasket = basket.findIndex(x => x._id === product._id)
        if (existBasket !== -1) {
            setBasket([...basket])
            basket[existBasket].count++
        }
    }
    function decreaseBasket(product) {
        const existBasket = basket.find(x => x._id === product._id)
        if (existBasket && existBasket.count > 1) {
            existBasket.count--
            setBasket([...basket])
            return
        } else {
            setBasket(basket.filter((x) => x._id !== product._id))
        }
    }
    const data = {
        basket, setBasket, addBasket, deleteBasket, increaseBasket, decreaseBasket
    }
    return (
        <>
            <BasketContext.Provider value={data}>
                {children}
            </BasketContext.Provider>
        </>
    )
}

export default BasketProvider