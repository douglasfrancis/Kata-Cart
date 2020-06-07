import React, {useState, useEffect} from 'react';
import BasketLine from './basketLine';

const Basket = (props) => {
let stockItems = {};
       stockItems['A'] = {id: 'A', name: 'Item A', price: 50, deals: {3: 130}};
       stockItems['B'] = {id: 'B', name: 'Item B', price: 30, deals: {2: 45}};
       stockItems['C'] = {id: 'C', name: 'Item C', price: 20, deals: {}};
       stockItems['D'] = {id: 'D', name: 'Item D', price: 15, deals: {}};


        const initialState = [{sku: stockItems['A'], quantity: 1}]

        const [basket, setBasket] = useState({lines: initialState})

        const changeQuantity = (index, quantity) => {
            let newBasket = Object.assign({},basket);
            newBasket.lines[index].quantity = quantity;
            setBasket(newBasket);
        };

  return ( <div> 
            
            
            <h2>Basket</h2>
            {basket.lines.map((line, index) => <BasketLine key={index} index={index} sku={line.sku} quantity={line.quantity} changeQuantity={changeQuantity}/>)}
        
        </div>
  )}

export default Basket