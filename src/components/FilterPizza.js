import { useState, useContext } from "react";
import { store } from "../App";

const FilterPizza = (props) => {
    const [filterStatus, setFilterStatus] = useState("all");
    const { pizzasJSON } = useContext(store);

    const handleChange = (action, filter) => {
        setFilterStatus(action);
        props.updateFilter(
            pizzasJSON.filter((pizza) => filter.includes(pizza.base))
        );
    };

    return (
        <div className="filter">
            <nav>
                <ul style={{ textAlign: "center" }}>
                    <li
                        className={`filterMenu ${
                            filterStatus === "all" && "filterMenuSelected"
                        }`}
                        onClick={() =>
                            handleChange("all",[
                                "Tomate",
                                "Crème Curry",
                                "Crème Fraîche",
                                "Sauce barbecue",
                                "Sauce salsa",
                            ])
                        }
                    >
                        Tous
                    </li>
                    <li
                        className={`filterMenu ${
                            filterStatus === "tomato" && "filterMenuSelected"
                        }`}
                        onClick={() => handleChange("tomato", ["Tomate"])}
                    >
                        Tomates
                    </li>
                    <li
                        className={`filterMenu ${
                            filterStatus === "cream" && "filterMenuSelected"
                        }`}
                        onClick={() => handleChange("cream", ["Crème Fraîche"])}
                    >
                        Crème Fraîche
                    </li>
                    <li
                        className={`filterMenu ${
                            filterStatus === "other" && "filterMenuSelected"
                        }`}
                        onClick={() =>
                            handleChange("other", [
                                "Crème Curry",
                                "Sauce Barbecue",
                                "Sauce Salsa",
                            ])
                        }
                    >
                        Autres
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default FilterPizza;
