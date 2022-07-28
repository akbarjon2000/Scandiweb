import React from 'react'

// 1. Import Apollo hook and gql
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'




const Bugs = () => {
    // 3. Execute Query
    const CATEGORIES = gql`
  query getCategories {
          categories{
    name,
    products{
      id,
      name,
      inStock,
      gallery,
      description,
      category,
      attributes{
        id,
        name,
        type,
        items{
          displayValue,
          value,
          id
      	}
      }
      prices{
        currency{
          label,
          symbol
        }
       	amount,
      }
      brand
      
    }
  }
      }
`;
    const { loading, error, data } = useQuery(CATEGORIES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div className="App">
            {data.categories.map((value, idx) => (
                <p key={idx}>{value.name}</p>
            ))}
        </div>
    )
}
export default Bugs