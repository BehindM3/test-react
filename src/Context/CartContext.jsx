import { createContext, useState } from "react";

//Creamos el contexto del Carrito
const cartContext = createContext();


const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addProductToCart = (newProduct) => {
        
       const index = cart.findIndex( p => p.id === newProduct.id );

        if( index < 0 ){
            return setCart([...cart, newProduct]);
        }
        
        cart[index].quantity = newProduct.quantity;
        setCart([...cart]);
    };

    const removeProductFromCart = (deleteProductId) => {

        const index = cart.findIndex( p => p.id === deleteProductId );

        if( index < 0 ){
            console.error("El elemento a eliminar no coincide con algun producto existente en el carrito.")
            return;
        }
        
        cart.splice(index, 1);
        setCart([...cart]);
    };

    const emptyCart = () => {
        setCart([]);
    }

    const totalQuantity = () => {
        const total = cart.reduce( (acc, productCart) => acc + productCart.quantity, 0);
        return total;
    }

    return (
        <cartContext.Provider value={{ cart, addProductToCart, removeProductFromCart, emptyCart, totalQuantity}}>
            {children}
        </cartContext.Provider>
    );
}

export { cartContext, CartProvider }