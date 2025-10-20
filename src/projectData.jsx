const ProjectData = [
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
      "assets/images/cryptoconv1.jpeg",
    ],
    featuredImage: "assets/images/cryptoconv1.jpeg",
  },
  {
    id: 1,
    title: "FPL Viewer",
    link: "https://github.com/mcgooz/FPLViewer",
    linkText: "View on Github",
    description: "Check your EPL fantasy football score",
    details: [
      "Another little Python app that uses Tkinter for the GUI and gets live data via the official FPL API.",
      "Enter a team ID to get the latest team info, such as rank, score and team value."
    ],
    screenshots: [
      "assets/images/footy1.jpeg",
    ],
    featuredImage: "assets/images/footy1.jpeg",
  },
  {
    id: 2,
    title: "English - Catalan Translator",
    link: "https://github.com/mcgooz/eng_cat_translator",
    linkText: "View on Github",
    description: "A basic English-Catalan translator",
    details: [
      "Built with Python, Tkinter for the GUI.",
      "It makes use of the DACCO ('Diccionari Obert Català de Codi Obert') XML database.",
      "Search for a word in English or Catalan to see the translation."
      
    ],
    screenshots: [
      "assets/images/eng-cat1.jpeg",
    ],
    featuredImage: "assets/images/eng-cat1.jpeg",
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
      "Additionally, it used the numerical values for 'valence', 'energy', 'danceability' and 'tempo' to create a shifting, colourful background for each track.",
      "Sadly, in November 2024, Spotify deprecated many of the API endpoints, thus removing a lot of the original functionality."
    ],
    screenshots: [ 
      "assets/images/audiodive1.jpeg",
      "assets/images/audiodive2.jpeg",
    ],
    featuredImage: "assets/images/audiodive2.jpeg",
  },
  {
    id: 4,
    title: "SousChef",
    description: "My Final Project for CS50W: A digital recipe book",
    link: "https://github.com/mcgooz/SousChef",
    linkText: "View on Github",
    details: [
      "Built with Python/Django, JavaScript, HTML & CSS and retrieves data from the Spoonacular API.",
      "With a clean, minimalist layout and a fully responsive design, SousChef lets users create recipes, browse those of others, and keep a list of favourites.",
      "Via the Spoonacular API, users can search a large database of ingredients and view the corresponding nutritional information."
    ],
    
    screenshots: [ 
      "assets/images/souschef1.jpeg",
      "assets/images/souschef2.jpeg",
      "assets/images/souschef3.jpeg",
      "assets/images/souschef4.jpeg",
    ],
    featuredImage: "assets/images/souschef1.jpeg",
  },
  {
    id: 5,
    title: "Soil Life UK",
    link: "https://www.soil-lifeuk.com/",
    linkText: "Visit the website",
    description: "A small business website and store",
    details: [
      "Built with Python/Django, JavaScript, HTML & CSS, Bootstrap and implements secure payments via the Stripe API.",
      "Features user accounts with authentication, email verification and secure password reset.",
      "Boasts a dynamic, responsive UI and a bespoke, clean and minimalist design.",
      "Includes an advanced admin panel for managing orders, results, and site content with a customised UI via the Jazzmin library.",
      "Powered by a Postgres Database and S3 storage via Supabase for media files and customer test results. Deployed securely on Digital Ocean.",
    ],
    screenshots: [
      "assets/images/soilife1.jpeg",
      "assets/images/soilife2.jpeg",
      "assets/images/soilife3.jpeg",
      "assets/images/soilife4.jpeg",
      "assets/images/soilife5.jpeg",
    ],
    featuredImage: "assets/images/soilife1.jpeg",
  },
  {
    id: 6,
    title: "Orbit Axis Spin",
    link: "https://orbitaxisspin.onrender.com/",
    linkText: "Visit the website",
    description: "My humble record label's website",
    details: [
      "Made with React, Tailwind CSS, and the Motion library for advanced animations.",
      "A straightforward website that shows off my eye for detail and versatility in design (and my music).",
    ],
    screenshots: [
      "assets/images/OAS1.jpeg",
      "assets/images/OAS2.jpeg",
      "assets/images/OAS3.jpeg",
    ],
    featuredImage: "assets/images/OAS1.jpeg",
  },
  {
    id: 7,
    title: "Royalties Dashboard",
    link: "https://royalties-dashboard.streamlit.app/",
    linkText: "Visit the website",
    description: "A tool to anaylse and visualise royalty reports",
    details: [
      "Built with Python and the Streamlit library.",
      "An easy-to-use app that helps break down the many rows of data in the Symphonic Distribution royalty reports.",
      "You can filter by artist and/or reporting period and then, for each track, view data for DSPs and countries."
    ],
    screenshots: [
      "assets/images/rd1.jpg",
      "assets/images/rd2.jpg",
      "assets/images/rd3.jpg",
    ],
    featuredImage: "assets/images/rd1.jpg",
  },
];

export default ProjectData;