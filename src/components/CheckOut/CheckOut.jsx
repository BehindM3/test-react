import { useState, useContext } from 'react'
import { cartContext } from '../../Context/CartContext';
import { collection, Timestamp, addDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import validateForm from '../../utils/validateForm.js';
import db from '../../db/db.js';
import './checkOut.css'

const CheckOut = () => {

    const { cart, totalQuantity, emptyCart} = useContext(cartContext);
    const [idOrder, setIdOrder] = useState(null)
    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: "",
    });

    const handleChangeInput = (event) => {
        setDataForm({ ...dataForm, [event.target.name]: event.target.value })
    }

    const handleSubmitForm = async (event) => {
        event.preventDefault();

        const order = {
            buyer: { ...dataForm },
            products: [...cart],
            date: Timestamp.fromDate(new Date),
            total: totalQuantity()
        };

        const response = await validateForm(dataForm)
        
        if( response.status === "success" ){
            uploadOrder(order);
        }
        else{
            toast.error(response.message)
        }
    }

    const uploadOrder = (newOrder) => {
        const ordersRef = collection(db, "orders");

        addDoc(ordersRef, newOrder)
            .then((response) => {
                setIdOrder(response.id)
            })
            .finally( () => {
                emptyCart();
            })
    }


    return (
        <main className='main-checkout'>
            {
                idOrder === null ? (
                    <>
                        <h2>Please complete the form to finalize your purchase</h2>
                        <form onSubmit={handleSubmitForm}>
                            <input type="text" name='fullname' value={dataForm.fullname} onChange={handleChangeInput} placeholder='Fullname...'  />
                            <input type="email" name='email' value={dataForm.email} onChange={handleChangeInput} placeholder='Email...'  />
                            <input type="number" name='phone' value={dataForm.phone} onChange={handleChangeInput} placeholder='Phone...'  />

                            <button type="submit">Buy</button>
                        </form>
                    </>
                ) :
                    (
                        <article className='endOrder'>
                            <img src="/funny-face.svg" alt="Icono representativo de un emoji contento." />
                            <div>
                                <h2>Thank you for your purchase!</h2>
                                <p>Please keep your purchase code safe for future reference.</p>
                                <p>ID: {idOrder}</p>
                            </div>
                        </article>
                    )
            }
        </main>
    )
}

export default CheckOut