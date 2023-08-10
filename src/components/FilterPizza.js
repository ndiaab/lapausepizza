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
                <ul>
                    {Object.keys(props.configData.filter).map((key, index) => {
                        return (
                            <li
                                key={`li ${key + index}`}
                                className={`filterMenu ${
                                    filterStatus === key && "filterMenuSelected"
                                }`}
                                onClick={() =>
                                    handleChange(
                                        key,
                                        props.configData.filter[key].filterTab
                                    )
                                }
                            >
                                {props.configData.filter[key].title}
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
};

export default FilterPizza;
