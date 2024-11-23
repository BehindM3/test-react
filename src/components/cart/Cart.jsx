import { useId } from 'react'
import { useContext } from "react"
import { cartContext } from "../../Context/CartContext"
import CartAside from './CartAside'
import cartIcon from "/cart.svg"
import './Cart.css'

function Cart({ }){
    
    const { totalQuantity } = useContext(cartContext);
    const cartId = useId();

    return (
        <div className='btn'>
            <input className="cart-input" type="checkbox" id={cartId} hidden/>
            <label className="cart-bt" htmlFor={cartId}>
                <img className="cart-icon" src={cartIcon} alt="Icono del carrito de compra" />
                {
                    totalQuantity() ? 
                    <span className="cart-quantity">{totalQuantity()}</span> :
                    ""
                }
            </label>
            <section className="cart">
                <CartAside></CartAside>
            </section>
        </div>
    );
}

export default Cart;