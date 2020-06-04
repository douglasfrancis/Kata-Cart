import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Item from './components/items'
import BasketItem from './components/basketLine'

ReactDOM.render(
    <div>
      
      <h2>SKU Pricing</h2>
      <Item id='a' name='A' unitCost = '50' />
      <Item id='b' name='B' unitCost = '30' />
      <Item id='c' name='C' unitCost = '20' />
      <Item id='d' name='D' unitCost = '15' />
      <h2>Basket</h2>
      <BasketItem id='a' name='A' />
      <BasketItem id='b' name='B'/>
      <BasketItem id='c' name='C'/>
      <BasketItem id='d' name='D'/>
      
    </div>, document.getElementById('container')
    
);
// Button needed to confirm prices before checkout to allow for price amendments