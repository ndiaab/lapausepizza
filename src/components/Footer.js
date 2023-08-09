import "./Footer.css";

import { Link } from "react-router-dom";

const Footer = (props) => {
    return (
        <footer>
            <div className="copyright">Copyright {props.configData.name}</div>
            <iframe
                src={props.configData.iframeLink}
                style={{ border: "0", textAlign: "left" }}
                title="maps"
                width="50%"
                height="250"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div style={{display:"flex"}}>
                {Object.keys(props.configData.productsData).map((key) => {
                    return (
                        <ul key={key}>
                            <h2>{key}</h2>
                            {props.configData.productsData[key].map(
                                (elm, index) => {
                                    return (
                                        <Link
                                            to={`/produit/${elm.title
                                                .toLowerCase()
                                                .replaceAll(" ", "-")}`}
                                            key={`link${elm.title+index}`}
                                        >
                                            <li key={`li${index}`}>
                                                {elm.title}
                                            </li>
                                        </Link>
                                    );
                                }
                            )}
                        </ul>
                    );
                })}
            </div>
        </footer>
    );
};

export default Footer;
