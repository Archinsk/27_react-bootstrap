import DropdownMenu from "./DropdownMenu/DropdownMenu";

function Dropdown() {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
               aria-expanded="false">Меры поддержки</a>
            <DropdownMenu/>
        </li>
    )
}

export default Dropdown;