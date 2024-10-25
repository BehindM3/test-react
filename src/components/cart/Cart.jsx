import cartIcon from "/cart.svg"
import './Cart.css'
import { useId } from 'react'

function Cart({ }){
    const cartId = useId()

    return (
        <>
            <input className="cart-input" type="checkbox" id={cartId} hidden/>
            <label className="cart-bt" htmlFor={cartId}>
                <img className="cart-icon" src={cartIcon} alt="Icono del carrito de compra" />
            </label>
            
            <aside className="cart"></aside>
        </>
    );
}

export default Cart;