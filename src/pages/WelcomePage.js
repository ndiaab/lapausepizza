import Banner from "../components/Banner";
import { useContext} from "react";
import Product from "../components/Product";
import { store } from "../App";
import couscous from "../image/couscous.png";
import pizzaMoment from "../image/pizza-moment.jpg";
import "react-lazy-load-image-component/src/effects/blur.css";

import "./WelcomePage.css";


const WelcomePage = (props) => {
    const { pizzasJSON, paninisJSON, texmexJSON, sweetsJSON } =
        useContext(store);

    return (
        <>
            <Banner configData={props.configData} />
            <div style={{ margin: "0.5rem" }}>
                <div>
                    <h2
                        style={{
                            borderBottom: " solid .2rem",
                            borderBottomColor: "#cf2e2e",
                            width: "fit-content",
                            marginRight: "auto",
                            marginLeft: "auto",
                        }}
                    >
                        &nbsp;&nbsp;Nos Formules&nbsp;&nbsp;
                    </h2>
                    <section className="WelcomePage container">
                        {/* Formula section */}
                        {props.configData.formulas.map((formula, index) => { 
                            return (
                                    <article key={index} className={`WelcomePage formulaCard backgroundMenu0 backgroundMenu${index}`}>
                                        <div>
                                            <div className="WelcomePage formulaTitle">
                                                {formula.title}
                                            </div>
                                            <div className="WelcomePage formulaDescription">
                                                <span>{formula.description}</span><br/>
                                                {formula.description.length <= props.configData.descriptionLimit && <span>&nbsp;</span>}
                                            </div>
                                            <div className="WelcomePage formulaPrice">
                                                <b>{formula.price}</b> {formula.deliveryDetails}
                                            </div>
                                        </div>
                                    </article>
                            );
                        })}
                    </section>

                    <h2
                    className="WelcomePage"
                        style={{
                            borderBottom: " solid .2rem",
                            borderBottomColor: "#cf2e2e",
                            width: "fit-content",
                            marginRight: "auto",
                            marginLeft: "auto",
                        }}
                    >
                        &nbsp;&nbsp;Nos top ventes&nbsp;&nbsp;
                    </h2>
                    <Product
                        products={pizzasJSON.filter(
                            (pizza) => pizza.top === "*"
                        )}
                        price={props.configData.price}
                    />
                    <img
                        src={couscous}
                        style={{ width: "100%" }}
                        alt=""
                        loading="lazy"
                    />
                    <div
                        style={{
                            backgroundImage: `url(${pizzaMoment})`,
                            backgroundSize: "100%",
                        }}
                    ></div>
                    <h2
                        style={{
                            borderBottom: " solid .2rem",
                            borderBottomColor: "#cf2e2e",
                            width: "fit-content",
                            marginRight: "auto",
                            marginLeft: "auto",
                        }}
                    >
                        &nbsp;&nbsp;La pause salée&nbsp;&nbsp;
                    </h2>
                    <Product
                        products={paninisJSON
                            .filter((sweet) => sweet.top === "*")
                            .concat(
                                texmexJSON.filter(
                                    (texmex) => texmex.top === "*"
                                )
                            )}
                        price={props.configData.price}
                    />
                    <img
                        src={pizzaMoment}
                        style={{ width: "100%" }}
                        alt=""
                        loading="lazy"
                    />
                    <h2
                        style={{
                            borderBottom: " solid .2rem",
                            borderBottomColor: "#cf2e2e",
                            width: "fit-content",
                            marginRight: "auto",
                            marginLeft: "auto",
                        }}
                    >
                        &nbsp;La pause sucrée&nbsp;
                    </h2>
                    <Product
                        products={sweetsJSON.filter(
                            (sweet) => sweet.top === "*"
                        )}
                        price={props.configData.price}
                    />
                </div>
            </div>
        </>
    );
};

export default WelcomePage;
