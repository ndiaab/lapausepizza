import { useContext } from "react";
import { store } from "../App";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";
import "./Product.css";

import favoriteblue from "../image/heartblue.svg";
import favoritered from "../image/heartred.svg";

import blurPizza from "../image/blur/blur-pizza.png";
import blurPanini from "../image/blur/blur-panini.png";
import blurSalade from "../image/blur/blur-salade.png";
import blurTexmex from "../image/blur/blur-texmex.png";

const blurDictionnary = {
    pizza: blurPizza,
    panini: blurPanini,
    salade: blurSalade,
    texmex: blurTexmex,
};

const Product = (props) => {
    const { favoritesList, updateFavoritesList } = useContext(store);

    return (
        <div>
            <section className="Product container">
                {props.products.map((product, index) => {
                    favoritesList.findIndex((e) => e.title === product.title);
                    const isFavorite =
                        favoritesList.findIndex(
                            (e) =>
                                e.title === product.title &&
                                e.type === product.type
                        ) === -1
                            ? false
                            : true;
                    return (
                        <article className="Product product" key={index}>
                            <h2 className="Product title">{product.title}</h2>
                            <img
                                src={isFavorite ? favoritered : favoriteblue}
                                onClick={() =>
                                    updateFavoritesList({ product: product })
                                }
                                alt=""
                                width="30px"
                            />
                            <br />
                            <LazyLoadImage
                                className="Product simulationImage"
                                src={product.image}
                                alt={`product ${product.title}`}
                                effect="blur"
                                placeholderSrc={blurDictionnary[product.type]}
                                height="250px"
                                width="250px"
                            />
                            <p className="Product productPrice">
                                {props.price[product.price]}
                            </p>
                            <br />
                            <p className="Product details">
                                {product.paragraphe}
                            </p>
                        </article>
                    );
                })}
            </section>
        </div>
    );
};

export default Product;
