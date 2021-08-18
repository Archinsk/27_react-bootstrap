function ListGroupItem(props) {
    return (
        <li className="nav-item list-group-item">
            <a href="#" className=" nav-link list-group-item-action">{props.content}</a>
        </li>
    )
}

export default ListGroupItem;