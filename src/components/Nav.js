import '../styles/Nav.css'
import moonSvg from '../styles/icons/moon-outline.svg'
import { useContext } from 'react'
import { SearchContext } from '../contexts/SearchContext'

function Nav() {

    const {theme, setTheme} = useContext(SearchContext)

    return (
    <div className={`Nav ${theme === 'light' ? 'light' : 'dark'}`}>
        <h2>Where in the world?</h2>
        <button className={`${theme === 'light' ? 'light' : 'darkButton'}`} onClick={() => {theme === 'light' ? setTheme('dark') : setTheme('light') }}><img src={moonSvg} alt="Dark Mode Icon"/> Dark Mode</button>
    </div>
)
}

export default Nav