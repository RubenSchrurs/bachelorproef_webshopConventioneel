import '../../css/home/Trending.scss'
import TrendingItem from './TrendingItem'

export default function Trending() {
    return (
        <>
            <div className="trending">
                <h2>Trending</h2>
                <div className='trendingList'>
                    <TrendingItem/>
                    <TrendingItem/>
                    <TrendingItem/>
                    <TrendingItem/>
                    <TrendingItem/>
                    <TrendingItem/>
                    <TrendingItem/>
                    <TrendingItem/>
                    <TrendingItem/>
                    <TrendingItem/>
                </div>
            </div>
        </>
    )
}