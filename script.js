const product = [
  {
    id: 1,
    image: "img/motobike.jpeg",
    title: "motorbike",
    price: "$500",
  },
  {
    id: 2,
    image: "image/bicylce.jpeg",
    title: "bicylce",
    price: "$100",
  },
  {
    id: 3,
    image: "image/bag.jpeg",
    title: "bag",
    price: "$20",
  },
  {
    id: 4,
    image: "image/bag.jpeg",
    title: "trouser",
    price: "$50",
  },
  {
    id: 5,
    image: "image/short.jpeg",
    title: "short",
    price: "$40",
  },
  {
    id: 6,
    image: "image/chair.jpeg",
    title: "chair",
    price: "$80",
  },
  {
    id: 7,
    image: "image/table.jpeg",
    title: "table",
    price: "$100",
  },
  {
    id: 8,
    image: "image/thermos.jpeg",
    title: "thermos",
    price: "$50",
  },
  {
    id: 9,
    image: "image/jacket.jpeg",
    title: "jacket",
    price: "$90",
  },
  {
    id: 10,
    image: "image/shoes.jpeg",
    title: "shoes",
    price: "$120",
  },
];

const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];

let cart = document.getElementById("root");
cart.innerHTML = categories.map((item) => {
  var { image, title, price } = item;
  return `<div class="box">
        <div class="img-box">
            <img src=${image}></img>
        </div>
        <div class="left">
            <p>${title}</p>
            <h2>${price}</h2>
            <button>Add to Cart</button>
        </div>
    </div>`;
}).join;
