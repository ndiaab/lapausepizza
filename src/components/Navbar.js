import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
    return (
        <nav>
            <ul className="menu">
                {props.configData.menu.map((elm, index) => {
                    return (
                        <Link to={elm.link} key={`link${index}`}>
                            <li
                                key={`li${index}`}
                                className={
                                    props.status === elm.link ? "selected" : ""
                                }
                                onClick={() => props.setStatus(elm.link)}
                            >
                                {elm.title}
                            </li>
                        </Link>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navbar;
