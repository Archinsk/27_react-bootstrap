import Logo from './Logo/Logo';
import BurgerButton from "./BurgerButton/BurgerButton";
import SiteMenu from './SiteMenu/SiteMenu';
import Account from './Account/Account';
import SearchForm from './SearchForm/SearchForm';
import OffcanvasPanel from "./Offcanvas/OffcanvasPanel/OffcanvasPanel";
import OffcanvasButton from "./Offcanvas/OffcanvasButton/OffcanvasButton";
import './Navbar.css';
import Button from "./SearchForm/Button/Button";

function Navbar() {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <Logo pos="left" href="https://yandex.ru"/>

                    <BurgerButton/>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <SiteMenu/>
                    </div>
                    <div className="d-flex gap-2">
                        <OffcanvasButton targetId="sideBar"/>
                        {/*<Button content="Меню" sem="secondary" out icon="menu" iconOnly btnInvis="lg" btnForm="square" action="offcanvas" targetId="sideBar"/>*/}
                        <OffcanvasPanel id="sideBar" pos="left"/>
                        <Account/>
                        <SearchForm/>
                    </div>
                </div>
            </nav>

        </div>
    )
}


export default Navbar;