import './Icon.css';

function Icon(props) {
    let textColor = "";
    let bgColor = "";
    if (props.badge && !props.colorInverted) {
        bgColor = " bg-" + props.sem;
        switch (props.sem) {
            case "primary" || "outline-primary" :
                textColor = " text-white";
                bgColor += " Icon_bg-dark";
                break;
            case "secondary" || "outline-secondary" :
                textColor = " text-white";
                bgColor += " Icon_bg-dark";
                break;
            case "success" || "outline-success" :
                textColor = " text-white";
                bgColor += " Icon_bg-dark";
                break;
            case "danger" || "outline-danger" :
                textColor = " text-white";
                bgColor += " Icon_bg-dark";
                break;
            case "dark" || "outline-dark" :
                textColor = " text-white";
                bgColor += " Icon_bg-dark";
                break;
            case "warning" || "outline-warning" :
                textColor = " text-dark";
                bgColor += " Icon_bg-light";
                break;
            case "info" || "outline-info" :
                textColor = " text-dark";
                bgColor += " Icon_bg-light";
                break;
            case "light" || "outline-light" :
                textColor = " text-dark";
                bgColor += " Icon_bg-light";
                break;
            default:
                textColor = "";
                break;
        }
    } else if (props.badge && props.colorInverted) {
        textColor = " text-" + props.sem;
        switch (props.sem) {
            case "primary" || "outline-primary" :
                bgColor = " bg-white Icon_badge-color-inverted";
                break;
            case "secondary" || "outline-secondary" :
                bgColor = " bg-white Icon_badge-color-inverted";
                break;
            case "success" || "outline-success" :
                bgColor = " bg-white Icon_badge-color-inverted";
                break;
            case "danger" || "outline-danger" :
                bgColor = " bg-white Icon_badge-color-inverted";
                break;
            case "dark" || "outline-dark" :
                bgColor = " bg-white Icon_badge-color-inverted";
                break;
            case "warning" || "outline-warning" :
                bgColor = " bg-dark Icon_badge-color-inverted";
                break;
            case "info" || "outline-info" :
                bgColor = " bg-dark Icon_badge-color-inverted";
                break;
            case "light" || "outline-light" :
                bgColor = " bg-dark Icon_badge-color-inverted";
                break;
            default:
                bgColor = "";
                break;
        }
    } else if (props.sem) {
        textColor = " text-" + props.sem;
    }

    const iconSemantic = bgColor + textColor;

    const iconTransparent = props.transparent ? " Icon_badge-transparent-icon" : "";

    const iconBadge = props.badge ? " Icon_badge Icon_badge-square badge" : "";
    const iconRound = props.round ? " Icon_badge Icon_badge-round rounded-pill" : "";
    const iconClass = "Icon material-icons" + iconBadge + iconSemantic + iconRound + iconTransparent;
    return <span className={iconClass}>{props.icon}</span>
}

export default Icon;