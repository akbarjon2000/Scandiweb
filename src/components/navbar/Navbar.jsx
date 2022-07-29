import React, { Component } from 'react'
import { Container } from './NavbarStyle'
import { ReactComponent as Logo } from "../../assets/icons/a-logo.svg"
import { IoIosArrowDown } from 'react-icons/io'
import { FiShoppingCart } from "react-icons/fi"
import { Link, NavLink } from "react-router-dom"
import { DataContext } from '../../context/dataContext';
import { CartContext } from "../../context/cartContext"
import Modal from '../cart/Modal';
import { nanoid } from '@reduxjs/toolkit';
class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            showCurModal: false
        }
    }
    render() {
        const { changeCurrency, currency } = this.context
        const currencies = ["$ USD", "£ GBP", "A$ AUD", "¥ JPY", "₽ RUB"]
        const symbol = currencies.filter(value => value.slice(-3) === currency)
        const handleModalShow = () => {
            this.setState(prevState => ({ ...prevState, show: true }))
        }
        const handleModalHide = () => {
            this.setState(prevState => ({ ...prevState, show: false }))


        }
        const handleCurrencyShow = () => {
            this.setState(prevState => ({ ...prevState, showCurModal: true }))
        }
        const handleCurrencyHide = () => {
            this.setState(prevState => ({ ...prevState, showCurModal: false }))


        }
        const handleCurrencyChange = (cur) => {
            changeCurrency(cur)

        }
        const categories = this.context.data
        // console.log(categories)

        return (
            <CartContext.Consumer>{(cartContext) => {
                const { products } = cartContext
                var length = products.length
                var totalPrice = 0;
                products.map(product => {
                    product.prices.map(price => {
                        if (price.currency.label === currency) {
                            totalPrice += price.amount;
                        }
                    })
                })
                const currencies = ["$ USD", "£ GBP", "A$ AUD", "¥ JPY", "₽ RUB"]
                const symbol = currencies.filter(value => value.slice(-3) === currency)
                return (
                    <Container show={this.state.show} currencyModal={this.state.showCurModal}>
                        <div className='categoryContainer'>
                            {categories.map((value, idx) => (
                                <NavLink className={({ isActive }) => isActive ? "activeLink" : "notActiveLink"} to={value.name} key={idx}>{value.name.toUpperCase()}</NavLink>
                            ))}
                        </div>
                        <Logo className="logo" />
                        <div className='shopDiv' onMouseEnter={handleCurrencyShow} onMouseLeave={handleCurrencyHide}>

                            <div className='currency' >{symbol[0].slice(0, 2)} <IoIosArrowDown className='arrDown' /></div>
                            <NavLink className='shoppingCart' to="/cart" onMouseEnter={handleModalShow} onMouseLeave={handleModalHide}  >
                                <FiShoppingCart />
                                <div className='cart-items-count'>
                                    {length}
                                </div>
                            </NavLink>

                        </div>
                        <div className='currency-modal' onMouseEnter={handleCurrencyShow} onMouseLeave={handleCurrencyHide} onClick={handleCurrencyHide}>
                            {currencies.map(value => (
                                <p style={{ margin: "0" }} className={value.slice(-4)} onClick={() => handleCurrencyChange(value.slice(-3))} key={nanoid()} >{value} </p>
                            ))}
                        </div>
                        <div className='modal' onMouseEnter={handleModalShow} onMouseLeave={handleModalHide}>
                            <span className='bag-text'><strong>My Bag, </strong>{products.length} {products.length < 2 ? "item" : "items"}</span>
                            {products.map(product => (
                                <Modal product={product} key={nanoid()} />
                            ))}
                            <div className='modal-total'>
                                <strong>Total:</strong>
                                <strong>{symbol[0].slice(0, 2)}{totalPrice}</strong>
                            </div>
                            <div className='buttons'>
                                <Link to="/cart" className='viewbag'>VIEW BAG</Link>
                                <div className='checkout'>CHECKOUT</div>
                            </div>
                        </div>
                    </Container>
                )
            }}</CartContext.Consumer>
        )
    }
}
Navbar.contextType = DataContext
export default Navbar
