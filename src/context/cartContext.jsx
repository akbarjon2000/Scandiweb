import React, { Component, createContext } from 'react'

export const CartContext = createContext();

export default class CartContextProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }

    setData = (newProduct) => {
        this.setState({ products: [...this.state.products, newProduct] })
    }

    addProduct = (id) => {
        this.state.products.map(product => {
            if (product.id === id) {
                product.amount++
            }
        })
    }
    deleteProduct = (id) => {
        this.state.products.map(product => {
            if (product.id === id && product.amount > 1) {
                product.amount--
            }
        })
    }
    // setColor = (color) => {
    //     this.setState(prevState => ({ ...prevState, color }))
    // }
    render() {
        // const setSize = (size) => {
        //     this.setState({ products: [] })
        //     console.log(this.state.products)
        // }
        // setSize()
        const { products } = this.state
        const { setData, addProduct, deleteProduct } = this
        // console.log(data)
        return (
            <CartContext.Provider value={{ products, setData, addProduct, deleteProduct }}>{this.props.children}</CartContext.Provider>
        )
    }
}
