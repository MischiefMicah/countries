import { useContext } from 'react'
import { SearchContext } from '../contexts/SearchContext'
import { useLocation, useNavigate} from 'react-router-dom'
import '../styles/CardDetail.css'
import backSVG from '../styles/icons/arrow-back-outline.svg'

function CardDetail() {
    let navigate = useNavigate()
    const location = useLocation()
    const data = location.state.data
    const allData = location.state.allData
    const {theme} = useContext(SearchContext)
    const mapData = (arg) => {
        return (
            arg.map((x, i, arr) => {
                if (i + 1 === arr.length) {
                    return x.name
                } else {
                    return `${x.name}, `
                }
            }))
    }
    const numCommas = (arg) => {
        return arg.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const deBorders = (borders, data) => {
        return (
            <div className='deBorder'>
                <h2>Border Countries:</h2>
                <ul className={`borderList ${theme === 'light' ? 'lightBorderList' : 'darkBorderList'}`}>
                    {
                    borders.map((code) => {
                        return data.map((country, key) => {
                            if (country.alpha3Code === code) {
                                return <li key={key} onClick={() => navigate(`/card/${country.name}`, {state: {data:country, allData:allData}})}>{country.name}</li>
                            }
                        })
                    })
                    }
                </ul>
            </div>
        )
    }
    return (
        <div className={`CardDetail ${theme === 'light' ? 'lightCardDetail' : 'darkCardDetail'}`}>
            <button className={`${theme === 'light' ? 'light' : 'darkButton'}`} onClick={() => {navigate('/')}}><img src={backSVG} alt='Back arrow'/>Back</button>
            <div className='desktop-main-wrap'>
                <div className='deFlag'><img  src={data.flags.svg} alt={`${data.name}'s' flag`}/></div>
                <div className='desktop-details-wrap'>
                    <div className='deTop'>
                        <div className='deName'>{data.name}</div>
                        <div className='deNatName'>Native Name: <span>{data.nativeName}</span></div>
                        <div className='dePop'>Population: <span>{numCommas(data.population)}</span></div>
                        <div className='deReg'>Region: <span>{data.region}</span></div>
                        <div className='deSubReg'>Sub Region: <span>{data.subregion}</span></div>
                        <div className='deCap'>Capital: <span>{data.capital}</span></div>
                    </div>
                    <div className='deBot'>
                        <div className='deDom'>Top Level Domain: <span>{data.topLevelDomain}</span></div>
                        <div className='deCurr'>Currencies: <span>{mapData(data.currencies)}</span></div>
                        <div className='deLang'>Languages: <span>{mapData(data.languages)}</span></div>
                    </div>
                    {data.borders === undefined ? console.log('no borders') : deBorders(data.borders, allData)}
                </div>
            </div>
        </div>
    )
}

export default CardDetail