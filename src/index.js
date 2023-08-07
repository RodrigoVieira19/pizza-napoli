import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const pizzaData = [
  {
    name: "Pizza Focaccia",
    soldOut: false,
    price: 4.87,
    photoName: "pizzas/focaccia.jpg",
  },
  {
    name: "Pizza Funghi",
    soldOut: false,
    price: 5.87,
    photoName: "pizzas/funghi.jpg",
  },
  {
    name: "Pizza Margherita",
    soldOut: false,
    price: 6.57,
    photoName: "pizzas/margherita.jpg",
  },
  {
    name: "Pizza Prosciutto",
    soldOut: true,
    price: 6.47,
    photoName: "pizzas/prosciutto.jpg",
  },

  {
    name: "Pizza Spinaci",
    soldOut: false,
    price: 5.35,
    photoName: "pizzas/spinaci.jpg",
  },
];

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <PromotionBox imagePosition="left" />
      <PromotionBox imagePosition="right" />
      <Menu />
      <Footer />
    </div>
  );
}

/* Navbar */
function Navbar() {
  const openHour = 18;
  const closeHour = 22;
  const currentHour = new Date().getHours();
  const isOpen = currentHour >= openHour && currentHour <= closeHour;

  return (
    <nav className="navbar">
      <p>
        Benvenuti, amici! {isOpen ? "We're currently open" : "We're closed"}
      </p>
    </nav>
  );
}
/* Navbar end*/

/* Header */
function Header() {
  return (
    <header className="header-img">
      <div className="header-content">
        <h1>The best pizza in Naples</h1>
        <button className="button">Order Now</button>
      </div>
    </header>
  );
}
/* Header end*/

/* Promotion Box*/
function PromotionBox({ imagePosition }) {
  const isImageOnLeft = imagePosition === "left";
  const imagePath = isImageOnLeft ? "./pizzas/img-1.jpg" : "./pizzas/img-2.jpg";

  return (
    <div
      className={`promotion-box-container ${
        isImageOnLeft ? "image-left" : "image-right"
      }`}
    >
      <div className="promotion-box-image">
        <img src={imagePath} alt="PromotionImage" />
      </div>
      <div className="promotion-box-texts-container">
        <h1>
          Wanna try <span> the best </span> Pizza in Naples?
        </h1>
        <p>
          Hot, crispy pizza pops and unbeatable deals await.<br></br> Bring a
          friend and enjoy the taste.
        </p>
        <button className="button2">Proceed to Order</button>
      </div>
    </div>
  );
}
/* Promotion Box end*/

/* Menu */
function Menu() {
  return (
    <div className="menu">
      {pizzaData.map((pizza) => (
        <PizzaMenu key={pizza.name} menuObj={pizza} />
      ))}
    </div>
  );
}

function PizzaMenu(props) {
  const { photoName, name, soldOut, price } = props.menuObj;

  return (
    <div className="item">
      <img src={photoName} alt={name} className={soldOut ? "imgSoldOut" : ""} />
      <div className="content">
        <h1>{name}</h1>
        {soldOut ? <p>Sold Out</p> : <span>Avaliable</span>}
        <h2>${price}</h2>
        <button className={soldOut ? "btnFalse" : "btnTrue"}>
          {soldOut ? "Sold Out" : "Order Now"}
        </button>
      </div>
    </div>
  );
}
/* Menu end*/

/* Footer */
function Footer() {
  return (
    <div className="footer">
      <p className="left-text">
        Via Raffaele Mattioli 12, Naples{" "}
        <FontAwesomeIcon
          icon={faLocationDot}
          style={{ color: "#fff", marginLeft: "5px" }}
        />
      </p>
      <p className="right-text">18:00 PM to 22:00 PM everyday</p>
    </div>
  );
}
/* Footer end */

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
