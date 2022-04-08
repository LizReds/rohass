import React, { useContext } from 'react'
import { CartContext } from './CartContext'
import { BsFillTrashFill } from 'react-icons/bs'
import { BsCartXFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { addDoc, collection, Timestamp } from 'firebase/firestore'
import { db } from '../utils/firebase'

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

const sendOrder = async (e)=> {
    const orderColletion = collection(db, 'orders')
    e.preventDefault ();
    console.log ('evento-formulario', e)
    const name = e.target[0].value;
    const phone = e.target[1].value;
    const email = e.target[2].value;
    const orderInfo = {
        buyer: {
            name, 
            phone,
            email 
        },
        items: cart,
        date: Timestamp.fromDate(new Date()),
        total: cartTotal()
    }
    console.log('orden', orderInfo)
    const orderRef = await addDoc(orderColletion, orderInfo)
}
    return (
<>
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
        <form className="mt-10 w-full max-w-sm container" onSubmit={sendOrder}>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-2/3">
                    <label className="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Nombre completo
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="bg-green-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" id="inline-phone-number" type="text" placeholder="Ana Diaz"/>
                </div>
            </div>

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-2/3">
                    <label className="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-phone-number">
                        Número de contacto
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="bg-green-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" id="inline-email" type="text" placeholder="3203333333"/>
                </div>
            </div>

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-2/3">
                    <label className="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                        Email
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className ="bg-green-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" id="inline-password" type="email" placeholder="anadiaz@gmail.com"/>
                </div>
            </div>

            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                </div>

                    <div class="md:w-2/3">
                        <button class="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                            Enviar orden
                        </button>
                    
                </div>
            </div>
        </form>
        </div>    
        </>             
    )
}


    <div>
            <form className="w-full max-w-sm">
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className=" text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Nombre
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-green-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" id="inline-full-name" type="text" placeholder='Nombre'/>
                    </div>

                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                            Número de contacto
                        </label>
                        </div>
                        <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-phone-number" type="number" placeholder="Número de contacto"/>
                        </div>
                    </div>

                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold  md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                            Correo electrónico
                        </label>
                        </div>
                        <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-email" type="email" placeholder="Correo electrónico"/>
                        </div>
                    </div>
                    
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3">
                            <div className="md:w-2/3">
                                <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                    Enviar orden
                                </button>
                            </div>
                        </div>
                    </div>

                
                </div>
            </form>   
    </div> 