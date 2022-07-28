import React, { Component } from 'react'
import { CartContext } from '../../context/cartContext';
import { CartContainer } from './CartStyle'
import { v4 } from "uuid"
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri"
import Order from './Order';

class Cart extends Component {

    render() {
        console.log(this.context)
        const { products } = this.context

        return (
            <CartContainer>
                <h1>CART</h1>
                {products.map(product => (
                    <Order product={product} key={v4()} />
                ))}
                <div className='checkout'>
                    <p className='info'>Tax 21% : $42.00</p>
                    <p className='info'>Quantity: {products.length}</p>
                    <strong className='info'>Total: $200.00</strong>
                    <div className='order'>ORDER</div>
                </div>
            </CartContainer>
        )
    }
}

Cart.contextType = CartContext
export default Cart;