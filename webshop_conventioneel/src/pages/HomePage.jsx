import Header from '../components/Header'
import Footer from '../components/Footer'
import SearchBar from '../components/home/SearchBar'
import Filters from '../components/home/Filters'
import Catalogue from '../components/home/Catalogue'
import Trending from '../components/home/Trending'

export default function HomePage () {
  return (
    <>
      <Header/>
      <SearchBar/>
      <Filters/>
      <Catalogue/>
      <Trending/>
      <Footer/>
    </>
  )
}