import { useContext } from "react";
import { cartContext } from "../../Context/CartContext";

const CartAside = () => {

    const { cart } = useContext(cartContext);

    const cartProducts = cart.map( product => {
        return (
            <article className="prod-cart" key={product.id}>
                <img src={product.img} alt={`Imagen ilustrativa para ${product.nameItem}`} className="prod-img"/>
                <p className="prod-name">{product.nameItem}</p>
                <p className="prod-price">{product.quantity}x{product.price}$</p>
                <button className="dlt-prod-cart">x</button>
            </article>
        );
    })

    return (
        <section>
            <header>
                <p>Tu carrito</p>
            </header>
            <main>
                {cartProducts}
            </main>
        </section>
    )
}

export default CartAside;