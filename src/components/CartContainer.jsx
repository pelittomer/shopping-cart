import React from 'react'
import { useGlobalContext } from '../context/context'
import { BsTrash } from 'react-icons/bs'
function CartContainer() {
    const { cart, total, toggleAmount, removeItem } = useGlobalContext()
    if (cart.length === 0) {
        return (
            <section className='bag-container'>
                <h1 className='empty-cart'>Is currently empty</h1>
            </section>
        )
    }
    return (
        <section className="bag-container">
            <div className='bag-title'>
                <h3>product</h3>
                <h3>price</h3>
                <h3>qty</h3>
            </div>
            {cart.map((item) => {
                const { id, title, price, img, amount } = item;
                return (
                    <div className="bag" key={id}>
                        <div className='bag-products'>
                            <img src={img} alt={title} />
                            <div className="info">
                                <h4>{title}</h4>
                            </div>
                        </div>
                        <div>
                            <h4>$ {price}</h4>
                        </div>
                        <div className='bag-details' >
                            <div className='bag-counter'>
                                <button onClick={() => toggleAmount(id, 'decrease')}>-</button>
                                <h3>{amount}</h3>
                                <button onClick={() => toggleAmount(id, 'increase')}>+</button>
                            </div>
                            <button onClick={() => removeItem(id)} >
                                <BsTrash />
                            </button>
                        </div>
                    </div>
                )
            })}
            <footer className="bag-footer">
                <div className="bag-footer-info">
                    <h2>total <span>$ {total}</span></h2>
                </div>
            </footer>
        </section>
    )
}

export default CartContainer