import countData from '../data.json'
import '../styles/Cards.css'
import { useContext } from 'react'
import { SearchContext } from '../contexts/SearchContext'
import { useNavigate, useParams } from 'react-router-dom'



function Cards() {

    let navigate = useNavigate()
    let {} = useParams()
    const {inputTxt, dropFil, theme} = useContext(SearchContext)

    function numCommas (arg){
        return arg.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    const filterData = countData.filter((country) => {
        if (dropFil === '') {
            if (inputTxt === '') {
                return country
            } else {
                return country.name.toLowerCase().includes(inputTxt)
            }
        } else {
            if (inputTxt === '') {
                return country.region.toLowerCase().includes(dropFil)
            } else if (country.name.toLowerCase().includes(inputTxt) && country.region.toLowerCase().includes(dropFil)){
                return country
            }
        }
    })

    return (
        <div>
            <div className="cardsContainer">
                {filterData.map((data, key) => {
                    return (
                        <div className={`card ${theme === 'light' ? 'light' : 'dark'}`} key={key} onClick={() => {
                                navigate(`/card/${data.name}`, {state: {data:data, allData:countData}})
                            }}>
                            <div className="cardFlag">
                                <img src={data.flags.svg} alt="Country's flag"></img>
                            </div>
                            <div className="cardName">
                                {data.name}
                            </div>
                            <div className="cardPop">
                                Population: <span>{numCommas(data.population)}</span>
                            </div>
                            <div className="cardReg">
                                Region: <span>{data.region}</span>
                            </div>
                            <div className="cardCap">
                                Capital: <span>{data.capital}</span>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Cards