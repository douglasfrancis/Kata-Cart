import React, {useState} from 'react';
import BasketLine from './basketLine';
import AddToBasket from './AddToBasket'

const Basket = ({stockItems}) => {
    const [basket, setBasket] = useState({lines: []});

    const updateBasket = (index, quantity, lineCost) => {
        let newBasket = Object.assign({}, basket);

        if (quantity <= 0) {
            newBasket.lines.splice(index, 1);
        } else {
            newBasket.lines[index].quantity = quantity;
            newBasket.lines[index].lineCost = lineCost;
        }

        console.log(newBasket);
                
        setBasket(newBasket);
    };

    const addItem = (skuId) => {
        let newBasket = Object.assign({}, basket);
        let exists = false;

        newBasket.lines.forEach(function(line) {
            if (line.sku.id === skuId) {
                exists = true;
                line.quantity += 1;
            }
        });

        if (!exists) {
            newBasket.lines.push({sku: stockItems[skuId], quantity: 1, lineCost: stockItems[skuId].price})
        }

        setBasket(newBasket);
    };
        let TotalCost = 0;

        for (let idx in basket.lines) {
            TotalCost += basket.lines[idx].lineCost;
        };

  return ( <div> 
            
            <AddToBasket items = {stockItems} addItem={addItem}/>
            <h2>Basket</h2>
            {basket.lines.map((line, index) => <BasketLine key={index} index={index} sku={line.sku} lineCost={line.lineCost} quantity={line.quantity} updateBasket={updateBasket}/>)}
            <br /><div><h2>Total Cost:   £{TotalCost.toFixed(2)}</h2></div>
        </div>
  )}

export default Basket