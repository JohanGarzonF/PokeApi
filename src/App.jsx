import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomeScreen from './components/home/HomeScreen'
import PokedexScreen from './components/pokedex/PokedexScreen'
import LoginProtected from './components/Login/LoginProtected'
import PokeInfo from './components/pokedex/PokeInfo'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeScreen/>}></Route>
        <Route element={<LoginProtected/>}>
          <Route path='/pokedex' element={<PokedexScreen/>}/>
          <Route path='/pokedex/:id' element={<PokeInfo/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
