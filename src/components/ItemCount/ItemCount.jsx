import { useState } from "react";
import './ItemCount.css';
import { useEffect } from "react";

function ItemCount({ stock, addProduct }) {

    const [count, setCount] = useState(1);


    let isAddDisabled = count === stock;
    let isSubtractDisabled = count < 1;

    const handleClickAdd = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const handleClickSubtract = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    return (
        <section className="cnt-cart">
            <article className="cnt-counter">
                <button className="btn-count" onClick={handleClickSubtract} disabled={isSubtractDisabled} >-</button>
                <span className="number-count">{count}</span>
                <button className="btn-count" onClick={handleClickAdd} disabled={isAddDisabled} >+</button>
            </article>
            <article className="cnt-addCart">
                <button className="btn-addCart" onClick={() => addProduct(count) }>Add to Cart</button>
            </article>
        </section>
    );
};

export default ItemCount;