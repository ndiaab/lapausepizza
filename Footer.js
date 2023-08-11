import { useState } from "react";
import "./Footer.css";

import { Link } from "react-router-dom";

const Footer = props => {
    const [selected, setSelected] = useState(false);
    return (
        <footer>
            <div className='copyright'>Copyright {props.configData.name}</div>
            <iframe src={props.configData.iframeLink} style={{ border: "0", textAlign: "left" }} title='maps' width='50%' height='250' loading='lazy' referrerPolicy='no-referrer-when-downgrade'></iframe>
            <div style={{ display: "", flexFlow: "wrap", width: "fit-content", marginRight: "auto", marginLeft: "auto" }}>
            <h2 style={{textAlign:"left"}} onClick={() => setSelected(!selected)}>
                Carte :
            </h2>
            <div className={`hideSummaryProduct ${selected && "displaySummaryProduct"}`} >
                {Object.keys(props.configData.products).map(key => {
                    return (
                        // <div key={key}>
                        //     <h2 onClick={() => (key === selected ? setSelected("") : setSelected(key))} style={{ margin: "1rem 3rem" }}>
                        //         {key}
                        //     </h2>
                        //     <ul className={`displaySummaryProduct ${key === selected && "displaySummaryProduct"}`} style={{ padding: "0", listStyle: "none" }}>
                                props.configData.products[key].productsData.map((elm, index) => {
                                    return (
                                        <Link to={`/produit/${elm.type + "/" + elm.title.toLowerCase().replaceAll(" ", "-")}`} key={`link${elm.title + index}`}>
                                            <li key={`li${index}`} style={{ display: "inline-flex", margin: "1rem" }}>
                                                {elm.type+' '+elm.title}
                                            </li>
                                        </Link>
                                    );
                                })
                        //     </ul>
                        // </div>
                    );
                })}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
