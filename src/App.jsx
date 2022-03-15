import React from 'react'
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ProductCards from './components/ProductCards';
import ItemCount from './components/ItemCount';


const App = () => {
    return (
    <div>
        <Navbar/>
        <ItemListContainer greeting="¡Hola! Bienvenido a RoHass, aguacates de alta calidad."/>
        {/* <ProductCards/> */}
        <ItemCount/>
    </div>
    )
}

export default App;