import { useContext } from "react";
import { store } from "../App";
import Product from "../components/Product";
import favoritered from "../image/heartred.svg";

import "./Favorites.css";

const Favorites = props => {
    const { favoritesList, updateFavoritesList } = useContext(store);
    return (
        <div className='margin05'>
            <div>
                <p>
                    Voici la liste de vos favoris <img src={favoritered} alt='' width='15rem' />, celle-ci vous simplifiera votre prise de commande
                </p>
                <button
                    className='Favorites clearButton'
                    disabled={favoritesList.length > 0 ? false : true}
                    onClick={() => {
                        updateFavoritesList({ delete: true });
                    }}
                >
                    Supprimer la liste des favoris
                </button>

                <section>
                    {favoritesList.length === 0 && "Aucun produit dans la liste d'envie"}
                    {<Product products={favoritesList} price={props.configData.price} />}
                </section>
            </div>
        </div>
    );
};

export default Favorites;
