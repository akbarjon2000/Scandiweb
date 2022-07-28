import React, { Component, createContext } from 'react'

export const ProductContext = createContext();

export default class ProductContextProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productId: 'huarache-x-stussy-le',
            size: null,
            color: null
        }
    }

    // componentDidMount() {
    //     client
    //         .query({
    //             query: CATEGORIES
    //         })
    //         .then(result => this.setState(prevstate => ({ ...prevstate, data: result.data.categories })));
    //     // const client = ...


    // }
    setProduct = (id) => {
        this.setState(prevState => ({ ...prevState, productId: id }))
    }
    setSize = (size) => {
        this.setState(prevState => ({ ...prevState, size }))
    }
    setColor = (color) => {
        this.setState(prevState => ({ ...prevState, color }))
    }
    render() {
        const { productId, size, color } = this.state
        const { setProduct, setSize } = this
        // console.log(data)
        return (
            <ProductContext.Provider value={{ size, color, productId, setProduct, setSize }}>{this.props.children}</ProductContext.Provider>
        )
    }
}
