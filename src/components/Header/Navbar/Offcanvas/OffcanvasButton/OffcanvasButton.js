import Button from "../../SearchForm/Button/Button";

function OffcanvasButton (props) {
    return (
        <Button content="Меню" sem="secondary" out icon="menu" iconOnly btnInvis="lg" btnForm="square" action="offcanvas" targetId={props.targetId}/>
    )
}

export default OffcanvasButton;