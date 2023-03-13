import Catalogue from './home/Catalogue'
import Filters from './home/Filters'
import Trending from './home/Trending'

import '../css/Home.scss'

export default function Home () {
  return (
    <>
        <div className='homeWrapper'>
            <Filters/>
            <Catalogue/>
            <Trending/>
        </div>
    </>
  )
}