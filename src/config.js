import pizzasData from "./json/pizzas";
import paninisData from "./json/paninis";
import texmexData from "./json/texmex";
import saladesData from "./json/salades";
import sweetsData from "./json/sweets";
import drinksData from "./json/drinks";

//changer texmex par vegetarienne

//livraison max 10km

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

const drinksJSON = drinksData.map((drink) => ({
    ...drink,
    type: "drink",
}));

const planning = {
    lunch: "11:30 - 14:00",
    dinner: "18:00 - 22:30",
};

const configData = {
    name: "La Pause Pizza",
    root: "",
    logo: require("./image/logo-pausepizza.png"),
    presentation:
        "Ouvert 7J/7 de 11H30 à 14H, et de 18H à 23H. Fermé le Lundi midi et Dimanche midi.",
    phonesNumber: ["03 44 83 20 31", "03 44 83 24 60"],
    email: "contact@lapausepizza.com",
    address: ["62 AVENUE DE FLANDRE", "60190 ESTREES SAINT DENIS"],
    location: "https://goo.gl/maps/pPb5cWB6YXREEHhP8",
    calendar: {
        monday: { description: "Lundi", schedules: ['Fermé',planning.dinner] },
        week: { description: "Mardi au Samedi", schedules: [planning.lunch,planning.dinner] },
        sunday: { description: "Dimanche", schedules: ['Fermé',planning.dinner] },

    },


    formulas: [
        {
            title: "2 PIZZAS SENIOR",
            description: "+ 1 boisson 1,5L",
            price: "23€",
            deliveryDetails: "+ 2€ en livraison",
        },
        {
            title: "2 PIZZAS MEGA",
            description: "+ 1 boisson 1,5L",
            price: "33€",
            deliveryDetails: "+ 2€ en livraison",
        },
        {
            title: "MENU ENFANT",
            description:
                "1 mini pizza au jambon ou 4 nuggets & frites + 1 capri sun + 1 compote",
            price: "6,50€",
        },
    ],
    promos: [
        {
            title: "2 PIZZAS SENIOR",
            description: "Du lundi au jeudi (sauf jour fériés)",
            price: "18,90€",
            deliveryDetails: "A emporter",
        },
        {
            title: "2 PIZZAS MEGA",
            description: "Du lundi au jeudi (sauf jour fériés)",
            price: "24,90€",
            deliveryDetails: "A emporter",
        },
    ],
    products: {
        pizza: { title: "Pizza", productsData: pizzasJSON },
        paninis: { title: "Paninis", productsData: paninisJSON },
        texmex: { title: "Tex-Mex", productsData: texmexJSON },
        salade: { title: "Salade", productsData: saladesJSON },
        sweet: { title: "Desserts", productsData: sweetsJSON },
        boissons: { title: "Boissons", productsData: drinksJSON },
        couscous: {
            title: "Cousous",
            productsData: [
                {
                    title: "Couscous Royal",
                    image: require("./image/couscous-cropped.png"),
                    paragraphe: [
                        "Couscous 3 viandes : Poulet, merguez, agneau. ",
                        "Notre couscous est accompagné de semoule, légumes et bouillon. ",
                        "Veuillez réserver 48 heures à l’avance, merci pour votre compréhension. ",
                    ],
                    price: "couscous",
                    type: "couscous",
                    top: "",
                },
            ],
        },
    },
    filter: {
        all: {
            title: "Tous",
            filterTab: [
                "Tomate",
                "Crème Curry",
                "Crème Fraîche",
                "Sauce barbecue",
                "Sauce salsa",
            ],
        },
        tomato: { title: "Tomates", filterTab: ["Tomate"] },
        cream: { title: "Crème Fraîche", filterTab: ["Crème Fraîche"] },
        other: {
            title: "Autres",
            filterTab: ["Crème Curry", "Sauce Barbecue", "Sauce Salsa"],
        },
    },
    price: {
        drinkPrice: "Bouteille 3€ | Cannette 1,50€",
        couscous: "15€",
        iceCreamPrice: "4€ - 100ml | 7€ - 500ml",
        pizzaprice18: "Junior 9€ | Sénior 13€ | Méga 18€",
        pizzaprice20: "Junior 9€ | Sénior 15€ | Méga 20€",
        pizzaprice21: "Junior 9€ | Sénior 15€ | Méga 21€",
        pizzaprice22: "Junior 9€ | Sénior 16€ | Méga 22€",
        saladeprice: "7,00€",
        saladepricemixte: "5,50€",
        sweetprice: "3,00€",
        paniniprice: "6,00€",
        texmexprice: "5,00€ - 9,00€ ",
        waterPrice: "1€ - 50cl",
    },
    pizzaDetails:
        "Pâte à pizza faite maison la veille au soir, origan sur demande.",
    productDetails:
        "Produits frais, toutes nos viandes sont garanties Halal: jambon de dinde, lardons de veau et chorizo de boeuf.",
    // Technical Config
    menu: [
        { title: "Accueil", link: "/" },
        { title: "La carte", link: "/carte" },
        { title: "Liste d'envie", link: "/favoris" },
    ],
    descriptionLimit: 45,
    iframeLink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.092476695986!2d2.635456676840555!3d49.426065660589835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e7ce85ed9f31bd%3A0x5b4e5b88154a069f!2sLa%20Pause%20Pizza!5e0!3m2!1sfr!2sfr!4v1691174545487!5m2!1sfr!2sfr",
};
export default configData;
