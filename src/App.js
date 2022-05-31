import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
   <React.Fragment>
    <div >
      <NavBar/>
    </div>
      <ItemListContainer greeting={"SALUDO DE APP"}/>
   </React.Fragment>

    
  );
}

export default App;
