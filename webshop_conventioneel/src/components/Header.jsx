import '../css/Header.scss'

export default function Header() {
    return (
        <>
            <header>
                <div className="logo">
                    <button>
                        <p>LOGO</p>
                    </button>
                </div>
                <div className="cart">
                    <button>
                        <p>CART</p>
                    </button>
                </div>
            </header>
        </>
    )
}