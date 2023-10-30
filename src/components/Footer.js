import { useState } from "react";
import "./Footer.css";

import { Link } from "react-router-dom";

const Footer = (props) => {
    const [selected, setSelected] = useState(false);
    return (
        <footer>
            <div className="copyright"></div>
            <div className="location">
                {/* Hours  */}
                <h2>Horaires du restaurant</h2>
                <table>
                    <tbody>
                        {Object.keys(props.configData.calendar).map((key) => {
                            return (
                                <tr className="tableLane">
                                    <td>
                                        {
                                            props.configData.calendar[key]
                                                .description
                                        }
                                    </td>
                                    {props.configData.calendar[
                                        key
                                    ].schedules.map((date) => {
                                        return (
                                            <td className="textCenter">
                                                {date}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <br />

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
                title="maps"
                loading="lazy"
                className="iframeMaps"
                referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="copyright">Copyright {props.configData.name}</div>
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
                        Carte
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
                                        to={`/produit/${
                                            elm.type +
                                            "/" +
                                            elm.title
                                                .toLowerCase()
                                                .replaceAll(" ", "-")
                                        }`}
                                        key={`link${elm.title + index}`}
                                        onClick={() => {
                                            window.scrollTo({
                                                top: 0,
                                                left: 0,
                                                behavior: "smooth",
                                            });
                                        }}
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
