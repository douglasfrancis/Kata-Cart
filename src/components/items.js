import React from 'react'



const Item = (props) => {

        return <div>
                    <label>{props.name}</label>
                    <input type='number' defaultValue={props.unitCost}/>
                    <button type='submit'>confirm price</button>
               </div>
};

export default Item