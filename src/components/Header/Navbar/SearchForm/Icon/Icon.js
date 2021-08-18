import './Icon.css';

function Icon(props) {
    const iconSemantic = props.sem ? "bg-" + props.sem : "";
    const iconBadge = props.badge ? "badge" : "";
    const iconRound = props.round ? "rounded-pill" : "";
    const iconClass = "material-icons " + iconBadge + " " + iconSemantic + " " + iconRound;
    return <span className={iconClass}>{props.icon}</span>
}

export default Icon;