import { createContext, useEffect, useReducer, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate, useLocation } from "react-router-dom";

import Header from "./components/Header";
import WelcomePage from "./pages/WelcomePage";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";
import MenuPage from "./pages/MenuPage";
import Footer from "./components/Footer";
import configData from "./config";
import ProductPage from "./pages/ProductPage";

import "./App.css";

import pizzasData from "./json/pizzas";
import paninisData from "./json/paninis";
import texmexData from "./json/texmex";
import saladesData from "./json/salades";
import sweetsData from "./json/sweets";

const pizzasJSON = pizzasData.map((pizza) => ({ ...pizza, type: "pizza" }));

const paninisJSON = paninisData.map((panini) => ({
    ...panini,
    type: "panini",
}));

const saladesJSON = saladesData.map((salade) => ({
    ...salade,
    type: "salade",
}));

const texmexJSON = texmexData.map((texmex) => ({ ...texmex, type: "texmex" }));

const sweetsJSON = sweetsData.map((sweet) => ({ ...sweet, type: "sweet" }));

const BodyElement = document.getElementById("body");

export const store = createContext([]);
const initilizeFavorites =
    localStorage.getItem("favorites") !== null
        ? JSON.parse(localStorage.getItem("favorites"))
        : [];

const favoriteReducer = (state, data) => {
    if (data.delete) {
        return [];
    } else {
        if (
            state.findIndex(
                (product) =>
                    product.title === data.product.title &&
                    product.type === data.product.type
            ) === -1
        ) {
            return [...state, data.product];
        } else {
            return state.filter(
                (product) =>
                    !(
                        product.title === data.product.title &&
                        product.type === data.product.type
                    )
            );
        }
    }
};


function App() {
    const [sideBar, setSideBar] = useState(false);
    const [favoritesList, updateFavoritesList] = useReducer(
        favoriteReducer,
        initilizeFavorites
    );

    const [status, setStatus] = useState(window.location.pathname);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favoritesList));
    }, [favoritesList]);

    // const { pathname } = useLocation();

    // useEffect(() => {
    //     // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    //     document.documentElement.scrollTo({
    //       top: 0,
    //       left: 0,
    //       behavior: "instant", // Optional if you want to skip the scrolling animation
    //     });
    //   }, [pathname]);
    

    sideBar === true && BodyElement.classList.add("active");
    sideBar === false && BodyElement.classList.remove("active");

    return (
        <store.Provider
            value={{
                favoritesList,
                updateFavoritesList,
                pizzasJSON,
                paninisJSON,
                saladesJSON,
                texmexJSON,
                sweetsJSON,
            }}
        >
            <BrowserRouter>
                <div className={`App ${sideBar && "active"}`}></div>
                <div
                    className={`Back ${sideBar && "active"}`}
                    onClick={() => setSideBar(!sideBar)}
                ></div>
                <div
                    className={`sideBar ${sideBar && "active"}`}
                    onClick={() => setSideBar(!sideBar)}
                >
                    <img
                        src={configData.logo}
                        alt={`logo ${configData.name}`}
                        style={{ width: "10rem" }}
                    />
                    <Navbar
                        className="test"
                        status={status}
                        setStatus={setStatus}
                        configData={configData}
                    />
                    <div
                        style={{
                            position: "absolute",
                            bottom: "0",
                            margin: "1rem",
                            textAlign: "left",
                        }}
                    >
                        {/* Adress and contacts */}
                        {configData.address.map((lineAddress,index) => (
                            <p key={lineAddress+index}>{lineAddress}</p>
                        ))}
                        {/* phone Number */}
                        {configData.phonesNumber.map((phoneNumber,index) => (
                            <p key={phoneNumber+index}>Tél: {phoneNumber}</p>
                        ))}
                        {/* Email */}
                        <p>@: {configData.email}</p>
                    </div>
                </div>
                <div className="container">
                    <Header
                        configData={configData}
                        sideBar={sideBar}
                        setSideBar={setSideBar}
                    />
                    <div className="desktopNavbar">
                        <Navbar
                            configData={configData}
                            status={status}
                            setStatus={setStatus}
                        />
                    </div>
                    <Routes>
                        <Route path="*" element={<Navigate to="/404" />} />
                        <Route path="/404" element={<>NOT FOUND</>} />
                        <Route
                            path="/"
                            exact
                            element={<WelcomePage configData={configData} />}
                        />
                        <Route
                            path="/carte"
                            element={<MenuPage configData={configData} />}
                        />
                        <Route
                            path="/favoris"
                            element={<Favorites configData={configData} />}
                        />
                        {/* Create a route for each product throught a loop */}
                        {Object.keys(configData.productsData).map((key) => {
                            return configData.productsData[key].map(
                                (product) => {
                                    return (
                                        <Route
                                            path={`/produit/${product.title
                                                .toLowerCase()
                                                .replaceAll(" ", "-")}`}
                                            element={
                                                <ProductPage
                                                    product={product}
                                                    configData={configData}
                                                />
                                            }
                                        ></Route>
                                    );
                                }
                            );
                        })}

                        {/* {texmexJSON.map((product) => {
                            return (
                                <Route
                                    path={`/produit/${product.title.toLowerCase().replaceAll(" ","-")}`}
                                    element={<ProductPage product={product} configData={configData} />}
                                ></Route>
                            );
                        })} */}
                    </Routes>
                    <Footer configData={configData} texmexJSON={texmexJSON} />
                </div>
            </BrowserRouter>
        </store.Provider>
    );
}

export default App;
