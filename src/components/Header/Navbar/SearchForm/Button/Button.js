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

    let buttonContentText = props.content ? props.content : "Button";
    let buttonContent;
    if (props.iconOnly) {
        buttonContent = "";
    } else {
        buttonContent = <span className="Button__content">{buttonContentText}</span>
    }

    let buttonIcon = props.icon ? <Icon icon={props.icon}/> : "";
    buttonIcon = props.iconBadge ? <Icon icon={props.icon} sem={props.sem} badge colorInverted/> : buttonIcon;
    buttonIcon = props.out && props.iconBadge ? <Icon icon={props.icon} sem={props.sem} badge transparent/> : buttonIcon;
    buttonIcon = props.iconBadge === "round" ?
        <Icon icon={props.icon} sem={props.sem} badge colorInverted round/> : buttonIcon;
    buttonIcon = props.out && props.iconBadge === "round" ?
        <Icon icon={props.icon} sem={props.sem} badge round  transparent/> : buttonIcon;

    const buttonType = props.type ? props.type : "button";

    const buttonOutline = props.out ? "outline-" : "";
    const buttonSemantic = props.sem ? "btn btn-" + buttonOutline + props.sem : "btn";
    const buttonSize = props.size ? " btn-" + props.size : "";

    let buttonForm = "";
    buttonForm = props.btnForm === "square" ? " Btn_square" : buttonForm;
    buttonForm = props.btnForm === "round" ? " Btn_round" : buttonForm;

    let buttonClass = buttonSemantic;
    if (props.icon) {
        buttonClass += " Btn_icon"
    }
    if (props.iconOnly) {
        buttonClass += " Btn_icon-only"
    }
    if (props.iconBadge) {
        buttonClass += " Btn_icon-badge"
    }
    buttonClass += buttonSize + buttonForm;

    return (
        <button className={buttonClass} type={buttonType} disabled={props.disabled}>{buttonIcon}{buttonContent}</button>
    )
}

export default Button;
