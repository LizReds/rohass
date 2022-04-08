import React, {useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { CartContext } from './CartContext';
import ItemCount from './ItemCount';
import ItemDetail from './ItemDetail';
import { stock } from './stock';
import { getOneProductData } from '../utils/getData';
import { updateDoc, doc, getDoc } from 'firebase/firestore';
import { db } from '../utils/firebase';

const ItemDetailContainer = () => {
const [item, setItem] = useState([]);
const [loading, setLoading] = useState (false)
const [savedCartItems, setSavedCartItems] = useState ({})
const productList = item;
const [stockUpdate, setStockUpdate] = useState(productList)
const {itemId} = useParams()
const {cart, addItem, isInCart, addSameItem} = useContext(CartContext);
let index = cart.findIndex(elem => elem.id == itemId)


useEffect (()=>{
    setLoading (true)
    getOneProductData(itemId).then(response=>setItem(response))
    .finally(()=>{setLoading(false)})
    
},[itemId])


const updateStockPlus = async(id) => {
    const query = doc(db, 'items', id)
    const response = await getDoc(query);
    const dataItem = response.data();
    updateDoc (query, {...dataItem, stock: dataItem.stock + 1})
    let modifiedQuantity = stockUpdate.stock += 1;
    stockUpdate.stock = modifiedQuantity;
    setStockUpdate([...stockUpdate]);
    
}
const updateStockMinus = async(id) => {
    const query = doc(db, 'items', id)
    const response = await getDoc(query);
    const dataItem = response.data();
    updateDoc (query, {...dataItem, stock: dataItem.stock - 1})
    let modifiedQuantity = stockUpdate.stock -= 1;
    stockUpdate.stock = modifiedQuantity;
    setStockUpdate([...stockUpdate]);
    
}

/* const updateStockPlus = (quantity) => {
    let modifiedQuantity = stockUpdate[+itemId - 1].stock += quantity;
    stockUpdate[+itemId - 1].stock = modifiedQuantity;
    setStockUpdate([...stockUpdate]);
};

const updateStockMinus = (quantity) => {
    let modifiedQuantity = stockUpdate[+itemId - 1].stock -= quantity
    stockUpdate[+itemId - 1].stock = modifiedQuantity;
    setStockUpdate([...stockUpdate]);
}; */

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

/* const getProducts = new Promise ((resolve, reject)=>{
    let condition = true 
    if (condition){
        setTimeout(()=>{
            resolve(productList)
        }, 2000);
    } else {
        reject ("Error!")
    }
}) */



console.log('item actualizado', productList)
console.log('item actualizado', stockUpdate)
    return (
        <>
        {loading 
        ? <h2 className='text-center font-semibold text-green-500 text-xl p-16 mt-16'>Loading...</h2>
        : 
        <div>
            {<ItemDetail item={item}/>}
            <ItemCount saveItems={saveItems} item={item} updateStockPlus={updateStockPlus} updateStockMinus={updateStockMinus} cart={cart}/>        
        </div>}
        </>
    )
}

export default ItemDetailContainer 