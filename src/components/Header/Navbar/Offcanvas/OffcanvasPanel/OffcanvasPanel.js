import OffcanvasBody from "./__OffcanvasBody/__OffcanvasBody";
import OffcanvasHeader from "./__OffcanvasHeader/__OffcanvasHeader";

function OffcanvasPanel(props) {
    const label = props.id + "Label";
    let panelPosition = " offcanvas-start";
    switch (props.pos) {
        case "top" :
            panelPosition = " offcanvas-top";
            break;
        case "right" :
            panelPosition = " offcanvas-end";
            break;
        case "bottom" :
            panelPosition = " offcanvas-bottom";
            break;
        default:
            panelPosition = " offcanvas-start";
            break;
    }
    const panelClass = "offcanvas" + panelPosition;
    return (
        <div className={panelClass} tabIndex="-1" id={props.id}
             aria-labelledby={label}>
            <OffcanvasHeader/>
            <OffcanvasBody/>
        </div>
    )
}

export default OffcanvasPanel;