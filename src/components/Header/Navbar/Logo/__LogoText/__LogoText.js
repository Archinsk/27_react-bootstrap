function LogoText(props) {
    let brandName = props.brandName ? props.brandName : "Brand";

    return <>{brandName}</>
}

export default LogoText;