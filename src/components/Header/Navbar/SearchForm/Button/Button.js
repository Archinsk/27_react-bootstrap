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
        // Content display --------
        if (props.textVis) {
            let visClass = " d-none d-" + props.textVis + "-inline-block";
            let contentClass = "Button__content" + visClass;
            buttonContent = <span className={contentClass}>{buttonContentText}</span>
        } else {
            buttonContent = "";
        }
    } else {
        buttonContent = <span className="Button__content">{buttonContentText}</span>
    }
    // Icons --------
    // let buttonIcon = props.icon ? <Icon icon={props.icon}/> : "";
    // buttonIcon = props.iconBadge ? <Icon icon={props.icon} sem={props.sem} badge colorInverted/> : buttonIcon;
    // buttonIcon = props.out && props.iconBadge ? <Icon icon={props.icon} sem={props.sem} badge transparent/> : buttonIcon;
    // buttonIcon = props.iconBadge === "round" ? <Icon icon={props.icon} sem={props.sem} badge colorInverted round/> : buttonIcon;
    // buttonIcon = props.out && props.iconBadge === "round" ? <Icon icon={props.icon} sem={props.sem} badge round transparent/> : buttonIcon;

    let buttonIcon = "";
    if (props.icon) {
        buttonIcon = <Icon icon={props.icon}/>;
        buttonIcon = props.iconVis && !props.iconInvis ? <Icon icon={props.icon} iconVis={props.iconVis}/> : buttonIcon;
        buttonIcon = props.iconInvis && !props.iconVis ? <Icon icon={props.icon} iconInvis={props.iconInvis}/> : buttonIcon;
        buttonIcon = props.iconVis && props.iconInvis ? <Icon icon={props.icon} iconVis={props.iconVis} iconInvis={props.iconInvis}/> : buttonIcon;
        if (props.iconBadge) {
            buttonIcon = <Icon icon={props.icon} sem={props.sem} badge colorInverted/>;
            buttonIcon = props.iconVis && !props.iconInvis ? <Icon icon={props.icon} sem={props.sem} badge colorInverted iconVis={props.iconVis}/> : buttonIcon;
            buttonIcon = props.iconInvis && !props.iconVis ? <Icon icon={props.icon} sem={props.sem} badge colorInverted iconInvis={props.iconInvis}/> : buttonIcon;
            buttonIcon = props.iconVis && props.iconInvis ? <Icon icon={props.icon} sem={props.sem} badge colorInverted iconVis={props.iconVis} iconInvis={props.iconInvis}/> : buttonIcon;
            if (props.iconBadge === "round") {
                buttonIcon = <Icon icon={props.icon} sem={props.sem} badge colorInverted round/>;
                buttonIcon = props.iconVis && !props.iconInvis ? <Icon icon={props.icon} sem={props.sem} badge colorInverted round iconVis={props.iconVis}/> : buttonIcon;
                buttonIcon = props.iconInvis && !props.iconVis ? <Icon icon={props.icon} sem={props.sem} badge colorInverted round iconInvis={props.iconInvis}/> : buttonIcon;
                buttonIcon = props.iconVis && props.iconInvis ? <Icon icon={props.icon} sem={props.sem} badge colorInverted round iconVis={props.iconVis} iconInvis={props.iconInvis}/> : buttonIcon;
            }
            if (props.out) {
                buttonIcon = <Icon icon={props.icon} sem={props.sem} badge transparent/>;
                buttonIcon = props.iconVis && !props.iconInvis ? <Icon icon={props.icon} sem={props.sem} badge transparent iconVis={props.iconVis}/> : buttonIcon;
                buttonIcon = props.iconInvis && !props.iconVis ? <Icon icon={props.icon} sem={props.sem} badge transparent iconInvis={props.iconInvis}/> : buttonIcon;
                buttonIcon = props.iconVis && props.iconInvis ? <Icon icon={props.icon} sem={props.sem} badge transparent iconVis={props.iconVis} iconInvis={props.iconInvis}/> : buttonIcon;
                if (props.iconBadge === "round") {
                    buttonIcon = <Icon icon={props.icon} sem={props.sem} badge transparent round/>;
                    buttonIcon = props.iconVis && !props.iconInvis ? <Icon icon={props.icon} sem={props.sem} badge transparent round iconVis={props.iconVis}/> : buttonIcon;
                    buttonIcon = props.iconInvis && !props.iconVis ? <Icon icon={props.icon} sem={props.sem} badge transparent round iconInvis={props.iconInvis}/> : buttonIcon;
                    buttonIcon = props.iconVis && props.iconInvis ? <Icon icon={props.icon} sem={props.sem} badge transparent round iconVis={props.iconVis} iconInvis={props.iconInvis}/> : buttonIcon;
                }
            }
        }
    } else {
        buttonIcon = ""
    }

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
    if (props.icon && (props.btnForm || props.iconOnly)) {
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
    // Button display --------
    if (props.btnInvis) {
        buttonClass += " d-" + props.btnInvis + "-none";
    }
    if (props.btnVis) {
        buttonClass += " d-none d-" + props.btnVis + "-inline-flex";
    }

    return (
        <button className={buttonClass} type={buttonType} disabled={props.disabled}>{buttonIcon}{buttonContent}</button>
    )
}

export default Button;
