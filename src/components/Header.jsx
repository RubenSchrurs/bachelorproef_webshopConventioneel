import '../css/Header.scss'

export default function Header() {
    return (
        <>
            <header className='header'>
                <div className="logo">
                    <button className='button'>
                        <p>STATIC</p>
                    </button>
                </div>
                <div className="cart">
                    <button className='button'>
                        <img src="../images/icons/cart.svg" alt="cartIcon" />
                    </button>
                </div>
            </header>
        </>
    )
}