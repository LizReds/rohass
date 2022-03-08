import React from 'react'

export const ItemListContainer = ({greeting}) => {
    return (
    <h1 className='m-5 flex justify-center italic text-green-700 font-medium text-lg'>
        {greeting}
    </h1> 
    )
};

export default ItemListContainer