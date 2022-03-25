import React from 'react'
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import { Cart } from './components/Cart';


const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<ItemListContainer greeting="¡Hola! Bienvenido a RoHass, aguacates de alta calidad."/>}/>
                    <Route path="/productDetail/:itemId" element={<ItemDetailContainer />}/>
                    <Route path="*" element={<Navigate to="/"/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;