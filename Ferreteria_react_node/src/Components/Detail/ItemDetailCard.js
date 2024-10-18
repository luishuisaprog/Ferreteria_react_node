import React, { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import ItemCount from '../Counter Card/ItemCount'
import { Link } from 'react-router-dom'

export const ItemDetailCard = ({item}) => {
    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(item, quantity);
}

    return (
        <div className="card lg:card-side bg-white shadow-xl m-10">
            <figure><img src={item.img} alt={item.name} className="rounded ml-10"/></figure>
            <div className="card-body">
                <h2 className="card-title text-red-600 font-semibold">{ item.name }</h2>
                <p className="text-black font-bold">Precio:  ${ item.price }</p>
                {
                    goToCart
                        ? <Link className='btn text-white' to='/cart'>Finalizar compra</Link>
                        : <ItemCount initial={1} stock={5} onAdd={onAdd}/>
                }
            </div>
        </div>
    )
}

export default ItemDetailCard