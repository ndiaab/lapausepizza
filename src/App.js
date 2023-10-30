import { createContext, useEffect, useReducer, useState } from "react";
import { Route, Routes, Navigate, HashRouter, BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import WelcomePage from "./pages/WelcomePage";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";
import MenuPage from "./pages/MenuPage";
import Footer from "./components/Footer";
import configData from "./config";
import ProductPage from "./pages/ProductPage";

import "./App.css";
import SlideMenu from "./components/SlideMenu";

const pizzasJSON = configData.products.pizza.productsData;
const paninisJSON = configData.products.paninis.productsData;
const saladesJSON = configData.products.salade.productsData;
const texmexJSON = configData.products.texmex.productsData;
const sweetsJSON = configData.products.sweet.productsData;

const BodyElement = document.getElementById("body");

export const store = createContext([]);
const initilizeFavorites = localStorage.getItem("favorites") !== null ? JSON.parse(localStorage.getItem("favorites")) : [];

const favoriteReducer = (state, data) => {
    if (data.delete) {
        return [];
    } else {
        if (state.findIndex(product => product.title === data.product.title && product.type === data.product.type) === -1) {
            return [...state, data.product];
        } else {
            return state.filter(product => !(product.title === data.product.title && product.type === data.product.type));
        }
    }
};

function App() {
    const [sideBar, setSideBar] = useState(false);
    const [favoritesList, updateFavoritesList] = useReducer(favoriteReducer, initilizeFavorites);

    const [status, setStatus] = useState(!window.location.hash && '/');

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favoritesList));
    }, [favoritesList]);

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
            <HashRouter>
                <div className={`App ${sideBar && "active"}`}></div>
                <div className={`Back ${sideBar && "active"}`} onClick={() => setSideBar(!sideBar)}></div>
                <div className={`sideBar ${sideBar && "active"}`} onClick={() => setSideBar(!sideBar)}>
                    <img src={configData.logo} alt={`logo ${configData.name}`} style={{ width: "10rem" }} />
                    <Navbar className='test' status={status} setStatus={setStatus} configData={configData} />
                    <SlideMenu configData={configData} />
                </div>
                <div className='App container'>
                    <Header configData={configData} sideBar={sideBar} setSideBar={setSideBar} setStatus={setStatus}/>
                    <div className='desktopNavbar'>
                        <Navbar configData={configData} status={status} setStatus={setStatus} />
                    </div>
                    <div className="App subcontainer">
                        <Routes>
                            <Route path={`${configData.root}/`} exact element={<WelcomePage configData={configData} />} />
                            <Route path={`${configData.root}/carte`} element={<MenuPage configData={configData} />} />
                            <Route path={`${configData.root}/favoris`} element={<Favorites configData={configData} />} />
                            {/* Create a route for each product throught a loop */}
                            {Object.keys(configData.products).map(key => {
                                return configData.products[key].productsData.map(product => {
                                    return <Route path={`${configData.root}/produit/${product.type + "/" + product.title.toLowerCase().replaceAll(" ", "-")}`} element={<ProductPage  configData={configData} product={product} type={product.type === "pizza" ? "pizza" : ""}/>}></Route>;
                                });
                            })}
                            <Route path='*' element={<Navigate to={`/404`} />} />
                            <Route path={`/404`} element={<>NOT FOUND</>} />
                        </Routes>
                        <Footer configData={configData} />
                    </div>
                    
                </div>
            </HashRouter>
        </store.Provider>
    );
}

export default App;
