import ListGroupFlush from "./ListGroupFlush/ListGroupFlush";

function AccordionCollapse(props) {
    let content = "Содержимое аккордеона";
    if (typeof (props.listItems) === "object") {
        content = <ListGroupFlush listItems={props.listItems}/>
    }

    return (
        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne"
             data-bs-parent="#accordionFlushExample">
            <div className="accordion-body nav-link">
                {content}
            </div>
        </div>
    )
}

export default AccordionCollapse;