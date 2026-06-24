import peaks from "../assets/images/products/Peaks.png";
import ftof from "../assets/images/products/ftof.png";
import chase from "../assets/images/products/CHASE.png";
import bloom from "../assets/images/products/Bloom.jpg.jpeg";


const products = [
  {
    id: 1,
    name: "The Mountains Are Calling",
    price: 899,
    image: peaks,

    category: "THE PEAKS",
    collection: "peaks",
    description:
      "Inspired by mountains, exploration and freedom.",
  },

  {
    id: 2,
    name: "Chase Greatness",
    price: 699,
    image: chase ,
    category: "THE STREETS",
    collection: "streets",
    description:
      "Built for everyday streetwear comfort.",
  },

  {
    id: 3,
    name: "Face To Face",
    price: 899,
    image:ftof,
    category: "THE ROOTS",
    collection: "roots",
    description:
      "Inspired by heritage and identity.",
  },

  {
    id: 4,
    name: "Bloom like a Sunflower",
    price: 749,
    image:bloom ,
    category: "THE LEGACY",
    collection: "legacy",
    description:
      "Modern streetwear with Indian soul.",
  },
];

export default products;