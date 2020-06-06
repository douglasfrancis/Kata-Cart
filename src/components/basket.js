import React from 'react'
import BasketLine from './basketLine'
import Item from './items'

const Basket = () => {

  return <div> 
            <h2>SKU Pricing</h2>
            <Item id='item-a' name='A' unitCost = '50' />
            <Item id='item-b' name='B' unitCost = '30' />
            <Item id='item-c' name='C' unitCost = '20' />
            <Item id='item-d' name='D' unitCost = '15' />
            
            <h2>Basket</h2>
            <BasketLine name='A' />
            <BasketLine name='B'/>
            <BasketLine name='C'/>
            <BasketLine name='D'/>
         </div>
}

export default Basket