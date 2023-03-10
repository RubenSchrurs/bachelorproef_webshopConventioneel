import Catalogue from './home/Catalogue'
import Filters from './home/Filters'
import SearchBar from './home/SearchBar'
import Trending from './home/Trending'

import '../css/Home.scss'

export default function HomePage () {
  return (
    <>
        <div className='homeWrapper'>
            <SearchBar/>
            <Filters/>
            <Catalogue/>
            <Trending/>
        </div>
    </>
  )
}