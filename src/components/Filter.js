import '../styles/Filter.css'
import downSvg from '../styles/icons/chevron-down-outline.svg'
import { SearchContext } from '../contexts/SearchContext'
import { useContext } from 'react'

function Filter() {

    const {dropFil, setDropFil, theme} = useContext(SearchContext)

    const dropDwnFunc = () => {
        const dropDwn = document.querySelector(".dropDwn")
        if (dropDwn.classList.contains("show")) {
            dropDwn.classList.remove("show")
        } else {
            dropDwn.classList.add("show")
        }
    }

    const liClickHandler = (e) =>{
        if (e.currentTarget.classList.contains('liBlue')) {
            document.querySelectorAll('ul.dropDwn > li').forEach((li) => li.classList.remove('liBlue'))
            setDropFil('')
        } else {
            document.querySelectorAll('ul.dropDwn > li').forEach((li) => li.classList.remove('liBlue'))
            e.currentTarget.classList.add('liBlue')
            setDropFil(e.currentTarget.innerHTML.toLowerCase())
        }
    }

    console.log(dropFil)

    const regions = ['Africa','America','Asia','Europe','Oceania']
    const liBuild = regions.map((region, key) => {
        return <li className={`${region.toLowerCase() === dropFil ? 'liBlue' : ''}`} key={key} onClick={liClickHandler}>{region}</li>
    })
    
    return (
        <div className='Filter'>
            <button className={`${theme === 'light' ? 'light' : 'darkFilter'}`} onClick={dropDwnFunc}>Filter by Region<img src={downSvg} alt='Drop down arrow'></img></button>
            <ul className={`dropDwn ${theme === 'light' ? 'light' : 'dark'}`}>
                {liBuild}
            </ul>
        </div>
    )
}

export default Filter