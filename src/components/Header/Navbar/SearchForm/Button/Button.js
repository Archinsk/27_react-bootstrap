import "./Button.css";
import Button_Offcanvas from "./Button_Offcanvas/Button_Offcanvas";
import Button_toggle from "./Button_action/Button_toggle/Button_toggle";
import Icon from "../Icon/Icon";

function Button(props) {
    if (props.offcanvasId) {
        return <Button_Offcanvas type={props.type} icon={props.icon} title={props.title} style={props.style}
                                 offcanvasId={props.offcanvasId}/>
    }
    if (props.action === "toggle") {
        return <Button_toggle type={props.type} content={props.content} sem={props.sem} out={props.out}
                              size={props.size} icon={props.icon} action="toggle" active={props.active}/>
    }

    // Default settings ----------------
    // Content --------
    let buttonContentText = props.content ? props.content : "Button";
    let buttonContent;
    if (props.iconOnly) {
        buttonContent = "";
    } else {
        buttonContent = <span className="Button__content">{buttonContentText}</span>
    }
    // Icons --------
    let buttonIcon = props.icon ? <Icon icon={props.icon}/> : "";
    buttonIcon = props.iconBadge ? <Icon icon={props.icon} sem={props.sem} badge colorInverted/> : buttonIcon;
    buttonIcon = props.out && props.iconBadge ?
        <Icon icon={props.icon} sem={props.sem} badge transparent/> : buttonIcon;
    buttonIcon = props.iconBadge === "round" ?
        <Icon icon={props.icon} sem={props.sem} badge colorInverted round/> : buttonIcon;
    buttonIcon = props.out && props.iconBadge === "round" ?
        <Icon icon={props.icon} sem={props.sem} badge round transparent/> : buttonIcon;
    // Type --------
    const buttonType = props.type ? props.type : "button";
    // Semantic --------
    const buttonOutline = props.out ? "outline-" : "";
    const buttonSemantic = props.sem ? "Button btn btn-" + buttonOutline + props.sem : "Button btn";
    // Button form --------
    let buttonForm = "";
    buttonForm = props.btnForm === "square" ? "-square" : buttonForm;
    buttonForm = props.btnForm === "round" ? "-round" : buttonForm;
    let buttonClass = buttonSemantic;
    if (props.icon && (props.btnForm || props.iconOnly) ) {
        buttonClass += " Button_icon";
        if (props.iconOnly) {
            buttonClass += "-only" + buttonForm
        }
    }
    // Icons form --------
    let iconForm = "";
    if (props.icon && !props.iconBadge && !props.iconOnly) {
        iconForm += " Button_icon";
    } else {
        if (props.iconBadge) {
            iconForm += " Button_icon-badge";
            if (props.iconBadge === "square") {
                iconForm += "-square"
            }
            if (props.iconBadge === "round") {
                iconForm += "-round"
            }
        }
    }
    buttonClass += iconForm;
    // Size --------
    if (props.size) {
        buttonClass += " btn-" + props.size;
    }

    return (
        <button className={buttonClass} type={buttonType} disabled={props.disabled}>{buttonIcon}{buttonContent}</button>
    )
}

export default Button;
