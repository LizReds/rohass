import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
    return (
        <div className="bg-gray-100 container flex">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 ">
                <div className="max-w-2xl mx-auto  lg:max-w-none">
                    <div className="mt-4 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                    </div>
                        <div className="card justify-center">
                            <div className="group relative">
                                <div className="relative w-80 h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                    <img src={props.product.img} alt={props.product.name} className="w-full h-full object-center object-cover"/>
                                </div>
                                <h3 className="text-center mt-6 text-sm text-gray-500">
                                    <span className="absolute inset-0"></span>
                                    {props.product.name}
                                </h3>
                            </div>
                        </div>
                    <Link to= {`/productDetail/${props.product.id}`} >
                        <button className="container  min-w-xs place-items-center bg-green-300 p-2 rounded text-green-600 font-semibold hover:bg-green-400">Ver más</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Item