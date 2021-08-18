function Button_toggle(props) {

    const buttonIcon = props.icon ? <span className="material-icons">{props.icon}</span> : "";
    const buttonContent = props.content ? props.content : "Button";
    const buttonType = props.type ? props.type : "button";

    const buttonSemantic = props.sem ? "btn btn-" + props.sem : "btn";
    const buttonSize = props.size ? "btn-" + props.size : "";
    const buttonActive = props.active ? "active" : "";
    const buttonClass = buttonSemantic + " " + buttonSize + " " + buttonActive;

    return (
        <button className={buttonClass} type={buttonType} disabled={props.disabled} data-bs-toggle="button" autocomplete="off">{buttonIcon}{buttonContent}</button>
    )
}

export default Button_toggle;
