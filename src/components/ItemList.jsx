import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import Item from "./Item";
import { stock } from './stock';

const ItemList = () => {
const [productList, setProductList] = useState([]);
const [loading, setLoading] = useState (true)
const products = stock;


const getProducts = new Promise ((resolve, reject)=>{
    let condition = true 
    if (condition){
        setTimeout(()=>{
            resolve(products)
        }, 2000);
    } else {
        reject ("Error!")
    }
})

useEffect (()=>{
    setLoading (true)
    getProducts.then(response=>setProductList(response)).catch(error=>console.log(error))
    .finally(()=>{setLoading(false)})
},[])


    return (
        <>
        {
            loading 
            ? <h2 className='text-center font-semibold text-red-500 text-xl p-16 mt-16'>Loading...</h2>
            : 
        <div>
            {productList.map((products)=><Item product={products} key={products.id}/>)}
        </div>
        }
        </>
    )
}

export default ItemList 