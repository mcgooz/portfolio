const projectData = [
  {
    id: 0,
    title: "Crypto Converter",
    link: "https://github.com/mcgooz/crypto_converter",
    linkText: "View on Github",
    description: "My Final Project for CS50P: A lightweight euro to crypto converter",
    details: [
      "A Python app that uses Tkinter for the GUI and retrieves live price data via the Binance API.", 
      "It allows you to convert between euros and a selection of popular cryptocurrencies."],
    screenshots: [
      "/assets/images/cryptoconv1.png",
    ],
    featuredImage: "/assets/images/cryptoconv1.png",
  },
  {
    id: 1,
    title: "FPL Viewer",
    link: "https://github.com/mcgooz/FPLViewer",
    linkText: "View on Github",
    description: "Check your EPL fantasy football score",
    details: [
      "Another little Python app that uses Tkinter for the GUI and gets live data via the official FPL API.",
      "Enter your team ID to get the latest team info."
    ],
    screenshots: [
      "/assets/images/footy1.png",
    ],
    featuredImage: "/assets/images/footy1.png",
  },
  {
    id: 2,
    title: "English <-> Catalan Translator",
    link: "https://github.com/mcgooz/eng_cat_translator",
    linkText: "View on Github",
    description: "A basic English-Catalan translator",
    details: [
      "Built with Python and Tkinter for the GUI.",
      "It makes use of the DACCO ('Diccionari Obert Català de Codi Obert') XML database.",
      "Search for a word in English or Catalan to see the translation."
      
    ],
    screenshots: [
      "/assets/images/eng-cat1.png",
    ],
    featuredImage: "/assets/images/eng-cat1.png",
  },
  {
    id: 3,
    title: "Audiodive",
    link: "https://github.com/mcgooz/Audiodive",
    linkText: "View on Github",
    description: "My Final Project for CS50X: A Spotify webplayer with a twist",
    details: [
      "Built with Python/Flask, JavaScript, HTML & CSS and gets data from the Spotify API via the Spotipy library.", 
      "Audiodive (in its original form) showed hidden stats like popularity, key and tempo. You could also search for similar or random tracks.",
      "Additionally, it used the numerical values for 'valence', 'energy', 'danceability' and 'tempo' to create a (almost) unique shifting background for each track.",
      "Sadly, in November 2024, Spotify deprecated many of the API endpoints, thus removing a lot of functionality."
    ],
    screenshots: [ 
      "/assets/images/audiodive1.png",
      "/assets/images/audiodive2.png",
    ],
    featuredImage: "/assets/images/audiodive2.png",
  },
  {
    id: 4,
    title: "SousChef",
    description: "My Final Project for CS50W: A digital recipe book",
    link: "https://github.com/mcgooz/SousChef",
    linkText: "View on Github",
    details: [
      "Built with Python/Django, JavaScript, HTML & CSS and retrieves data from the Spoonacular API.",
      "With a clean, minimalist layout and a fully responsive design, SousChef lets users create their own recipes, browse those of others, and add recipes to their favourites.",
      "With the Spoonacular API, users can search a large database of ingredients and view the corresponding nutritional information."
    ],
    
    screenshots: [ 
      "/assets/images/souschef1.png",
      "/assets/images/souschef2.png",
      "/assets/images/souschef3.png",
      "/assets/images/souschef4.png",
    ],
    featuredImage: "/assets/images/souschef1.png",
  },
  {
    id: 5,
    title: "Soil Life UK",
    link: "",
    linkText: "Coming Soon",
    description: "A small business website and store",
    details: [
      "Built with Python/Django, JavaScript, HTML & CSS and implements secure payments via the Stripe API.",
      "Includes user accounts with authentication, email verification and secure password reset.",
      "Boasts a dynamic, responsive UI and a bespoke, clean and minimalist design."
    ],
    screenshots: [
      "/assets/images/soilife1.png",
      "/assets/images/soilife2.png",
      "/assets/images/soilife3.png",
      "/assets/images/soilife4.png",
      "/assets/images/soilife5.png",
    ],
    featuredImage: "/assets/images/soilife1.png",
  },
];

export default projectData;