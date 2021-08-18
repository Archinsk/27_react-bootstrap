function DropdownItem(props) {
    let itemContent = "Пункт"
    if (props.content) {
        itemContent = props.content;
    }
    return (
        <li>
            <a className="dropdown-item" href="#">{itemContent}</a>
        </li>
    )
}

export default DropdownItem;