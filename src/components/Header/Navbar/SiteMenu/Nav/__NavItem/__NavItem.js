import React from "react";

function NavItem(props) {
    const itemContent = props.content ? props.content : "Item";
    const itemLink = props.href ? props.href : "#";
    let linkClass = "nav-link";
    linkClass += props.type !== "li" ? " Nav__item" : "";
    if (props.active) {
        linkClass += " active"
    }
    if (props.disabled) {
        linkClass += " disabled"
    }
    let navLink = <a className={linkClass} href={itemLink}>{itemContent}</a>;
    if (props.active) {
        navLink = <a className={linkClass} aria-current="page" href={itemLink}>{itemContent}</a>
        if (props.disabled) {
            navLink = <a className={linkClass} aria-current="page" href={itemLink} tabIndex="-1"
                         aria-disabled="true">{itemContent}</a>
        }
    } else if (props.disabled) {
        navLink = <a className={linkClass} href={itemLink} tabIndex="-1" aria-disabled="true">{itemContent}</a>
    }

    if (props.type === "li") {
        return (
            <li className="Nav__item nav-item">
                {navLink}
            </li>
        )
    } else {
        return navLink
    }
}

export default NavItem;