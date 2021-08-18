function AccordionHeader(props) {
    let title = "Заголовок аккордиона"
    if (props.title) {
        title=props.title;
    }

    return (
        <div className="accordion-header" id="flush-headingOne">
            <a className="list-group-item-action nav-link accordion-button collapsed" data-bs-toggle="collapse"
               href="#flush-collapseOne" role="button" aria-expanded="false" aria-controls="flush-collapseOne">
                {title}
            </a>
        </div>
    )
}

export default AccordionHeader;