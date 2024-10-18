import './App.css';
import Navbar from './Components/Navbar';
import ItemListContainerInicio from './Components/Home/ItemListContainerInicio';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './Components/Product/ItemListContainer';
import ItemDetailContainer from './Components/Detail/ItemDetailContainer';
import React from 'react';
import CartProvider from './context/CartContext';
import Cart from './Components/Cart/Cart'
import ListContainer from './Components/firebase-example/ListContainer';




function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar/>
          <h1 className='title'>FERRETERIA ALEJANDRA</h1>
          <Routes>
            <Route path={'/Inicio'} element={<ItemListContainerInicio/>} />
            <Route path={'/Productos'} element={<ItemListContainer/>} />
            <Route path={'/Productos/item/:id'} element={<ItemDetailContainer/>} />
            <Route path={'/cart'} element={<Cart/>} />
            <Route path={'/firebase'} element={<ListContainer/>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
