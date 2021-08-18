import AccordionHeader from "./__AccordionHeader/AccordionHeader";
import AccordionCollapse from "./__AccordionCollapse/__AccordionCollapse";

function AccordionItem(props) {
    let accordionHeader = <AccordionHeader/>;
    let accordionCollapse = <AccordionCollapse/>;

    if (props.title) {
        accordionHeader = <AccordionHeader title={props.title}/>
    }
    if (props.listItems) {
        accordionCollapse = <AccordionCollapse listItems={props.listItems}/>
    }

    return (
        <div className="accordion-item">
            {accordionHeader}
            {accordionCollapse}
        </div>
    )
}

export default AccordionItem;