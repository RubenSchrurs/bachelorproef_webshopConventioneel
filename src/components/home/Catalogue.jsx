import '../../css/home/Catalogue.scss'
import CatalogueItem from './CatalogueItem'

export default function Catalogue() {
    return (
        <>
            <div className="catalogue">
                <h2>Catalogue</h2>
                <div className='catalogueReleases'>
                    <CatalogueItem/>
                    <CatalogueItem/>
                    <CatalogueItem/>
                    <CatalogueItem/>
                </div>
            </div>
        </>
    )
}