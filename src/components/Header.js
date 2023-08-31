import { Link } from "react-router-dom";
import map from "../image/map.svg";
import phone from "../image/phone.svg";
import burgerMenu from "../image/burger-menu.svg"
import "./Header.css";

const Header = (props) => {
    return (
        <>
            {/* Desktop Header */}
            <div className="header">
                <Link to="/lapausepizza/">
                    <img src={props.configData.logo} alt="logo" />
                </Link>
                

                <div className="contact">
                        <a href={`tel:${props.configData.phonesNumber[0].replaceAll(' ','')}`}>
                            {props.configData.phonesNumber[0]}
                            <img className="phone" src={phone} alt="" />
                        </a>
                        <br/>
                        <a
                            href={props.configData.location}
                            target="_blank"
                            rel="noreferrer"
                        >
                            s'y rendre
                            <img className="map" src={map} alt="" />
                        </a>
                </div>
            </div>
            {/* Phone Header */}
            <div className="phone-header" style={{}}>
                    <img className="map mini-svg" src={burgerMenu} alt=""  onClick={()=>(props.setSideBar(!props.sideBar))}/>
                <Link to="/lapausepizza/">
                    <div className="logo">
                        <img src={props.configData.logo} alt="logo" />
                    </div>
                </Link>

                <a href={`tel:${props.configData.phonesNumber[0].replaceAll(' ','')}`}>
                    <img className="phone mini-svg" src={phone} alt="" />
                </a>
            </div>
        </>
    );
};

export default Header;
