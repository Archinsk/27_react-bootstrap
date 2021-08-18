import DropdownItem from "./__DropdownItem/__DropdownItem";

function DropdownMenu() {
    return (
        <ul className="dropdown-menu">
            <DropdownItem content="Все меры поддержки"/>
            <DropdownItem content="Юридическим лицам"/>
            <DropdownItem content="Индивидуальным предпринимателям"/>
            <li>
                <hr className="dropdown-divider"/>
            </li>
            <DropdownItem content="Физическим лицам"/>
        </ul>
    )
}

export default DropdownMenu;