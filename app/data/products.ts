export const products = [
  {
    id: 1,
    name: "Ecograf VINNO G86",
    category: "Ecografe",
    brand: "VINNO",
    price: null, // Ask for Quote
    currency: "EUR",
    image: "https://numeris.ro/wp-content/uploads/2021/11/ecograf-stationar-vinno-g86-900.jpg", 
    stock: true,
    badge: "Flagship",
    description: "VINNO G86 este vârful de gamă, combinând platforma RF cu tehnologia VLucid pentru o claritate a imaginii fără precedent.",
    specs: [
      { label: "Platformă", value: "RF (Radiofrecvență)" },
      { label: "Ecran", value: "23.5 inch LED" },
      { label: "Aplicații", value: "Cardio, General, OB/GYN" }
    ]
  },
  {
    id: 2,
    name: "Electrocardiograf 12 Canale",
    category: "Cardiologie",
    brand: "Comen",
    price: 4200, 
    currency: "RON",
    image: "https://numeris.ro/wp-content/uploads/2022/08/ekg12.jpg",
    stock: true,
    badge: "Stoc Limitat",
    description: "EKG cu 12 derivații simultane, interpretare automată și imprimantă termică integrată.",
    specs: [
        { label: "Canale", value: "12 Simultane" },
        { label: "Memorie", value: "1000 Pacienți" },
        { label: "Baterie", value: "4 Ore Autonomie" }
    ]
  },
  {
    id: 3,
    name: "Ecograf VINNO E35",
    category: "Ecografe",
    brand: "VINNO",
    price: null, 
    currency: "EUR",
    image: "https://numeris.ro/wp-content/uploads/2021/11/ecograf-stationar-vinno-e35-642.jpg",
    stock: true,
    badge: "Best Seller",
    description: "Echilibrul perfect între performanță și preț. Ideal pentru clinici private multidisciplinare.",
    specs: [
        { label: "Sonde", value: "3 Porturi Active" },
        { label: "Ecran", value: "19 inch LED" }
    ]
  },
  {
    id: 4,
    name: "Roesys X-Twin Digital",
    category: "Radiologie",
    brand: "Roesys",
    price: null,
    currency: "EUR",
    image: "https://numeris.ro/wp-content/uploads/2021/06/Sistem-Digital-de-RadiologieFluoroscopie-X-Twin-RoeSys-Germania.jpg", 
    stock: false, // Made to order
    badge: "Made in Germany",
    description: "Sistem radiologic digital direct (DR) cu detector wireless și doză redusă de radiații.",
    specs: [
        { label: "Putere", value: "50kW / 65kW" },
        { label: "Detector", value: "CsI Wireless" }
    ]
  },
  {
    id: 5,
    name: "Ecograf Portabil VINNO 6",
    category: "Ecografe",
    brand: "VINNO",
    price: null,
    currency: "EUR",
    image: "https://numeris.ro/wp-content/uploads/2021/11/ecograf-portabil-color-vinno-6-884.jpg",
    stock: true,
    badge: "Ultra-Light",
    description: "Puterea unui ecograf staționar într-un format de laptop. Carcasă din magneziu, ultra-ușor.",
    specs: [
        { label: "Greutate", value: "3.5 kg" },
        { label: "Boot", value: "< 30 secunde" }
    ]
  },
  {
    id: 6,
    name: "VINNO Q Ultraportabil",
    category: "Ecografe",
    brand: "VINNO",
    price: null,
    currency: "EUR",
    image: "https://numeris.ro/wp-content/uploads/2021/12/CE.jpg",
    stock: true,
    badge: "Wireless",
    description: "Ecograf ultraportabil de buzunar, ideal pentru urgențe și vizite la domiciliu. Include tabletă gratuită.",
    specs: [
        { label: "Tip", value: "Wireless / Pocket" },
        { label: "Conectivitate", value: "WiFi / Bluetooth" }
    ]
  },
  {
    id: 7,
    name: "Videoprinter Sony UP-X898MD",
    category: "Periferice",
    brand: "Sony",
    price: 4800,
    currency: "RON",
    image: "https://numeris.ro/wp-content/uploads/2022/01/videoprinter.jpg",
    stock: true,
    badge: "Hybrid",
    description: "Imprimantă medicală A6 analogică și digitală hibridă alb-negru. Viteză mare de imprimare.",
    specs: [
        { label: "Tehnologie", value: "Termic Direct" },
        { label: "Interfață", value: "USB & Analog" }
    ]
  },
  {
    id: 8,
    name: "Ecograf VINNO X1",
    category: "Ecografe",
    brand: "VINNO",
    price: null,
    currency: "EUR",
    image: "https://numeris.ro/wp-content/uploads/2021/11/ecograf-stationar-vinno-x1-929.jpg",
    stock: true,
    badge: "Buget",
    description: "Sistem staționar compact și accesibil, perfect pentru cabinete individuale și medicină de familie.",
    specs: [
        { label: "Ecran", value: "15.6 inch LED" },
        { label: "Greutate", value: "Compact" }
    ]
  }
];
