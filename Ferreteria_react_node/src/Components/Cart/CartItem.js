import React from 'react'
import { useCartContext } from '../../context/CartContext'

const CartItem = ({product}) => {
    const {removeProduct} = useCartContext();
    return (
        <div className='card lg:card-side bg-base-100 shadow-xl m-10 text-white-900 text-xl'>
        <img src={product.img} alt={product.name}/>
        <div className='ml-10'>
            <div>{product.name}</div>
            <div>Cantidad: {product.quantity}</div>
            <div>Precio: ${product.price}</div>
            <div>Subtotal: ${product.quantity * product.price}</div>
            <button className='btn bg-red-600 mt-5' onClick={() => removeProduct(product.id)}>Eliminar</button>
        </div>
        </div>
    )
}

export default CartItem