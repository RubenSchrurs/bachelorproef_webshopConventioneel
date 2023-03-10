import '../css/Header.scss'

export default function Header() {
    return (
        <>
            <header className='header'>
                <div className="logo">
                    <button className='button'>
                        <p>LOGO</p>
                    </button>
                </div>
                <div className="cart">
                    <button className='button'>
                        <p>CART</p>
                    </button>
                </div>
            </header>
        </>
    )
}