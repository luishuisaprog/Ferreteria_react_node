import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard'
import {products} from '../Products'


const ItemListContainer = () => {
    
    const styles = {
        color: 'white',
        fontFamily: 'Segoe UI',
        fontSize: '30px',
        paddingTop: '20px',
        textAlign: 'center',
    }

    const [data, setData] = useState([])

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(products)
            }, 1000);
        });
        getData.then(res => setData(res));

    }, [data])
    
    return (
        <>
            <div style={styles}>HERRAMIENTAS EINHELL</div>
            <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-8">
            { data.map( i => <ItemCard key={i.id} {...i}/> ) }
            </div>
            </div>
        </>
    )
}

export default ItemListContainer