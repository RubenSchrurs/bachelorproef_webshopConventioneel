import '../../css/home/Filters.scss'
import { useEffect } from 'react';
import { useReleases } from '../../contexts/ReleaseProvider'
import Filter from './Filter'

export default function Filters() {
    const { genres, getAllGenres } = useReleases()

    // Add dependency causes infinite loop
    useEffect(() => {
        try {
          getAllGenres()
        } catch (error) {
          console.error(error)
        }
      }, [])
    
    return (
        <>
            <div className="filters">
                {  genres?.map((genre) =>
                  <Filter genreName={genre} key={Math.random() * 10}/>
                )}
            </div>
        </>
    )
}