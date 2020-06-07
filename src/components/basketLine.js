import React from 'react'
import "../index.css";


const BasketLine = ({index, sku, quantity, updateBasket, lineCost}) => {
    
    const GetItemTotal = () => {
       return lineCost.toFixed(2)
    } ;

    const UpdateQuantity = (quantity) => {
        quantity = parseInt(quantity);

        if(quantity <= 0) {
            quantity =1;
        }
        updateBasket(index, quantity, CalculateCost(quantity));

    };
    const CalculateCost = (quantity) => {
        let cost = 0;
        for (let dealQuantity in sku.deals) {
            if (quantity >= dealQuantity) {
                cost = Math.floor(quantity / dealQuantity) * sku.deals[dealQuantity];
                cost += (quantity % dealQuantity) * sku.price;
            }
        }

        if (cost === 0) {
            cost = quantity * sku.price;
        }
        
        return cost;
    }

    return <div>
        
                <label id='item' for={sku.id}>{sku.name}</label>
                <p id='qty'>Qty</p>
                <button type="button" onClick={() => {UpdateQuantity(quantity -1)}}>-</button>
                <input className="inputne" value={quantity} onChange={(event) => UpdateQuantity(event.target.value)} maxLength='2' size='2'/>
                <button type="button" onClick={() => {UpdateQuantity(quantity +1)}}>+</button>
                <p>item total £</p>{GetItemTotal()}

           </div>
    
};

/*
Create GetItemTotal function for individual cost

*/
export default BasketLine