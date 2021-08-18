function Button_Offcanvas(props) {
    const buttonIcon = props.icon ? <span className="material-icons">{props.icon}</span> : "";
    const buttonTitle = props.title ? props.title : "Кнопка";
    const buttonType = props.type ? props.type : "button";
    const buttonStyle = props.style ? "btn btn-" + props.style : "btn";
    const buttonTarget = props.offcanvasId ? "#" + props.offcanvasId : "#offcanvasExample";
    const buttonAria = props.offcanvasId ? props.offcanvasId : "offcanvasExample";

    return (
        <button className={buttonStyle} type={buttonType} data-bs-toggle="offcanvas" data-bs-target={buttonTarget} aria-controls={buttonAria}>{buttonIcon}{buttonTitle}</button>
    )
}

export default Button_Offcanvas;