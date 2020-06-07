import React, {createRef} from 'react'

const AddToBasket = (items, addItem) => {

    const itemRef = createRef();

    let options = [];

    for (let idx in items) {
        let item = items[idx];
        options.push(<option key={item.id} value={item.id}>{item.name}</option>);
    }
    
    return (
        <div>
            <form onSubmit={(event) => { event.preventDefault(); addItem(itemRef.current.value); }}>
                <select ref={itemRef}>
                    {options}
                </select>
                <button type="submit">Add Item</button>
            </form>
        </div>
    )
}

export default AddToBasket