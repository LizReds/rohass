import React from 'react'
import ItemCount from './ItemCount'
export const ProductCards = () => {
    return (

    <div className="bg-gray-100">
    <div className=" max-w-7xl mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto  lg:max-w-none">
        <h2 className="text-2xl font-semibold text-gray-900">Nuestros Productos</h2>

        <div className="mt-4 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">

            {/*Product 1*/}
            <div className="group relative hidden">
            <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <img src="https://cdn.pixabay.com/photo/2016/03/05/19/03/appetite-1238257_960_720.jpg" alt="Aguacate Hass maduro cortado a la mitad" className="w-full h-full object-center object-cover"/>
            </div>
            <h3 className="mt-6 text-sm text-gray-500">
                <a href="#">
                <span className="absolute inset-0"></span>
                Aguacate Hass
                </a>
            </h3>
            <p className="text-base font-semibold text-gray-900">Caja x10 unidades</p>
            </div>

            {/*Product 2*/}
            <div className="group relative hidden">
            <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <img src="https://cdn.pixabay.com/photo/2017/03/31/18/35/avocado-2192116_960_720.jpg" alt="Aguacate Lorena en el arbol" className="w-full h-full object-center object-cover"/>
            </div>

            <h3 className="mt-6 text-sm text-gray-500">
                <a href="#">
                <span className="absolute inset-0"></span>
                Aguacate Lorena
                </a>
            </h3>
            <p className="text-base font-semibold text-gray-900">Caja x10 unidades</p>
            </div>

            {/*Product 3*/}
            <div className="group relative hidden">
            <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <img src="https://cdn.pixabay.com/photo/2020/07/09/20/22/avocados-5388669_960_720.jpg" alt="Aguacates Guatemaltecos sobre fondo blanco, uno cortado a la mitad" className="w-full h-full object-center object-cover"/>
            </div>
            <h3 className="mt-6 text-sm text-gray-500">
                <a href="#">
                <span className="absolute inset-0"></span>
                Aguacate Guatemalteco
                </a>
            </h3>
            <p className="text-base font-semibold text-gray-900">Caja x10 unidades</p>
            </div>
        </div>
        </div>
    </div>
    </div>
    )
}

export default ProductCards