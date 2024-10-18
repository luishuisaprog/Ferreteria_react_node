import React from 'react'
import ferreteria from '../../recursos/ferreteria 800x400.jpg'

const ItemListContainerInicio = () => {
    const styles= {
        textAlign: 'center',
        fontFamily:'Segoe UI',
        fontSize: '20px',
        fontWeight: 'bold',
        color: 'white',
        marginTop: '50px',
    }
  return (
    <>
    <div style={styles}>Productos y herrmientas al mejor precio</div>
    <div >
      <img className="ml-5 mt-5 rounded-lg" src={ferreteria} alt="ferreteria"/>
      </div>
    </>
  )
}

export default ItemListContainerInicio