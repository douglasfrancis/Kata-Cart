import React from 'react'
import "../index.css";


const BasketLine = ({index, sku, quantity, changeQuantity}) => {
    
    const GetItemTotal = () => {
       return ((sku.price * quantity)/100).toFixed(2)
    } 
    return <div>
        
                <label id='item' for={sku.id}>{sku.name}</label>
                <p id='qty'>Qty</p>
                <button type="button" onClick={() => {changeQuantity(index, quantity -1)}}>-</button>
                <input className="inputne" value={quantity} onChange={(event) => changeQuantity(index, event.target.value)} maxLength='2' size='2'/>
                <button type="button" onClick={() => {changeQuantity(index, quantity +1)}}>+</button>
                <p>item total £</p>{GetItemTotal()}

           </div>
    
};

/*
Create GetItemTotal function for individual cost

*/
export default BasketLine