import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import Item from "./Item";

const ItemList = () => {
const [productList, setProductList] = useState([]);
const [loading, setLoading] = useState (true)
const parameters = useParams()
const products = [
    {id:"01", 
    name:"Aguacate Hass", 
    description:"Aguacate Hass seleccionado. Caja x10 unidades", 
    img:"https://cdn.pixabay.com/photo/2016/03/05/19/03/appetite-1238257_960_720.jpg"
},
    {id:"02", 
    name:"Aguacate Lorena", 
    description:"Aguacate Lorena seleccionado. Caja x10 unidades", 
    img: "https://cdn.pixabay.com/photo/2017/03/31/18/35/avocado-2192116_960_720.jpg"
},
    {id:"03", 
    name:"Aguacate Guatemalteco", 
    description:"Aguacate Guatemalteco seleccionado. Caja x10 unidades", 
    img: "https://cdn.pixabay.com/photo/2020/07/09/20/22/avocados-5388669_960_720.jpg"
}
]

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