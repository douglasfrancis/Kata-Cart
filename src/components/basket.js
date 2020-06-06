import React, {useState, useEffect} from 'react'
import BasketLine from './basketLine'

const Basket = (props) => {

let stockItems = {
        A: {id: 'A', name: 'Item A', price: 50, deals: {3: 130, 5: 70}},
        B: {id: 'B', name: 'Item B', price: 30, deals: {2: 45}},
        C: {id: 'C', name: 'Item C', price: 20, deals: {}},
        D: {id: 'D', name: 'Item D', price: 15, deals: {}},
}

        const initialState = [{sku: stockItems.A, quantity: 1}]

        const [basket, setBasket] = useState({items: initialState})


  return ( <div> 
            
            
            <h2>Basket</h2>
            <BasketLine name='A' />
            <BasketLine name='B'/>
            <BasketLine name='C'/>
            <BasketLine name='D'/>
         </div>
  )}

export default Basket