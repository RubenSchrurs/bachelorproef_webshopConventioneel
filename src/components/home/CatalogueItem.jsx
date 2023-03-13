import '../../css/home/CatalogueItem.scss'

export default function CatalogueItem() {
    return (
        <>
            <button className='releaseLarge'>
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