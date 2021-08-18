import "./Button.css";
import Button_Offcanvas from "./Button_Offcanvas/Button_Offcanvas";
import Button_toggle from "./Button_action/Button_toggle/Button_toggle";
import Icon from "../Icon/Icon";

function Button(props) {
    if (props.offcanvasId) {
        return <Button_Offcanvas type={props.type} icon={props.icon} title={props.title} style={props.style} offcanvasId={props.offcanvasId}/>
    }
    if (props.action==="toggle") {
        return <Button_toggle type={props.type} content={props.content} sem={props.sem} size={props.size} icon={props.icon} action="toggle" active={props.active}/>
    }
    const buttonIcon = props.icon ? <Icon icon={props.icon} sem="danger" badge round/> : "";
    const buttonContent = props.content ? props.content : "Button";
    const buttonType = props.type ? props.type : "button";
    const buttonSemantic = props.sem ? "btn btn-" + props.sem : "btn";
    const buttonSize = props.size ? "btn-" + props.size : "";
    const buttonClass = buttonSemantic + " " + buttonSize;

    return (
        <button className={buttonClass} type={buttonType} disabled={props.disabled}>{buttonIcon}{buttonContent}</button>
    )
}

export default Button;
