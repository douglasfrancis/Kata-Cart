import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Basket from './components/basket'

let stockItems = {
  A: {id: 'A', name: 'Item A', price: 50, deals: {3: 130,}},
  B: {id: 'B', name: 'Item B', price: 30, deals: {2: 45}},
  C: {id: 'C', name: 'Item C', price: 20, deals: {}},
  D: {id: 'D', name: 'Item D', price: 15, deals: {}},
};

ReactDOM.render(<Basket stockItems={stockItems} />, document.getElementById('container'));