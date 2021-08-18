function NavItem(props) {
    let itemContent = "Пункт"
    if (props.content) {
        itemContent = props.content;
    }
    return (
        <li className="nav-item">
            <a className="nav-link" href="#">{itemContent}</a>
        </li>
    )
}

export default NavItem;