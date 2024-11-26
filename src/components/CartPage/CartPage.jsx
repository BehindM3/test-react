import { useContext, useEffect, useState } from 'react'
import { cartContext } from '../../Context/CartContext'
import CartPageItem from './CartPageItem.jsx';
import CartEmpty from './CartEmpty.jsx';
import LoadingPage from '../LoadingPage/LoadingPage.jsx';
import "./cartPage.css"

function CartPage() {

    const [loading, setLoading] = useState(true);
    const [isCartEmpty, setIsCartEmpty] = useState(true);
    const { cart } = useContext(cartContext);

    const checkCart = () => {
        if ( cart.length <= 0 ) {
            return true;
        }
        return false;
    }

    useEffect(() => {
        setLoading(true);
        setIsCartEmpty(checkCart());
        setLoading(false);
    }, [cart])



    return (
        <main className='main-cartPage'>
            {loading ?
                <LoadingPage /> :
                isCartEmpty ? 
                <CartEmpty /> :
                <CartPageItem />
            }
        </main>
    )
}

export default CartPage