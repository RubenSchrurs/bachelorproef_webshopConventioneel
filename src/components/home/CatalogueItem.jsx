import '../../css/home/CatalogueItem.scss'
import React, { useCallback } from 'react'
import { useNavigate } from 'react-router'


export default function CatalogueItem() {
    const navigate = useNavigate()

    const handleCatalogueItem = useCallback(() => {
      navigate(`/details`)
    }, [navigate])

    return (
        <>
            <button className='releaseLarge' onClick={handleCatalogueItem}>
                <div className='releaseCoverArt'></div>
                <div className='releaseDescription'>
                    <div className='releaseInfo'>
                        <div className='releaseTitle'>
                            <h5>ReleaseTitle</h5>
                        </div>
                        <div className='releaseNameAndPrice'>
                            <h6 className='releaseName'>ArtistName</h6>
                            <h5 className='releasePrice'>€ 15,00</h5>
                        </div>
                    </div>
                </div>
            </button>
        </>
    )
}