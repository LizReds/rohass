import React from 'react'
import ItemList from './ItemList';

const ItemListContainer = ({greeting}) => {
    return (
        <div>    
            <h1 className='m-5 flex justify-center italic text-green-700 font-medium text-lg'>
                {greeting}
            </h1> 
            <h2 className="text-2xl font-semibold text-gray-900">Nuestros Productos</h2>
            <ItemList/>
        </div>
    )
};

export default ItemListContainer