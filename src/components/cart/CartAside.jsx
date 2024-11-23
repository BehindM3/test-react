import { useContext } from "react";
import { cartContext } from "../../Context/CartContext";

const CartAside = () => {

    const { cart } = useContext(cartContext);

    const cartProducts = cart.map(product => {
        return (
            <article className="prod-cart" key={product.id}>
                <div className="info-prod-cart">
                    <img src={product.img} alt={`Imagen ilustrativa para ${product.nameItem}`} className="prod-img" />
                    <p className="prod-name">{product.nameItem}</p>
                    <p className="prod-price">{product.quantity} x {product.price}$</p>
                </div>
                <button className="dlt-prod-cart"></button>
            </article>
        );
    })

    return (
        <section className="cart-display">
            <header className="cart-title">
                <p>Tu carrito</p>
            </header>
            <main className="main-cart">
                {cartProducts}
            </main>
            <footer className="footer-cart">
                <button className="buy-btn">Buy</button>
            </footer>
        </section>
    )
}

export default CartAside;