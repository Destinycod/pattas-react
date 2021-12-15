import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

    const minimo = 1;
    const stock = 5;


  return (
    <div className="App">
      {/*<BrowserRouter>
        <header className="App-header">
            <NavBar/>  
        </header>
        <Routes>
          <Route exact path="/"
          element { <ItemListContainer greetings = "soy el greeting" /> } />
        </Routes>
        <ItemCount minimo={minimo} stock={stock}/>
      <BrowserRouter/>*/}
      <NavBar />
      <center>
        <ItemListContainer greetings = "soy el greeting" />
        <ItemDetailContainer />
      </center>
    </div>
  )
}

export default App
