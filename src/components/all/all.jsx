import React, { Component } from 'react'
import { Container, Product } from './allStyle';
import { DataContext } from '../../context/dataContext';
import { ProductContext } from '../../context/productContext';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';

export default class All extends Component {


    render() {

        return (
            <ProductContext>{(productContext) => (
                <DataContext.Consumer>{(DataContext) => {
                    console.log(DataContext)
                    const categories = DataContext.data
                    const { currency } = DataContext
                    const { setProduct } = productContext
                    const handleClick = (id) => {
                        setProduct(id)
                        console.log(DataContext)
                    }
                    return (
                        <Container>
                            <div className='category'>ALL</div>
                            <div className='productContainer'>
                                {categories[0]?.products?.map((value, idx) => (
                                    <Product className='product' key={nanoid()} onClick={() => handleClick(value.id)}>
                                        <Link style={{ textDecoration: "none" }} to={'/product'}>
                                            <img src={value.gallery[0]} className="image" alt="Girl in a jacket" />
                                            {value.inStock ?
                                                <p className='out-of-stock'>OUT OF STOCK</p> : null
                                            }


                                            <div className='details'>
                                                <p>{value.name}</p>
                                                <p>{value.prices.map(price => {
                                                    if (price.currency.label === currency) {
                                                        return (
                                                            price.currency.symbol + price.amount
                                                        )
                                                    }
                                                })}</p>
                                            </div>

                                        </Link>
                                    </Product>
                                ))}
                            </div>
                        </Container>
                    )
                }}</DataContext.Consumer>
            )}</ProductContext>
        )
    }
}
