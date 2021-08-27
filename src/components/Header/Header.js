import Navbar from './Navbar/Navbar';

function Header() {
    return (
        <header className="header bg-light">
            <div className="header__wrapper container">
                <Navbar/>
            </div>
        </header>
    )
}

export default Header;