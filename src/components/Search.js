import '../styles/Search.css'
import { useContext } from 'react'
import { SearchContext } from '../contexts/SearchContext'


function Search() {
    const {inputTxt, setInputTxt, theme} = useContext(SearchContext)

    function searchChange(e) {
        setInputTxt(e.currentTarget.value.toLowerCase())
    }
    
    return (
        <div className="Search">
            <label htmlFor="searchInput"></label>
            <input className={theme === 'light' ? 'lightSearch' : 'darkSearch'} type="text" placeholder="Search for a country..." name="searchInput" maxLength="50" onChange={searchChange} value={inputTxt !== '' ? inputTxt : ''}></input>
        </div>
    )
}

export default Search