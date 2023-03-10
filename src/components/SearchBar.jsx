import { useState } from 'react';
import '../css/SearchBar.scss'

export default function SearchBar() {
    const [searchInput, setSearchInput] = useState("")
    const [releases, setReleases] = useState([])

    const handleChange = (e) => {
        e.preventDefault()
        setSearchInput(e.target.value)
      };
      
      if (searchInput.length > 0) {
          releases.filter((release) => {
          return release.name.match(searchInput)
      });
      }

    return (
        <>
            <div className="searchBar">
                <div className="searchField">
                    <input
                    type="text"
                    placeholder="Search"
                    onChange={handleChange}
                    value={searchInput} />
                </div>
                <div className="icon">
                    <img src="../../images/icons/find.svg" alt="findIcon" />
                </div>
            </div>
        </>
    )
}