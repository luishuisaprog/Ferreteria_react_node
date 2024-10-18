import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../recursos/logo ferreteria.png'
import CartWidget from '../Components/Cart/CartWidget'

const Navbar = () => {
return (
    <div className="navbar bg-base-100">
        <div className="flex-1">
            <Link to='Inicio' className="btn btn-link normal-case text-xl">
                <div>
                    <img className='logoFerre' src={Logo} alt="Logo" width="80" height="80"></img>
                </div>
            </Link>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
            <li><Link to='Inicio'>Inicio</Link></li>
            <li><Link to='Productos'>Productos</Link></li>
            <li><Link to='/cart'><CartWidget/></Link></li>
            </ul>
        </div>
    </div>
)
}

export default Navbar
