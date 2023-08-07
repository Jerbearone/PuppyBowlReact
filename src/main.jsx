import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import AllPlayers from './components/AllPlayers.jsx'
import SinglePlayer from './components/SinglePlayer.jsx'
import NavBar from './components/NavBar.jsx'
import NewPlayerForm from './components/NewPlayerForm'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
    <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<AllPlayers></AllPlayers>}/>
        <Route path='/players/:id' element={<SinglePlayer></SinglePlayer>} />
        <Route path='/newPlayer' element={<NewPlayerForm></NewPlayerForm>} />
      </Routes>
    
    </BrowserRouter>

  </React.StrictMode>,
)
