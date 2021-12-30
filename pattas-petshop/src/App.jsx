import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ItemListContainer from './components/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContent from './components/CartContent/CartContent';
import CartContextProvider from './context/CartContext/CartContext';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          {/* <header className="App-header"> */}
              {/* <NavBar/>  */}
          {/*</header> */}
          <Header/>
          <center>
            <Routes>
              <Route exact path="/"
              element={ <ItemListContainer/> } 
              />
              <Route exact path="/carrito"
              element={ <CartContent /> } 
              />
              <Route exact path="/detalle/:idItem"
              element={ <ItemDetailContainer /> } 
              />
              <Route exact path="/categoria/:idCategoria"
              element={ <ItemListContainer /> } 
              />
            </Routes>
          </center>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  )
}

export default App
