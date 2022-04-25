import React from 'react'

const ItemDetail = (props) => {
    return (
        <div className='container'>
            <h2 className='font-semibold p-2 text-center text-2xl'>{props.item.name}</h2>
            <div >
                <div>
                <img className="container w-min h-80 bg-white rounded-lg overflow-hidden" src={props.item.img} alt={props.item.name} />
                </div>
                <p className='text-center p-2 text-lg'>{props.item.description}</p>
                <p className='text-center p-2 text-lg'>${props.item.price}</p>
            </div>
        </div>
    )
}

export default ItemDetail