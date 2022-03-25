import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
const [item, setItem] = useState([]);
const [loading, setLoading] = useState (false)
const [savedCartItems, setSavedCartItems] = useState ({})
const {itemId} = useParams()
const productList = [
    {id:"01", name:"Aguacate Hass", description:"Aguacate Hass seleccionado. Caja x10 unidades", img:"https://cdn.pixabay.com/photo/2016/03/05/19/03/appetite-1238257_960_720.jpg", price:"12.000 COP"},
    {id:"02", name:"Aguacate Lorena", description:"Aguacate Lorena seleccionado. Caja x10 unidades", img: "https://cdn.pixabay.com/photo/2017/03/31/18/35/avocado-2192116_960_720.jpg", price:"20.000 COP"},
    {id:"03", name:"Aguacate Guatemalteco", description:"Aguacate Guatemalteco seleccionado. Caja x10 unidades", img: "https://cdn.pixabay.com/photo/2020/07/09/20/22/avocados-5388669_960_720.jpg", price:"15.000 COP"}
]


const saveItems = (obj) => {
    setSavedCartItems(obj)
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

console.log(savedCartItems)
    return (
        <>
        {loading 
        ? <h2 className='text-center font-semibold text-green-500 text-xl p-16 mt-16'>Loading...</h2>
        : 
        <div>
            {<ItemDetail item={item}/>}
            <ItemCount saveItems={saveItems}/>        
        </div>}
        </>
    )
}

export default ItemDetailContainer 