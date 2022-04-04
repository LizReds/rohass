import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import Item from "./Item";
import { stock } from './stock';
import { getAllData } from '../utils/getData';

const ItemList = () => {
const [productList, setProductList] = useState([]);
const [loading, setLoading] = useState (true)
const products = stock;
const {category} = useParams()

/* const getProducts = new Promise ((resolve, reject)=>{
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
    getProducts.then(response=>{
        if(!category){
            setProductList(response)
        }else{
            setProductList(response.filter(x => x.category == category))
        }
        }).catch(error=>console.log(error))
    .finally(()=>{setLoading(false)})
},[category]) */



//Consumiendo desde base de datos:
useEffect(() => {
    getAllData().then(response => {
        setLoading(true)
        if(!category){
            setProductList(response)
        console.log(response)
        }else{
            setProductList(response.filter(x => x.category == category))
        }
    })
    .finally(() => {
        setLoading(false)
    })
}, [category])



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