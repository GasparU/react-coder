import React from 'react';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
// import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetail from './components/ItemDetail';

function App() {
  
  return (
  <BrowserRouter>
      <NavBar/> 
    <Routes>
      <Route path="/" element={<p>Página de Inicio</p>}/>
      <Route path="/productos" element={<ItemDetailContainer/>}/>
      <Route path="/productos/:id" element={<ItemDetail/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
