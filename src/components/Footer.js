import { useState } from "react";
import "./Footer.css";

import { Link } from "react-router-dom";

const Footer = (props) => {
    const [selected, setSelected] = useState(false);
    return (
        <footer>
            <div className="copyright">Copyright {props.configData.name}</div>
            <div
                style={{
                    textAlign: "left",
                    display: "inline-block",
                    width: "fit-content",
                }}
            >
                {/* address */}
                {props.configData.address.map((lineAddress, index) => (
                    <p key={lineAddress + index}>{lineAddress}</p>
                ))}
                {/* phone number */}
                {props.configData.phonesNumber.map((phoneNumber, index) => (
                    <p key={phoneNumber + index}>Tél: {phoneNumber}</p>
                ))}
                {/* email */}
                <p>@: {props.configData.email}</p>
            </div>
            <iframe
                src={props.configData.iframeLink}
                style={{
                    border: "0",
                    textAlign: "left",
                    display: "inline-block",
                }}
                title="maps"
                width="50%"
                height="250"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div
                style={{
                    display: "",
                    flexFlow: "wrap",
                    width: "fit-content",
                    marginRight: "auto",
                    marginLeft: "auto",
                }}
            >
                <div>
                    <h2
                        style={{ textAlign: "left" }}
                        onClick={() => setSelected(!selected)}
                    >
                        Carte :
                    </h2>
                    <div
                        className={`hideSummaryProduct ${
                            selected && "displaySummaryProduct"
                        }`}
                    >
                        {Object.keys(props.configData.products).map((key) => {
                            return props.configData.products[
                                key
                            ].productsData.map((elm, index) => {
                                return (
                                    <Link
                                        to={`/lapausepizza/produit/${
                                            elm.type +
                                            "/" +
                                            elm.title
                                                .toLowerCase()
                                                .replaceAll(" ", "-")
                                        }`}
                                        key={`link${elm.title + index}`}
                                    >
                                        <li
                                            key={`li${index}`}
                                            style={{
                                                display: "inline-flex",
                                                margin: ".5rem",
                                            }}
                                        >
                                            {elm.type + " " + elm.title}
                                        </li>
                                    </Link>
                                );
                            });
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
