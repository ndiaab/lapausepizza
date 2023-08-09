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

    const price = {
        pizzaprice18: "Junior 9€ | Sénior 13€ | Méga 18€",
        pizzaprice20: "Junior 9€ | Sénior 15€ | Méga 20€",
        pizzaprice21: "Junior 9€ | Sénior 15€ | Méga 21€",
        pizzaprice22: "Junior 9€ | Sénior 16€ | Méga 22€",
        paniniprice: "7,00€",
        saladeprice: "7,00€",
        sweetprice: "3,00€",
        texmexprice: "6,00€"
    };

    return (
        <>
            <Banner />
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
                    <section style={{ display: "flex" }}>
                        {/* Formula section */}
                        {props.configData.formulas.map((formula, index) => { 
                            return (
                                    <article key={index} className={`formulaCard backgroundMenu0 backgroundMenu${index}`}>
                                        <div>
                                            <div className="formulaTitle">
                                                {formula.title}
                                            </div>
                                            <div className="formulaDescription">
                                                <p>{formula.description}</p>
                                                {formula.description.length <= props.configData.descriptionLimit && <p>&nbsp;</p>}
                                            </div>
                                            <div className="formulaPrice">
                                                <b>{formula.price}</b> {formula.deliveryDetails}
                                            </div>
                                        </div>
                                    </article>
                            );
                        })}
                    </section>

                    <h2
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
                        price={price}
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
                        price={price}
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
                        price={price}
                    />
                </div>
            </div>
        </>
    );
};

export default WelcomePage;
