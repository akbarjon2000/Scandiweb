import React, { Component } from 'react'
import { CartContext } from '../../context/cartContext';
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri"
import { Link } from 'react-router-dom';
import { v4 } from "uuid"
import { nanoid } from "nanoid"
import { DataContext } from '../../context/dataContext';
class Order extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: 0
        }
    }
    render() {
        const { addProduct, deleteProduct } = this.context
        console.log(this.context)
        const { product } = this.props
        const handlePlus = (id) => {
            addProduct(id)
        }
        const handleMinus = (id) => {
            deleteProduct(id)
        }
        const handleArrRight = () => {
            if (this.state.image < 4) {
                this.setState({ image: this.state.image + 1 })

            }

        }
        const handleArrLeft = () => {
            if (this.state.image > 0) {
                this.setState({ image: this.state.image - 1 })
            }
        }
        return (
            <DataContext>{(dataContext) => {
                const { currency } = dataContext

                return (
                    <div className='product-container'>
                        <div className='info-row'>
                            <h1 className='brand'>{product.brand}</h1>
                            <p className='name'>{product.name}</p>
                            <p className='price'>{product.prices.map(price => {
                                if (price.currency.label === currency) {
                                    return (
                                        price.currency.symbol + price.amount
                                    )
                                }
                            })}</p>
                            {(product.sizes[0].id === "Size") ?
                                <div className='size'>
                                    <p className='size-text'>SIZE:</p>
                                    <div className='sizes-row'>
                                        {product.sizes[0]?.items?.map(item => (item.value)).map((item, index) => {
                                            if (item === product.size) {
                                                return (
                                                    <div className="active-size-div" key={nanoid()} >
                                                        <p style={{ margin: "0", width: "fit-content" }}>{item}</p>
                                                    </div>
                                                )
                                            } else {
                                                return (
                                                    <div className="size-div" key={nanoid()} >
                                                        <p style={{ margin: "0", width: "fit-content" }}>{item}</p>
                                                    </div>
                                                )
                                            }

                                        })}
                                    </div>
                                </div>
                                : null
                            }
                            {(product.sizes[0].id === "Color") ?
                                <div className='color'>
                                    <p className='size-text'>COLOR:</p>
                                    <div className='colors-row'>
                                        {product.sizes[0]?.items?.map(item => (item.value)).map(item => {
                                            if (item === product.size) {
                                                return (
                                                    <div className='active-color-div' key={nanoid()}>
                                                        <div style={{ backgroundColor: `${item}` }} className='color-div' key={v4}>
                                                        </div>
                                                    </div>
                                                )
                                            } else {
                                                return (
                                                    <div style={{ backgroundColor: `${item}` }} className='color-div' key={nanoid()}>
                                                    </div>
                                                )
                                            }

                                        })}
                                    </div>
                                </div>
                                : null
                            }
                        </div>
                        <div className='image-container'>
                            <div className='counter'>
                                <Link to="/cart" className='counter-btn' onClick={() => handlePlus(product.id)}><p className='plus-minus' >+</p></Link>
                                <span>{product.amount}</span>
                                <div div className='counter-btn' onClick={() => handleMinus(product.id)}><p className='plus-minus' >-</p></div>
                            </div>
                            <div className='image'>
                                <img className='img' src={product.gallary[this.state.image]} alt="image" />
                                <div className='slider'>
                                    <div className='arr' onClick={handleArrLeft}>
                                        <RiArrowLeftSLine />
                                    </div>
                                    <div className='arr' onClick={handleArrRight}>
                                        <RiArrowRightSLine />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                )
            }}</DataContext>
        )
    }
}

Order.contextType = CartContext
export default Order;