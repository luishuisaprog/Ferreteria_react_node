import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../Products'
import ItemDetailCard from './ItemDetailCard'


export const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const {id: itemId} = useParams()

    useEffect(() => {
        const getItem = new Promise(resolve => {
            setTimeout(() => {
                resolve(products)
            }, 1000);
        });
        
        getItem.then(res => setItem(res.find(products => products.id === parseInt(itemId))));
    }, [itemId])   
    
    
return (
    <ItemDetailCard item={item}/>
    )
}

export default ItemDetailContainer
