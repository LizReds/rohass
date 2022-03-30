import React, { useContext } from 'react'
import { CartContext } from './CartContext'
import { BsFillTrashFill } from 'react-icons/bs'
import { BsCartXFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'


export const Cart = () => {
    const {cart, removeItem, clear, cartTotal} = useContext (CartContext)

    if (cart.length == 0) {
        return (
            <div className='grid place-items-center mt-52'>
                <h2 className='text-2xl font-bold'>No has agregado ningún producto </h2>
                <Link to ="/">
                <button className='rounded bg-red-400 p-2 m-4' >Ir a inicio</button>
                </Link>
            </div>
        )
    }
    return (

        <div className="container text-center bg-gray-200 p-4 mt-4 rounded">
            <h2 className="text-xl p-2 m-10 text-center font-bold">Tus productos</h2>
            {
                cart.map(item => (
                    <div classname=""key={item.id}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 mt-12 place-items-center">
                            <div>
                                <h3 className="font-semibold">{item.name.toUpperCase()}</h3> 
                            </div>
                            <div>
                                <p>Cantidad: {item.quantity}</p>
                            </div>
                            <div>
                                <p>Total: ${+item.price * +item.quantity}</p>
                            </div>
                            <div>
                                <button className="text-gray-100 text-center bg-red-400 rounded p-1" type='button' onClick={removeItem(item)}>
                                    <div className="text-lg">
                                        <BsFillTrashFill/>
                                    </div>
                                </button>
                            </div>             
                        </div>
                    </div>
                ))
            } 
        <div className='grid grid-cols-4 p-4 mt-10'>
            <div className='col-start-3'>
                <h3 className="font-semibold">Total compra: ${cartTotal()}</h3>
            </div>
            
            <div className='col-start-4'>
                <button className="text-gray-100 text-center bg-red-400 rounded p-1 ml-10" type='button' onClick={clear}>
                Vaciar carrito
                <div className=" text-center text-2xl ml-8">
                    <BsCartXFill/>
                </div>
                </button>
            </div>
        </div>              
        </div>
    )
}
