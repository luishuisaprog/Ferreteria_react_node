import React from 'react'
import { Link } from 'react-router-dom'


const ItemCard = ({id, img, name}) => {
  return (
    <>
    <Link to ={`/Productos/item/${id}`}>
        <div className="card w-100 bg-white shadow-xl m-5 ">
          <figure className="px-10 pt-10">
            <img src={img} alt={name} className="rounded" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-red-500 text-xl font-bold">{name}</h2>
          </div>
        </div>
    </Link>
    </>
  )
}

export default ItemCard