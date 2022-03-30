import React, {useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { CartContext } from './CartContext';
import ItemCount from './ItemCount';
import ItemDetail from './ItemDetail';
import { stock } from './stock';

const ItemDetailContainer = () => {
const [item, setItem] = useState([]);
const [loading, setLoading] = useState (false)
const [savedCartItems, setSavedCartItems] = useState ({})
const productList = stock;
const [stockUpdate, setStockUpdate] = useState(productList)
const {itemId} = useParams()
const {cart, addItem, isInCart, addSameItem} = useContext(CartContext);
let index = cart.findIndex(elem => elem.id == itemId)



const updateStockPlus = (quantity) => {
    let modifiedQuantity = stockUpdate[+itemId - 1].stock += quantity;
    stockUpdate[+itemId - 1].stock = modifiedQuantity;
    setStockUpdate([...stockUpdate]);
};

const updateStockMinus = (quantity) => {
    let modifiedQuantity = stockUpdate[+itemId - 1].stock -= quantity
    stockUpdate[+itemId - 1].stock = modifiedQuantity;
    setStockUpdate([...stockUpdate]);
};

const saveItems = (obj) => {
    setSavedCartItems(obj)

    
        if(!isInCart(itemId)){
            addItem(obj);
    
        }else{
            //console.log(index)
            let totalQuantity = obj.quantity + cart[index].quantity
            obj.quantity = totalQuantity;
            addSameItem(index, obj);
        }
}

const getProducts = new Promise ((resolve, reject)=>{
    let condition = true 
    if (condition){
        setTimeout(()=>{
            resolve(productList)
        }, 2000);
    } else {
        reject ("Error!")
    }
})

useEffect (()=>{
    setLoading (true)
    getProducts.then(response=>setItem(response.find((prod => prod.id == itemId)))).catch(error=>console.log(error)).finally(()=>{setLoading(false)})
},[itemId])

console.log(cart)
    return (
        <>
        {loading 
        ? <h2 className='text-center font-semibold text-green-500 text-xl p-16 mt-16'>Loading...</h2>
        : 
        <div>
            {<ItemDetail item={item}/>}
            <ItemCount saveItems={saveItems} item={item} updateStockPlus={updateStockPlus} updateStockMinus={updateStockMinus}/>        
        </div>}
        </>
    )
}

export default ItemDetailContainer 