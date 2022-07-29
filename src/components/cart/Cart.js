import React, { Component } from 'react'
import { CartContext } from '../../context/cartContext';
import { CartContainer } from './CartStyle'
import Order from './Order';
import { DataContext } from '../../context/dataContext';
import { nanoid } from "nanoid"
class Cart extends Component {

    render() {
        console.log(this.context)
        const { products } = this.context

        return (
            <DataContext>{(dataContext) => {
                const { currency } = dataContext
                var totalPrice = 0;
                products.map(product => {
                    product.prices.map(price => {
                        if (price.currency.label === currency) {
                            totalPrice += price.amount;
                        }
                    })
                })
                var tax = Math.floor((totalPrice / 100) * 21)
                const currencies = ["$ USD", "£ GBP", "A$ AUD", "¥ JPY", "₽ RUB"]
                const symbol = currencies.filter(value => value.slice(-3) === currency)
                return (
                    <CartContainer>
                        <h1>CART</h1>
                        {products.map(product => (
                            <Order product={product} key={nanoid()} />
                        ))}
                        <div className='checkout'>
                            <p className='info'>Tax 21% : {symbol[0].slice(0, 2)}{tax}</p>
                            <p className='info'>Quantity: {products.length}</p>
                            <strong className='info'>Total: {symbol[0].slice(0, 2)}{totalPrice + tax}</strong>
                            <div className='order'>ORDER</div>
                        </div>
                    </CartContainer>
                )
            }}</DataContext>
        )
    }
}

Cart.contextType = CartContext
export default Cart;