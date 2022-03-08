import React, {useState} from 'react'

const ItemCount = ()=> {
    const [counter, setCounter] = useState (1);
    
    const removeItemButton = ()=> {
        if (counter > 1) {
            setCounter (counter - 1 )
        }
    }

    const addItemButton = ()=> {
        
        setCounter (counter + 1);
    }

    return (

            <div className="text-green-600 text-lg mx-24 font-bold py-2 px-32">
                <button className="w-6  bg-red-300" onClick = {removeItemButton}>-</button>
                <span className="px-2">{counter}</span>
                <button className="w-6  bg-red-300" onClick = {addItemButton}>+</button>
            </div>
        
    )
}

export default ItemCount