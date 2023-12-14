import Search from './Search'
import Filter from './Filter'
import Cards from './Cards'
import '../styles/Home.css'

function Home() {
    return (
        <div>
            <div className='home-desktop-wrap'>
                <Search />
                <Filter />
            </div>
            <Cards />
        </div>
    )
}

export default Home