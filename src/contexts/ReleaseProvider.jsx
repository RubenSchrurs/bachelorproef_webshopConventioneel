import { useContext, useCallback, useState, createContext, useMemo } from "react"
// import * as releaseAPI from '../api/release'

export const ReleaseContext = createContext()
export const useReleases = () => useContext(ReleaseContext)

export const ReleaseProvider = ({children}) => {
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)
  const [releases, setReleases] = useState({})
  const [genres, setGenres] = useState([])

  const getAllReleases = useCallback( async (albumID) => {
    try {
      
    //   const data = await releaseAPI.getAllReleases(albumID)
        const data = []
        setReleases(data)
        setError('')
    } catch (error) {
        setError(error)
    } finally{
        setLoading(false)
    }
  }, [])

  // Temporary
  const getAllGenres = useCallback( () => {
    try {
            const data = [
                'Ambient',
                'Blues',
                'Classical Music',
                'Country',
                'Dance',
                'Electronic',
                'Experimental',
                'Folk',
                'Hip Hop',
                'Industrial',
                'Jazz',
                'Metal',
                'New Age',
                'Pop',
                'Psychedelia',
                'Punk',
                'R&B',
                'Rock',
                'Singer-Songwriter',
                'Ska',
                'Spoken Word'
                ]
            setGenres(data)
            setError('')
        } catch (error) {
            setError(error)
        } finally{
            setLoading(false)
        }
  })

  const value = useMemo(() => ({
    error,
    loading,
    releases,
    getAllReleases,
    genres,
    getAllGenres
  }), [
    error,
    loading,
    releases,
    getAllReleases,
    genres,
    getAllGenres
  ]
  )

  return (
    <ReleaseContext.Provider value={value}>{children}</ReleaseContext.Provider>
  )
}