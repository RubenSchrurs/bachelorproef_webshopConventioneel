import '../../css/home/Filter.scss'

export default function Filters({ genreName }) {    
    return (
        <>
            <div className="filter">
                <button>
                    <p>{genreName}</p>
                </button>
            </div>
        </>
    )
}