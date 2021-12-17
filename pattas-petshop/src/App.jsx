import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartWidget from './components/CartWidget';

function App() {
  // const minimo = 1;
  // const stock = 5;
  return (
    <div className="App">
      <BrowserRouter>
        {/* <header className="App-header"> */}
            <NavBar/>  
        {/*</header> */}
        <center>
          <Routes>
            <Route exact path="/"
            element={ <ItemListContainer greetings = "soy el greeting" /> } 
            />
            <Route exact path="/carrito"
            element={ <CartWidget /> } 
            />
            <Route exact path="/detalle/:idItem"
            element={ <ItemDetailContainer /> } 
            />
            <Route exact path="/categoria/:idCategoria"
            element={ <ItemListContainer greetings = "soy el greeting de categoria" /> } 
            />
          </Routes>
          {/* <ItemCount minimo={minimo} stock={stock}/> */}
         </center>
      </BrowserRouter>
    </div>
  )
}

export default App
