import Button_Offcanvas from "./Button_Offcanvas/Button_Offcanvas";

function Button(props) {
    if (props.offcanvasId) {
        return <Button_Offcanvas type={props.type} icon={props.icon} title={props.title} style={props.style} offcanvasId={props.offcanvasId}/>
    }
    const buttonIcon = props.icon ? <span className="material-icons">{props.icon}</span> : "";
    const buttonTitle = props.title ? props.title : "Button";
    const buttonType = props.type ? props.type : "button";
    const buttonSemantic = props.sem ? "btn btn-" + props.sem : "btn";
    const buttonSize = props.size ? "btn-" + props.size : "";
    const buttonClass = buttonSemantic + " " + buttonSize;
    // const buttonDisabled = props.disabled ? "btn-" + props.size : "";

    return (
        <button className={buttonClass} type={buttonType} disabled={props.disabled}>{buttonIcon}{buttonTitle}</button>
    )
}

export default Button;
