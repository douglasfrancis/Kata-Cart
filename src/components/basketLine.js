import React from 'react'
import "../index.css";

function n(){
    return '-.--'
} 

function DecreaseItem() {
    console.log('decrease')
    }
    
function IncrementItem() {
    console.log('increase')
    }

const BasketItem = (props) => {
    
    return <div>
        
                <label id='item' for={props.id}>{props.name}</label>
                <p id='qty'>Qty</p>
                <button type="button" onClick={DecreaseItem()}>-</button>
                <input type="number" defaultValue="0" min="0" max="99" />
                <button type="button" onClick={IncrementItem()}>+</button>
                <p>item total £</p>{n()}

           </div>
};

/*
Add functionality to increase/decrease buttons
Create n function for individual cost
*/
export default BasketItem