import { useContext } from "react";
import { cartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const CartAside = () => {

    const { cart, removeProductFromCart } = useContext(cartContext);

    const cartProducts = cart.map(product => {
        return (
            <article className="prod-cart" key={product.id}>
                <div className="info-prod-cart">
                    <img src={product.img} alt={`Imagen ilustrativa para ${product.nameItem}`} className="prod-img" />
                    <p className="prod-name">{product.nameItem}</p>
                    <p className="prod-price">{product.quantity} x {product.price}$</p>
                </div>
                <button className="dlt-prod-cart" onClick={() => removeProductFromCart(product.id)}></button>
            </article>
        );
    })

    return (
        <section className="cart-display">
            <header className="cart-title">
                <p>Your Cart</p>
            </header>
            <main className="main-cart">
                {cartProducts}
            </main>
            <footer className="footer-cart">
                <Link to={'/cart'} className="buy-btn">Continue</Link>
            </footer>
        </section>
    )
}

export default CartAside;