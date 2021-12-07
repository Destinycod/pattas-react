import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'

function App() {

    const minimo = 1;
    const stock = 5;


  return (
    <div className="App">
        <header className="App-header">
            <NavBar/>  
        </header>
        <ItemListContainer greetings = "soy el greeting" />
        <ItemCount minimo={minimo} stock={stock}/>
    </div>
  )
}

export default App
