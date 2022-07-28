import React, { Component } from 'react'
import { CATEGORIES } from '../../graphql/queries'
import { graphql } from "react-apollo"
import { Container, Image, Product } from './allStyle';
import { DataContext } from '../../context/dataContext';
import { ProductContext } from '../../context/productContext';
import { Link } from 'react-router-dom';


export default class All extends Component {


    render() {

        return (
            <ProductContext>{(productContext) => (
                <DataContext.Consumer>{(DataContext) => {
                    console.log(DataContext)
                    const categories = DataContext.data
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
                                    <Product className='product' key={idx} onClick={() => handleClick(value.id)}>
                                        <Link style={{ textDecoration: "none" }} to={'/product'}>
                                            <img src={value.gallery[0]} className="image" alt="Girl in a jacket" />
                                            {/* <div style={{ backgroundImage: value.gallery[0] }} image={value.gallery[2]} className='image'></div> */}
                                            <div className='details'>
                                                <p>{value.name}</p>
                                                <p>$ {value.prices[0].amount}</p>
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
