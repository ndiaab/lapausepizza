import { useContext } from "react";
import { store } from "../App";
import Product from "../components/Product";

import "./Favorites.css";

const Favorites = () => {
    const { favoritesList, updateFavoritesList } = useContext(store);

    const price = {
        pizzaprice18: "Junior 9€ | Sénior 13€ | Méga 18€",
        pizzaprice20: "Junior 9€ | Sénior 15€ | Méga 20€",
        pizzaprice21: "Junior 9€ | Sénior 15€ | Méga 21€",
        pizzaprice22: "Junior 9€ | Sénior 16€ | Méga 22€",
        saladeprice: "7€",
        sweetprice: "3€",
        paniniprice: "6€",
    };

    return (
        <div className="margin05">
            <div>
                <button
                    className="clearButton"
                    disabled={favoritesList.length > 0 ? false : true}
                    onClick={() => {
                        updateFavoritesList({ delete: true });
                    }}
                >
                    Supprimer la liste des favoris
                </button>

                <section>
                    {favoritesList.length === 0 &&
                        "Aucun produit dans la liste d'envie"}
                    {<Product products={favoritesList} price={price} />}
                </section>
            </div>
        </div>
    );
};

export default Favorites;
