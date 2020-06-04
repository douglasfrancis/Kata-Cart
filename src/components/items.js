import React from 'react'

const Item = (props) => {
        console.log(props)
        return <div>
                    <label for={props.id}>{props.name}</label>
                    <input type='number' defaultValue={props.unitCost}/>


               </div>
};

export default Item