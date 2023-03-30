import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useGlobalContext } from '../context/context'
function Header() {
    const { amount } = useGlobalContext()
    return (
        <div className="header">
            <h2>shopping cart</h2>
            <div className='header-icon'>
                <AiOutlineShoppingCart size={30} />
                <p>{amount}</p>
            </div>
        </div>
    )
}

export default Header