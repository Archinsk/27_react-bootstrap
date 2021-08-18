import NavItem from "./__NavItem/__NavItem";
import Dropdown from "./Dropdown/Dropdown";

function Nav(props) {
    let navItems = ["Пункт_1", "Пункт_2", {title: "Пункт_3", content: ["Пункт_4", "Пункт_5", "Пункт_6"]}];
    let navClass = "nav";

    if (props.navItems) {
        navItems = props.navItems
    }
    if (props.navbar) {
        navClass = "navbar-nav me-auto mb-2 mb-lg-0"
    }

    const navItemsList = navItems.map((navItem, index) => {
            if (typeof (navItem) === "string") {
                return <NavItem key={index} content={navItem}/>
            } else if (typeof (navItem) === "object") {
                return <Dropdown key={index}/>
            }
        }
    );

    return (
        <ul className={navClass}>
            {navItemsList}
        </ul>
    )
}

export default Nav;