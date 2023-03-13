import '../css/ReleaseDetails.scss'

export default function ReleaseDetails () {
  return (
    <>
        <div className='releaseDetailsWrapper'>
            <div className='releaseDetails'>
                <div className='releaseTitle'>
                    <h2>ReleaseTitle</h2>
                    <h4>ArtistName</h4>
                </div>
                <div className='releaseCoverArtInfoBuyButtonAndDescription'>
                    <div className='releaseCoverArt'></div>
                    <div className='releaseInfoBuyButtonAndDescription'>
                        <div className='releaseInfo'>
                            <div className='releasePriceAndType'>
                                <h4 className='releasePrice'>€ 15,00</h4>
                                <p className='releaseType'>LP</p>
                            </div>
                            <div className='releaseGenres'>
                                <h5>genre</h5>
                                <h5>genre</h5>
                                <h5>genre</h5>
                            </div>
                            <div className='releaseLabelInfo'>
                                <h4 className='labelText'>LABEL</h4>
                                <h4 className='labelName'>LABELNAME</h4>
                            </div>
                        </div>
                        <div className='buyButton'>
                            <h2>ADD TO CART</h2>
                            <img src="../images/icons/cart.svg" alt="cartIcon" />
                        </div>
                        <div className='releaseDescription'>
                            <h2>Description</h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}