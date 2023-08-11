import { useState, useContext} from "react";
import { store } from "../App";

import Product from "../components/Product";
import FilterPizza from "../components/FilterPizza";

import "./MenuPage.css";

import favoriteblue from "../image/heartblue.svg";
import favoritered from "../image/heartred.svg";

const MenuPage = props => {
    const { pizzasJSON } = useContext(store);
    const [pizzas, updateFilter] = useState(pizzasJSON);
    const [selection, setSelection] = useState("pizza");

    return (
        <div>
            <div
                className={`MenuPage coverMenu salade ${selection}`}
            >
                <h1 className='MenuPage menuTitle'>{props.configData.products[selection].title}</h1>
            </div>
            <div className='Global margin05'>
                <nav className='MenuPage categories'>
                    <ul className='MenuPage filtre'>
                        {Object.keys(props.configData.products).map((key, index) => {
                            return (
                                <li key={key + index} className={`MenuPage productFilter ${selection === key && "productFilterSelected"}`} onClick={() => setSelection(key)}>
                                    {props.configData.products[key].title}
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <div>
                    <p>
                        Cliquer sur <img src={favoriteblue} alt='' width='15rem' /> pour ajouter un produit à votre liste d'envie <img src={favoritered} alt='' width='15rem' />{" "}
                    </p>
                    {Object.keys(props.configData.products).map(key => {
                        return (
                            <>
                                {selection === key && (
                                    <>
                                        {selection === "pizza" && <FilterPizza updateFilter={updateFilter} configData={props.configData} />}
                                        <Product products={selection === "pizza" ? pizzas : props.configData.products[key].productsData} price={props.configData.price} />
                                    </>
                                )}
                            </>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default MenuPage;
