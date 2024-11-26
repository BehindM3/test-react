import React from 'react'
import { Link } from 'react-router-dom'
import './cartEmpty.css'

const CartEmpty = () => {
  return (
    <main className='main-cartEmpty'>
        <div>
            <img src="/sad-face.svg" alt="Icono representativo de tristeza" />
            <p className='first-msg' >Oh! you have not added any items to your cart yet.</p>
        </div>
        <div>
            <p className='second-msg' >Let us help you...</p>
            <img src="/funny-face.svg" alt="Icono representativo de felicidad" />
        </div>
        <Link to={'/'} className='btn-redirect'> Home </Link>
    </main>
  )
}

export default CartEmpty