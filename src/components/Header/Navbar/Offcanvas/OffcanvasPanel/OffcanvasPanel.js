import OffcanvasBody from "./__OffcanvasBody/__OffcanvasBody";
import OffcanvasHeader from "./__OffcanvasHeader/__OffcanvasHeader";

function OffcanvasPanel() {
    return (
        // <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="sideBar"
                 aria-labelledby="sideBarLabel">
                <OffcanvasHeader/>
                <OffcanvasBody/>
            </div>
        // </div>
    )
}

export default OffcanvasPanel;