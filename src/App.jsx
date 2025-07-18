
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import './App.css'
import data from './mokData'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import Header from './components/Header'

function App() {
  const [fruit, setFruit] = useState(data)
 

  return (
      <div>
        <Header />
        
        <Routes>
          <Route path='/' element={<h1>{<MainPage fruit={fruit}/>}</h1>} />
          <Route path='/test' element={<h1>테스트페이지</h1>}/>
        </Routes>
        {/* 배경이미지 넣음 */}
    
      </div>
  )
}

export default App
