import React from 'react'
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';


const App = () => {
    return (
    <div>
        <Navbar />
        <ItemListContainer greeting="¡Hola! Bienvenido a RoHass, aguacates de alta calidad."/>
    </div>
    )
}

export default App;