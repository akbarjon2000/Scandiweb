import React, { Component, createRef } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'
import { DataContext } from '../../context/dataContext'
import { ProductContext } from '../../context/productContext'
import { ProdCon } from './productStyle'
import { nanoid } from "nanoid"
class Product extends Component {
    constructor(props) {
        super(props)
        this.descriptionRef = createRef()
    }

    render() {

        return (
            <CartContext>{(cartContext) => (
                <ProductContext>{(productContext) => {
                    const { setData } = cartContext
                    const { productId, setSize, setColor } = productContext
                    const { currency } = this.context
                    const product = this.context.data
                        .filter(category => category.name == "all")[0].products
                        .filter(product => product.id === productId)[0]
                    console.log(product)
                    const size = product?.attributes[0]?.items?.map(item => (item.value))
                    console.log(size)
                    const handleSize = (size) => {
                        setSize(size)
                        console.log(productContext);
                    }
                    const handleColor = (color) => {
                        setSize(color)
                        console.log(productContext)
                    }
                    const handleCart = () => {
                        console.log("Clicked")
                        {/* if (cartContext.products.length !== 0) {
                            if (cartContext.products.productId === productContext.productId && cartContext.products.size === productContext.size && cartContext.products.color === productContext.color) {
                                setData({ productId })
                            }
                        } */}
                        setData({ prices: product.prices, gallary: product.gallery, name: product.name, brand: product.brand, sizes: product.attributes, color: productContext.color, size: productContext.size, amount: 1 })
                        console.log(cartContext)
                    }
                    return (

                        <ProdCon>
                            <div style={{ display: "flex", gap: "50px" }}>

                                <div className='smallImages'>
                                    <img className='smallImage' src={product.gallery[1]} alt="image" />
                                    <img className='smallImage' src={product.gallery[2]} alt="image" />
                                    <img className='smallImage' src={product.gallery[3]} alt="image" />
                                    <img className='smallImage' src={product.gallery[4]} alt="image" />
                                </div>
                                <div className='bigImage'>
                                    <img className='bigImage' src={product.gallery[0]} />
                                </div>
                            </div>
                            <div className='description'>
                                <h1>{product.brand}</h1>
                                <p style={{ fontSize: "30px", margin: "0" }}>{product.name}</p>
                                {(product.attributes.length > 0 && product.attributes[0].id === "Size") ?
                                    <div className='size'>
                                        <p className='size-text'>SIZE:</p>
                                        <div className='sizes-row'>
                                            {size.map(item => (
                                                <div style={{ cursor: "pointer" }} className="size-div" key={nanoid()} onClick={() => handleSize(item)}>
                                                    <p style={{ margin: "0", width: "fit-content", }}>{item}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    : null
                                }
                                {(product.attributes.length > 0 && product.attributes[0].id === "Color") ?
                                    <div className='color'>
                                        <p className='size-text'>COLOR:</p>
                                        <div className='colors-row'>
                                            {size.map(item => (
                                                <div style={{ backgroundColor: `${item}`, cursor: "pointer" }} className='color-div' key={nanoid} onClick={() => handleColor(item)}>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    : null
                                }
                                <div className='price'>
                                    <p className='size-text'>PRICE:</p>
                                    <p className='price-amount'>{product.prices.map(price => {
                                        if (price.currency.label === currency) {
                                            return (
                                                price.currency.symbol + price.amount
                                            )
                                        }
                                    })}
                                    </p>
                                </div>
                                <Link to="/cart" className='add-to-cart' onClick={handleCart}><p className='add-text' >ADD TO CART</p></Link>
                                <div className='description-text'> {product.description.slice(0, 150)}</div>
                            </div>
                        </ProdCon >
                    )
                }}
                </ProductContext>
            )}</CartContext>
        )
    }
}

Product.contextType = DataContext
export default Product