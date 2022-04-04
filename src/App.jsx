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
import { CartProvider } from './components/CartContext';

const App = () => {

    return (
        <CartProvider> 
            <BrowserRouter>
                <div>
                    <Navbar/>
                        <Routes>
                            <Route path="/" element={<ItemListContainer greeting="¡Hola! Bienvenido a RoHass, productos del campo de alta calidad."/>}/>
                            <Route path="/products/:category" element={<ItemListContainer greeting="¡Hola! Bienvenido a RoHass, productos del campo de alta calidad."/>}/>
                            <Route path="/productDetail/:itemId" element={<ItemDetailContainer />}/>
                            <Route path="*" element={<Navigate to="/"/>}/>
                            <Route path="/cart" element={<Cart/>}/>
                        </Routes>
                </div>
            </BrowserRouter>
        </CartProvider> 
    )
}

export default App;