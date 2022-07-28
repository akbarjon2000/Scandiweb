import React, { Component } from 'react'
import { CategoryContainer, Container } from './NavbarStyle'
import { graphql } from 'react-apollo'
import { CATEGORIES } from '../../graphql/queries';
import { ReactComponent as Logo } from "../../assets/icons/a-logo.svg"
import { IoIosArrowDown } from 'react-icons/io'
import { FiShoppingCart } from "react-icons/fi"
import { NavLink } from "react-router-dom"
import { DataContext } from '../../context/dataContext';
import { CartContext } from "../../context/cartContext"
import Order from '../cart/Order';
import { v4 } from "uuid"
import Modal from '../cart/Modal';
class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }
    render() {
        const handleModalShow = () => {
            this.setState({ show: true })
            console.log("show")
        }
        const handleModalHide = () => {
            this.setState({ show: false })
            console.log("hide")

        }

        const categories = this.context.data
        // console.log(categories)

        return (
            <CartContext.Consumer>{(cartContext) => {
                const { products } = cartContext
                var length = products.length
                return (
                    <Container show={this.state.show}>
                        <div className='categoryContainer'>
                            {categories.map((value, idx) => (
                                <NavLink className={({ isActive }) => isActive ? "activeLink" : "notActiveLink"} to={value.name} key={idx}>{value.name.toUpperCase()}</NavLink>
                            ))}
                        </div>
                        <Logo className="logo" />
                        <div className='shopDiv'>

                            <div className='currency' >$ <IoIosArrowDown className='arrDown' /></div>
                            <NavLink className='shoppingCart' to="/cart" onMouseEnter={handleModalShow} onMouseLeave={handleModalHide}  >
                                <FiShoppingCart />
                                <div className='cart-items-count'>
                                    {length}
                                </div>
                            </NavLink>

                        </div>

                        <div className='modal' onMouseEnter={handleModalShow} onMouseLeave={handleModalHide}>
                            {products.map(product => (
                                <Modal product={product} key={v4()} />
                            ))}
                        </div>
                    </Container>
                )
            }}</CartContext.Consumer>
        )
    }
}
Navbar.contextType = DataContext
export default Navbar
