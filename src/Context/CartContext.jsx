import { createContext, useState } from "react";

//Creamos el contexto del Carrito
const cartContext = createContext();


const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addProductToCart = (newProduct) => {
        setCart([...cart, newProduct])
    };

    /* const removeProductFromCart = (deleteProduct) => {

    }; */

    const totalQuantity = () => {
        const total = cart.reduce( (acc, productCart) => acc + productCart.quantity, 0);
        return total;
    }

    console.log(cart)

    return (
        <cartContext.Provider value={{ cart, addProductToCart, totalQuantity}}>
            {children}
        </cartContext.Provider>
    );
}

export { cartContext, CartProvider }