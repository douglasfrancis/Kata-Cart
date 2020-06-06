import React from 'react'
import "../index.css";




const BasketLine = ({sku, quantity, changeQuantity}) => {

    const GetItemTotal = () => {
        return '-.--'
    } 
    return <div>
        
                <label for={sku.id}>{sku.name}</label>
                <p id='qty'>Qty</p>
                <button type="button" onClick={changeQuantity(quantity -1)}>-</button>
                <input className="inputne" value={quantity} onChange={(event) => changeQunatity(event.target.value)} maxLength='2' size='2'/>
                <button type="button" onClick={changeQuantity(quantity +1)}>+</button>
                <p>item total £</p>{GetItemTotal}

           </div>
    
};

/*
Create GetItemTotal function for individual cost
Create changeQuantity function
*/
export default BasketLine