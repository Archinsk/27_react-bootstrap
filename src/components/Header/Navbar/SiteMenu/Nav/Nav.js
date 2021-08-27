import NavItem from "./__NavItem/__NavItem";
import Dropdown from "./Dropdown/Dropdown";

function Nav(props) {
    let navItems = props.navItems ? props.navItems : ["Item_1", "Item_2", {title: "Item_3", content: ["Item_4", "Item_5", "Item_6"]}, "Item_7", "Item_8"];
    let navClass = "nav";
    if (props.pos === "center") {
        navClass += " justify-content-center"
    } else if (props.pos === "right") {
        navClass += " justify-content-end"
    }
    if (props.vertical) {
        navClass += " flex-column"
    }
    if (props.type === "tabs") {
        navClass += " nav-tabs"
    } else if (props.type === "pills") {
        navClass += " nav-pills"
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