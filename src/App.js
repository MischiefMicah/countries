import './styles/App.css';
import Nav from './components/Nav'
import Home from './components/Home'
import CardDetail from './components/CardDetail'
import { SearchContext } from './contexts/SearchContext'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  const [inputTxt, setInputTxt] = useState('')
  const [dropFil, setDropFil] = useState('')
  const [theme, setTheme] = useState('light')

  return (
    <BrowserRouter>
      <div className={`App ${theme === 'light' ? 'lightApp' : 'darkApp'}`}>
        <SearchContext.Provider value={{inputTxt, setInputTxt, dropFil, setDropFil, theme, setTheme}}>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/card/:country' element={<CardDetail />} />
          </Routes>
        </SearchContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
