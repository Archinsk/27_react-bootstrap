import './__LogoImage.css'

function LogoImage(props) {
    let imgSource = props.src ? props.src : "img/default.jpg";

    return <img src={imgSource} alt="" className="logo__image"/>
}

export default LogoImage;