import React, {useState} from 'react'
import { useCartContext } from '../../context/CartContext'
import {Link} from 'react-router-dom'
import ItemCart from './CartItem'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import Swal from 'sweetalert2'

export const UserForm = ( {setUser} ) => {

  const updateUser = ( event ) => {
    setUser( user => ({...user, [event.target.name]: event.target.value }))
    console.log( event.target.value );
    console.log( event.target.name );
  }

  return (
    <div className='mt-10'>
    <h1 className='text-white font-bolder ml-5'>PARA FINALIZAR COMPRA, COMPLETAR LOS DATOS:</h1>
    <div className="form-control">
      <label className="input-group m-3">
        <span className='text-white'>Name</span>
        <input onChange={updateUser} type="text" name='name' placeholder="" className="input input-bordered" />
      </label>
      <label className="input-group m-3">
        <span className='text-white'>Phone</span>
        <input onChange={updateUser} type="text" name='phone' placeholder="" className="input input-bordered" />
      </label>
      <label className="input-group m-3">
        <span className='text-white' >Email</span>
        <input onChange={updateUser} type="text" name='email' placeholder="" className="input input-bordered" />
      </label>
    </div>
  </div>
  )
}


const Cart = () => {

    const [user, setUser] = useState({})
    const { cart, totalPrice } = useCartContext();

    const order = {
      buyer: user,
      items: cart.map((product ) => ({
        id: product.id,
        title: product.name,
        price: product.price,
        quantity: product.quantity,
      })),
    total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order).then(({id}) => { 
          console.log(id);
          alert(id)
          Swal.fire({
            icon: 'success',
            text: 'Compra exitosa',
          })
      })
    }

    if (cart.length === 0) {
        return(
            <>
                <div className='card-title text-white-500 text-xl m-5'>No hay herramientas en el carrito</div>
                <Link to='/productos'><button className='btn bg-red-600 m-5'>Ver productos</button></Link>
            </>
        )
    }

  return (
    <>
      {
        cart.map(product => <ItemCart key={product.id} product={product} />) 
      }
      <div className='text-white text-xl ml-20'>
        Total: ${totalPrice()}
      </div>
      <UserForm setUser={setUser}/>
      <button className='btn ml-20 text-white bg-green-700' onClick={handleClick}>Realizar compra</button>
    </>
  )
}

export default Cart