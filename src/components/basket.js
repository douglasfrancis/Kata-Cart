import React, {useState, useEffect} from 'react';
import BasketLine from './basketLine';

const Basket = (props) => {
let stockItems = {};
       stockItems['A'] = {id: 'A', name: 'Item A', price: 50, deals: {3: 130}};
       stockItems['B'] = {id: 'B', name: 'Item B', price: 30, deals: {2: 45}};
       stockItems['C'] = {id: 'C', name: 'Item C', price: 20, deals: {}};
       stockItems['D'] = {id: 'D', name: 'Item D', price: 15, deals: {}};


        const initialState = [
            {sku: stockItems['A'], quantity: 1, lineCost: 50},
            {sku: stockItems['B'], quantity: 1, lineCost: 30},
            {sku: stockItems['C'], quantity: 1, lineCost: 20},
            {sku: stockItems['D'], quantity: 1, lineCost: 15},
        ]

        const [basket, setBasket] = useState({lines: initialState})

        const updateBasket = (index, quantity, lineCost) => {
            let newBasket = Object.assign({},basket);
            newBasket.lines[index].quantity = quantity;
            newBasket.lines[index].lineCost = lineCost;
            setBasket(newBasket);
            
        };
        let TotalCost = 0;

        for (let idx in basket.lines) {
            TotalCost += basket.lines[idx].lineCost;
        }

  return ( <div> 
            
            
            <h2>Basket</h2>
            {basket.lines.map((line, index) => <BasketLine key={index} index={index} sku={line.sku} lineCost={line.lineCost} quantity={line.quantity} updateBasket={updateBasket}/>)}
            <br /><div><h2>Total Cost:   £{TotalCost.toFixed(2)}</h2></div>
        </div>
  )}

export default Basket