import { useContext } from "react"
import { cartContext } from "../../Context/CartContext.jsx"
import { Link } from "react-router-dom";

function CartPageItem({ }) {
    
    const { cart, removeProductFromCart, emptyCart, totalCartPrice } = useContext(cartContext);

    let itemsBoxes = cart.map(product => {
        const totalPriceProduct = (product.quantity * product.price).toFixed(2);

        return (
            <article className="cnt-productCart" key={product.id}>
                <img src={product.img} alt={`Imagen ilustrativa para ${product.nameItem}`} className="productCart-img" />
                <div className="productCart-info">
                    <p className="productCart-info__name">{product.nameItem}</p>
                    <p className="productCart-info__price">{product.quantity} x {product.price}$</p>
                    <span className='productCart-info__total' >Total: {totalPriceProduct}$</span>
                </div>
                <button className="productCart-delete" onClick={() => removeProductFromCart(product.id)}> <img src="/trash.svg" alt={`Icono de pepelera para eliminar, el producto: ${product.nameItem} del carrito.`} /> </button>
            </article>
        )
    })

    return (
        <>
            <p className='cartPage-title'>Your products</p>
            <section className="section-productsCart">
                {itemsBoxes}
            </section>
            <section className="totalPrice">
                <p>Total: {totalCartPrice()}$</p>
            </section>
            <section className="cartPage-buttons">
                <button className="cp-btn empty" onClick={emptyCart}>Empty Cart</button>
                <Link to={'/checkout'} className="cp-btn buy" >Check-Out</Link>
            </section>
        </>
    )
}

export default CartPageItem