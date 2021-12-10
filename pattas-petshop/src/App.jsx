import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'
import 'bootstrap/dist/css/bootstrap.min.css';
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
      <ItemListContainer greetings = "soy el greeting" />
    </div>
  )
}

export default App
