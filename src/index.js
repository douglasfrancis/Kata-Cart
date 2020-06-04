import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Item from './components/items'

ReactDOM.render(
    <div>
      <h2>SKU Pricing</h2>
      <Item id='a' name='A' unitCost = '50' />
      <Item id='b' name='B' unitCost = '30' />
      <Item id='c' name='C' unitCost = '20' />
      <Item id='d' name='D' unitCost = '15' />
      
    </div>, document.getElementById('container')
    
);
// Button needed to confirm prices before checkout to allow for price amendments