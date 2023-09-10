import Banner from "../components/Banner";
import { useContext} from "react";
import Product from "../components/Product";
import { store } from "../App";
import couscous from "../image/couscous.png";
import pizzaMoment from "../image/pizza-moment.jpg";
import "react-lazy-load-image-component/src/effects/blur.css";

import "./WelcomePage.css";
import configData from "../config";


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
                        &nbsp;&nbsp;Promos de la semaine&nbsp;&nbsp;
                    </h2>
                    <section className="WelcomePage container">
                        {/* Formula section */}
                        {props.configData.promos.map((promo, index) => { 
                            return (
                                    <article key={index} className={`WelcomePage formulaCard backgroundMenu0 backgroundMenu${index}`}>
                                        <div>
                                            <div className="WelcomePage formulaTitle">
                                                {promo.title}
                                            </div>
                                            <div className="WelcomePage formulaDescription">
                                                <span>{promo.description}</span><br/>
                                                {promo.description.length <= props.configData.descriptionLimit && <span>&nbsp;</span>}
                                            </div>
                                            <div className="WelcomePage formulaPrice">
                                                <b>{promo.price}</b> {promo.deliveryDetails}
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
                        &nbsp;Nos Formules&nbsp;
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
                        &nbsp;Nos top ventes&nbsp;
                    </h2>
                    <Product
                        products={pizzasJSON.filter(
                            (pizza) => pizza.top === "*"
                        )}
                        price={props.configData.price}
                    />
                    {/* COUCOUS */}
                    <div className="WelcomePage containercouscous">
                            <div className="WelcomePage couscous">
                            <div className="WelcomePage formulaTitle">{configData.products.couscous.productsData[0].title}<br/></div>
                            <div className="WelcomePage formulaDescription">{configData.products.couscous.productsData[0].paragraphe}<br/></div>
                            <div className="WelcomePage formulaPrice">{configData.price[configData.products.couscous.productsData[0].price]}<br/></div>
                            </div>
                            
                    </div>
                        
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
                        &nbsp;Tex-Mex & Paninis&nbsp;
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
                        &nbsp;Desserts&nbsp;
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
