import LogoImage from "./__LogoImage/__LogoImage";
import LogoText from "./__LogoText/__LogoText";
import './Logo.css';

function Logo(props) {
    let marginClass = "";
    if (props.pos === "left") {
        marginClass = "logo_left"
    }
    if (props.pos === "right") {
        marginClass = "logo_right"
    }
    let logoClass = "logo " + marginClass + " navbar-brand";
    let logoHref = props.href ? props.href : "#";

    return (
        <a className={logoClass} href={logoHref}>
            <LogoImage src="img/default_dark.jpg"/>
            <LogoText brandName="Агрегатор мер поддержки"/>
        </a>
    )
}

export default Logo;