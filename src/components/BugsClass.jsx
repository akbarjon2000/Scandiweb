import React, { Component } from 'react'
import { CATEGORIES } from '../graphql/queries';
import { graphql } from 'react-apollo'
class BugsClass extends Component {
    constructor() {
        super()

    }

    displayData() {
        console.log(this.props)
        var newData = this.props.data;
        if (newData.loading) return <p>LOADING...</p>
        else {
            return newData.categories.map((value, idx) => (
                <p key={idx}>{value.name}</p>
            ))
        }
    }


    render() {
        return (
            <div>
                {this.displayData()}
            </div>
        )
    }
}
export default graphql(CATEGORIES)(BugsClass);