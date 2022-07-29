import React, { Component, createContext } from 'react'
import {
    ApolloClient,
    InMemoryCache,
    // ApolloProvider,
    // useQuery,
    // gql
} from "@apollo/client";
import { CATEGORIES } from '../graphql/queries';
const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
});

export const DataContext = createContext();

export default class DataContextProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            currency: "USD"
            // productId: 'huarache-x-stussy-le',
            // size: null,
            // color: null

        }
    }
    changeCurrency = (cur) => {
        this.setState(prevstate => ({ ...prevstate, currency: cur }))
    }
    componentDidMount() {
        client
            .query({
                query: CATEGORIES
            })
            .then(result => this.setState(prevstate => ({ ...prevstate, data: result.data.categories })));
        // const client = ...


    }
    // setProduct = (id) => {
    //     this.setState(prevState => ({ ...prevState, productId: id }))
    // }
    // setSize = (size) => {
    //     this.setState(prevState => ({ ...prevState, size }))
    // }
    render() {
        const {
            data,
            currency
            // productId
        } = this.state
        const { changeCurrency } = this
        // const { setProduct } = this
        // console.log(data)
        return (
            <DataContext.Provider value={{ data, currency, changeCurrency }}>{this.props.children}</DataContext.Provider>
        )
    }
}
