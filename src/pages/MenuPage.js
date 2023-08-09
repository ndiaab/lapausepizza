import { useReducer, useState, useContext, useEffect } from "react";
import { store } from "../App";

import Product from "../components/Product";
import FilterPizza from "../components/FilterPizza";

import "./MenuPage.css";

import favoriteblue from "../image/heartblue.svg";
import favoritered from "../image/heartred.svg";

import categPizza from "../image/categorie/categ-pizza.jpg";
import categSalade from "../image/categorie/categ-salade.png";
import categTexmex from "../image/categorie/categ-texmex.jpg";
import configData from "../config";

const MenuPage = (props) => {
    const { pizzasJSON, paninisJSON, saladesJSON, texmexJSON, sweetsJSON } =
        useContext(store);
    const [pizzas, updateFilter] = useState(pizzasJSON);
    const [selection, setSelection] = useState("pizza");

    const updateBackground = (selection) => {
        switch (selection) {
            case "pizza":
                return categPizza;
            case "texmex":
                return categTexmex;
            default:
                return categSalade;
        }
    };
    const [title, setTitle] = useState("pizza");

    useEffect(() => {
        setTitle(configData.products[selection]);
    }, [selection]);

    return (
        <div>
            <div
                className="coverMenu"
                style={{
                    backgroundImage: `url(${updateBackground(selection)})`,
                }}
            >
                <h1 className="menuTitle">{title}</h1>
            </div>
            <div style={{ margin: ".5rem" }}>
                <nav className="categories">
                    <ul className="filtre">
                        {Object.keys(props.configData.products).map((key,index) => {
                            return (
                                <li
                                key={key+index}
                                    className={`productFilter ${
                                        selection === key &&
                                        "productFilterSelected"
                                    }`}
                                    onClick={() => setSelection(key)}
                                >
                                    {props.configData.products[key]}
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <div>
                    <p>
                        Cliquer sur{" "}
                        <img src={favoriteblue} alt="" width="15rem" /> pour
                        ajouter un produit à votre liste d'envie{" "}
                        <img src={favoritered} alt="" width="15rem" />{" "}
                    </p>
                    {selection === "pizza" && (
                        <>
                            <FilterPizza updateFilter={updateFilter} />
                            <Product
                                products={pizzas}
                                price={props.configData.price}
                            />
                        </>
                    )}
                    {selection === "paninis" && (
                        <Product
                            products={paninisJSON}
                            price={props.configData.price}
                        />
                    )}
                    {selection === "texmex" && (
                        <Product
                            products={texmexJSON}
                            price={props.configData.price}
                        />
                    )}
                    {selection === "salade" && (
                        <Product
                            products={saladesJSON}
                            price={props.configData.price}
                        />
                    )}

                    {selection === "sweet" && (
                        <Product
                            products={sweetsJSON}
                            price={props.configData.price}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default MenuPage;
