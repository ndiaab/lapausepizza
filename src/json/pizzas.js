const pizzasData = [
    {
        title: "4 Fromages",
        image: require("../image/pizza/pizza-4fromages.png"),
        paragraphe: "Fromage, parmesan, gorgonzola, provolone",
        base: "Tomate",
        price: "pizzaprice21",
        top: "",
    },
    {
        title: "Buffalo",
        image: require("../image/pizza/pizza-buffalo.png"),
        paragraphe: "Fromage, viande hachée, oignons, poivrons",
        base: "Sauce Barbecue",
        price: "pizzaprice22",
        top: "*",
    },
    {
        title: "Burger",
        image: require("../image/pizza/pizza-burger.png"),
        paragraphe:
            "Fromage, viande hachée, cheddar, oignons, cornichons, ketchup",
        base: "Crème Fraîche",
        price: "pizzaprice22",
        top: "",
    },
    {
        title: "Calzone",
        image: require("../image/pizza/pizza-calzone.png"),
        paragraphe: "Fromage, oeuf, au choix: jambon / thon / viande hachée",
        base: "Tomate",
        price: "pizzaprice20",
        top: "",
    },
    {
        title: "Campione",
        image: require("../image/pizza/pizza-campione.png"),
        paragraphe: "Fromage, viande hachée, oeuf, champignons",
        base: "Tomate",
        price: "pizzaprice21",
        top: "",
    },
    {
        title: "Ch’ti",
        image: require("../image/pizza/pizza-chti.png"),
        paragraphe: "Fromage, émincé de poulet, maroilles",
        base: "Crème Fraîche",
        price: "pizzaprice22",
        top: "",
    },
    {
        title: "Chèvre",
        image: require("../image/pizza/pizza-chevremiel.png"),
        paragraphe: "Fromage, chèvre, olives",
        base: "Crème Fraîche",
        price: "pizzaprice22",
        top: "*",
    },
    {
        title: "Chèvre miel",
        image: require("../image/pizza/pizza-chevremiel.png"),
        paragraphe: "Fromage, chèvre, miel",
        base: "Crème Fraîche",
        price: "pizzaprice22",
        top: "",
    },
    {
        title: "Chicken",
        image: require("../image/pizza/pizza-chicken.png"),
        paragraphe: "Fromage, émincé de poulet, pommes de terre",
        base: "Crème Fraîche",
        price: "pizzaprice22",
        top: "",
    },
    {
        title: "Délicieuse",
        image: "../image/pizza/",
        paragraphe:
            "Fromage, chèvre, poivrons, oignons, émincé de poulet, thon",
        base: "Crème Fraîche",
        price: "pizzaprice22",
        top: "",
    },
    {
        title: "Dijonnaise",
        image: require("../image/pizza/pizza-dijonnaise.png"),
        paragraphe:
            "Fromage, émincé de poulet, oignons, tomates en rondelles, moutarde à l’ancienne",
        base: "Crème Fraîche",
        price: "pizzaprice22",
        top: "",
    },
    {
        title: "Exotique",
        image: require("../image/pizza/pizza-exotique.png"),
        paragraphe: "Fromage, jambon, viande hachée, champignons",
        base: "Tomate",
        price: "pizzaprice22",
        top: "",
    },
    {
        title: "Fruits de mer",
        image: require("../image/pizza/pizza-seafood.png"),
        paragraphe: "Fromage, cocktail de fruits de mer",
        base: "Tomate",
        price: "pizzaprice21",
        top: "*",
    },
    {
        title: "Indiana",
        image: require("../image/pizza/pizza-indiana.png"),
        paragraphe: "Fromage, poulet tikka, fromage à raclette",
        base: "Crème Curry",
        price: "pizzaprice22",
        top: "",
    },
    {
        title: "Kebab",
        image: require("../image/pizza/pizza-kebab.png"),
        paragraphe: "Fromage, viande de kebab, tomates Fraîches, oignons",
        base: "Tomate",
        price: "pizzaprice22",
        top: "",
    },
    {
        title: "Marguerita",
        image: require("../image/pizza/pizza-marguerita.png"),
        paragraphe: "Tomate, Fromage",
        base: "Tomate",
        price: "pizzaprice18",
        top: "",
    },
    {
        title: "Mexicaine",
        image: require("../image/pizza/pizza-mexicaine.png"),
        paragraphe:
            "Fromage, viande hachée, tomates en rondelles, champignons, olives",
        base: "Tomate",
        price: "pizzaprice21",
        top: "",
    },
    {
        title: "Milano",
        image: "../image/pizza/",
        paragraphe: "Fromage, lardons, pommes de terre",
        base: "Crème Fraîche",
        price: "pizzaprice22",
        top: "",
    },
    {
        title: "Napolitaine",
        image: require("../image/pizza/pizza-napolitaine.png"),
        paragraphe: "Fromage, anchois, champignons, olives",
        base: "Tomate",
        price: "pizzaprice22",
        top: "",
    },
    {
        title: "New-York",
        image: require("../image/pizza/pizza-newyork.png"),
        paragraphe: "Fromage, jambon, viande hachée, merguez",
        base: "Tomate",
        price: "pizzaprice22",
        top: "",
    },
    {
        title: "Norvégienne",
        image: require("../image/pizza/pizza-norvegienne.png"),
        paragraphe: "Fromage, saumon",
        base: "Crème Fraîche",
        price: "pizzaprice22",
        top: "",
    },
    {
        title: "Orientale",
        image: require("../image/pizza/pizza-orientale.png"),
        paragraphe: "Fromage, merguez, oeuf, champignons",
        base: "Tomate",
        price: "pizzaprice21",
        top: "",
    },
    {
        title: "Paysanne",
        image: require("../image/pizza/pizza-paysanne.png"),
        paragraphe: "Fromage, jambon, oignons, pommes de terre",
        base: "Crème Fraîche",
        price: "pizzaprice22",
        top: "",
    },
    {
        title: "Pêcheur",
        image: require("../image/pizza/pizza-pecheur.png"),
        paragraphe: "Fromage, thon, oeuf, olives",
        base: "Tomate",
        price: "pizzaprice20",
        top: "",
    },
    {
        title: "Pepper",
        image: "",
        paragraphe:
            "Fromage, viande hachée, oignons, tomates en rondelles, sauce poivre",
        base: "Crème Fraîche",
        price: "pizzaprice22",
        top: "",
    },
    {
        title: "Raclette",
        image: require("../image/pizza/pizza-raclette.png"),
        paragraphe:
            "Fromage, fromage à raclette, jambon, viande hachée, pommes de terre",
        base: "Crème Fraîche",
        price: "pizzaprice22",
        top: "",
    },
    {
        title: "Régina",
        image: require("../image/pizza/pizza-regina.png"),
        paragraphe: "Fromage, chorizo, champignons, olives",
        base: "Tomate",
        price: "pizzaprice21",
        top: "",
    },
    {
        title: "Reine",
        image: require("../image/pizza/pizza-reine.png"),
        paragraphe: "Fromage, jambon, champignons",
        base: "Tomate",
        price: "pizzaprice20",
        top: "",
    },
    {
        title: "Royale Dionysienne",
        image: require("../image/pizza/pizza-dionysienne.png"),
        paragraphe: "Fromage, jambon, lardons, chorizo",
        base: "Tomate",
        price: "pizzaprice22",
        top: "",
    },
    {
        title: "Salsa",
        image: require("../image/pizza/pizza-salsa.png"),
        paragraphe: "Fromage, chorizo, merguez, poivrons",
        base: "Sauce Salsa",
        price: "pizzaprice22",
        top: "",
    },
    {
        title: "Suprème Cheese",
        image: require("../image/pizza/pizza-supremecheese.png"),
        paragraphe: "Fromage, raclette, reblochon, maroilles",
        base: "Crème Fraîche",
        price: "pizzaprice22",
        top: "",
    },
    {
        title: "Tartiflette",
        image: require("../image/pizza/pizza-tartiflette.png"),
        paragraphe: "Fromage, lardons, pommes de terre, oignons, reblochon",
        base: "Crème Fraîche",
        price: "pizzaprice22",
        top: "",
    },
    {
        title: "Tex Mex",
        image: require("../image/pizza/pizza-texmex.png"),
        paragraphe: "Fromage, poivrons, oignons, viande hachée, champignons",
        base: "Crème Fraîche",
        price: "pizzaprice22",
        top: "",
    },
    {
        title: "Végétarienne",
        image: "../image/pizza/",
        paragraphe: "Fromage, olives, oignons, tomates Fraîches, poivrons",
        base: "Tomate",
        price: "pizzaprice20",
        top: "",
    },
    {
        title: "Western",
        image: require("../image/pizza/pizza-western.png"),
        paragraphe:
            "Fromage, émincé de poulet, pommes de terre, olives, champignons",
        base: "Crème Fraîche",
        price: "pizzaprice22",
        top: "",
    },
];

export default pizzasData;
