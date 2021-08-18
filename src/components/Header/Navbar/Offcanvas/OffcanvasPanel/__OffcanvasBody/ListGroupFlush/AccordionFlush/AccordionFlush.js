import AccordionItem from "./__AccordionItem/__AccordionItem";

function AccordionFlush(props) {
    let title = "Выпадашка"
    let items = ["Первое", "Второе", "Третье"];
    if (props.content) {
        title = props.content.title;
        items = props.content.content;
    }
    return (
        <li className="nav-item list-group-item">
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <AccordionItem title={title} listItems={items}/>
            </div>
        </li>
    )
}

export default AccordionFlush;