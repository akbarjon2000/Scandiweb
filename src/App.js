import { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import {
  Routes,
  Route,
} from "react-router-dom";
import All from './components/all/all';
import Clothes from './components/clothes/clothes';
import Tech from './components/tech/tech';
import DataContext from "./context/dataContext";
import ProductContext from './context/productContext';
import Product from './components/product/product';
import Cart from './components/cart/Cart';
import CartContext from './context/cartContext';
export default class App extends Component {

  render() {

    return (
      <DataContext >
        <ProductContext>
          <CartContext>
            <Navbar />
            <Routes >
              <Route index element={<All />} />
              <Route path='/all' element={<All />} />
              <Route path='/clothes' element={<Clothes />} />
              <Route path='/tech' element={<Tech />} />
              <Route path='/product' element={<Product />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </CartContext>
        </ProductContext>
      </DataContext>
    );
  }
}


