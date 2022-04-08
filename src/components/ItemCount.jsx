import React, {useState} from 'react'
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ItemCount = ({saveItems, item, updateStockPlus, updateStockMinus, cart})=> {
    const [counter, setCounter] = useState (0);
    const [itemVerification, setItemVerification] = useState (false);
    const [proceedToCheckout, setproceedtoCheckout] = useState (false);
    const {itemId} = useParams()

    const removeItemButton = ()=> {
        if (counter >= 1) {
            setCounter (counter - 1 )
            updateStockPlus(itemId);
        }
    }

    const addItemButton = ()=> {
        if (item.stock > 0){
            setCounter (counter + 1);
            updateStockMinus(itemId);
        }    
    }

    const getCartItems = () => {
        saveItems({id:itemId, quantity:counter, name: item.name, price: item.price })
    }

    const updateItemVerification = () => {
        if(counter == 0){
            setItemVerification(false)
        }else if(counter > 0){
            setItemVerification(true)
        }
    }

    const showMoreOptions = () => {
        if (!cart){
            setproceedtoCheckout(false)
        }else{
            setproceedtoCheckout(true)
        }
    }
    
    useEffect (()=>{
        console.log('productos en el carro', proceedToCheckout, cart)
        updateItemVerification()
        showMoreOptions()
    }, [counter])

    return (

            <div className="flex-wrap text-center text-green-600 text-lg mx-24 font-bold py-2 px-32">
                
                <button className="w-6  bg-red-300 rounded hover:bg-red-400 hover:font-bold" onClick = {removeItemButton}>-</button>
                <span className="px-2">{counter}</span>
                <button className="w-6 bg-red-300 rounded hover:bg-red-400 hover:font-bold" onClick = {addItemButton}>+</button>
                <br></br>
                {itemVerification &&  
                    <button className="text-base font-semibold text-white m-5 p-1 w-40 rounded bg-green-500 hover:bg-green-600" onClick={getCartItems}>Agregar al carrito</button>
                }
                {proceedToCheckout &&
                <div>
                    <Link to='/cart'><button className="text-base font-semibold text-white m-5 p-1 w-40 rounded bg-green-500 hover:bg-green-600" >Ir al carrito</button></Link>
                    <Link to='/'><button className="text-base font-semibold text-white m-5 p-1 w-40 rounded bg-green-500 hover:bg-green-600" >Seguir comprando</button></Link>
                </div>
                }
            </div>
        
    )
}

export default ItemCount