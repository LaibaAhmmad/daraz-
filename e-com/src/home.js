import logo from "./images/Exclusive.png";
import slider from "./images/Frame 560.png";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faMagnifyingGlass,
  faArrowRight,
  faArrowLeft,
  faMobile,
  faComputer,
  faClock,
  faCamera,
  faHeadphones,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";
import applelogo from "./images/applelogo.png";
import Game from "./images/gamestation.png";
import keyboard from "./images/Frame 570.png";
import moniter from "./images/moniter.png";
import chair from "./images/chair.png";
import coat from "./images/northcoat.png";
import bag from "./images/bag.png";
import cpu from "./images/cpu.png";
import bookshelf from "./images/bookshelf.png";
import camera from "./images/camera.png";
import cereal from "./images/cereal.png";
import products from "./images/facewash.png";
import cleats from "./images/cleats.png";
import Jacket from "./images/Jacket.png";
import Toycar from "./images/Toycar.png";
import Laptop from "./images/laptop.png";
import Gamepad from "./images/usbgamepad.png";
import pic1 from "./images/Frame 684.png";
import pic2 from "./images/Frame 685.png";
import pic3 from "./images/Frame 686.png";
import pic4 from "./images/Frame 687.png";
import icon1 from "./images/Icon-Customer service.png";
import icon2 from "./images/icon-delivery.png";
import icon3 from "./images/Icon-secure.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <img src={logo} alt="not found" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <a href="Home" className="nav-home">
              Home
            </a>
          </li>
          <li>
            <a href="Contact" className="nav-a">
              Contact
            </a>
          </li>
          <li>
            <a href="About" className="nav-a">
              About
            </a>
          </li>
          <li>
            <a href="Sign Up" className="nav-a">
              Sign Up
            </a>
          </li>
        </ul>
      </div>
      <div>
        <input
          type="text"
          className="nav-input"
          placeholder="What are you looking for?"
        />
        <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
        <FontAwesomeIcon className="nav-icons" icon={faCartShopping} />
        <FontAwesomeIcon className="nav-icons" icon={faHeart} />
      </div>
    </nav>
  );
}
function Header() {
  return (
    <div className="Header">
      <div className="Sidebar">
        <ul>
          <li>
            <select className="dropdown1">
              <option>Women's Fashion</option>
              <option>Skirts</option>
              <option>Tops</option>
              <option>Western</option>
            </select>
          </li>
          <li>
            <select className="dropdown2">
              <option>Men's Fashion</option>
              <option>Pants</option>
              <option>Tradational</option>
              <option>Latest</option>
            </select>
          </li>
          <li>Electronics</li>
          <li>Home & Lifestyle</li>
          <li>Medicine</li>
          <li>Sports and Outdoor</li>
          <li>Baby's and Toys</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>
      </div>
      <div className="Slider">
        <img src={slider} alt="not found" className="header-img" />
        <div className="slider-content">
          <div className="slider-logo">
            <img src={applelogo} alt="not found" />
            <span>IPhone 14 Series</span>
          </div>
          <div>
            <h1>
              Up to 10%
              <br /> Off Voucher
            </h1>
            <h4>
              <a href="Shop">Shop Now</a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

function Sales() {
  return (
    <>
      <section className="pointer-bl">
        <div className="block"></div>
        <b>
          <p>Today's</p>
        </b>
      </section>
      <section className="Sales">
        <div>
          <h1>Flash Sales</h1>
        </div>
        <div>
          <p>Days</p>
          <p className="digit">00</p>
        </div>
        <div>
          <p>Minutes</p>
          <p className="digit">00</p>
        </div>
        <div>
          <p>Hours</p>
          <p className="digit">00</p>
        </div>
        <div>
          <p>Seconds</p>
          <p className="digit">00</p>
        </div>
        <div className="sale-icons">
          <FontAwesomeIcon className="icons" icon={faArrowLeft} />
          <FontAwesomeIcon className="icons" icon={faArrowRight} />
        </div>
      </section>
      <section className="Sales-cards">
        <div>
          <img src={Game} alt="not found" className="Shop-img" />
          <button className="Add-to-cart">Add to Cart</button>
          <h3>HAVIT HV-G92 Gamepad</h3>
          <div className="price">
            <h4 className="after">$120</h4>
            <h4 className="before">$320</h4>
          </div>
        </div>
        <div>
          <img src={keyboard} alt="not found" className="Shop-img" />
          <button className="Add-to-cart">Add to Cart</button>
          <h3>AK-900 Wired Keyboard</h3>
          <div className="price">
            <h4 className="after">$120</h4>
            <h4 className="before">$320</h4>
          </div>
        </div>
        <div>
          <img src={moniter} alt="not found" className="Shop-img" />
          <button className="Add-to-cart">Add to cart</button>
          <h3>IPS LCD GAMING MONITER</h3>
          <div className="price">
            <h4 className="after">$120</h4>
            <h4 className="before">$320</h4>
          </div>
        </div>
        <div>
          <img src={chair} alt="not found" className="Shop-img" />
          <button className="Add-to-cart">Add to Cart</button>
          <h3>S-SERIES COMFORT CHAIR</h3>
          <div className="price">
            <h4 className="after">$120</h4>
            <h4 className="before">$320</h4>
          </div>
        </div>
      </section>
      <div className="btn-div">
        <button className="sales-btn">View All Products</button>
      </div>
    </>
  );
}
function Catagories() {
  return (
    <div>
      <section className="pointer-bl">
        <div className="block"></div>
        <b>
          <p>Catagories</p>
        </b>
      </section>
      <section>
        <div className="catagories-head">
          <h1>Browse By Catagories</h1>
          <div>
            <FontAwesomeIcon className="icons" icon={faArrowLeft} />
            <FontAwesomeIcon className="icons" icon={faArrowRight} />
          </div>
        </div>
      </section>
      <section>
        <div className="catagories-cards">
          <div>
            <FontAwesomeIcon className="cat-icons" icon={faMobile} />
            <p>Phones</p>
          </div>
          <div>
            <FontAwesomeIcon className="cat-icons" icon={faComputer} />
            <p>Computers</p>
          </div>
          <div>
            <FontAwesomeIcon className="cat-icons" icon={faClock} />
            <p>Smart Watch</p>
          </div>
          <div className="camera">
            <FontAwesomeIcon className="cat-icons" icon={faCamera} />
            <p>Camera </p>
          </div>
          <div>
            <FontAwesomeIcon className="cat-icons" icon={faHeadphones} />
            <p>Headphones</p>
          </div>
          <div>
            <FontAwesomeIcon className="cat-icons" icon={faGamepad} />
            <p>Gaming</p>
          </div>
        </div>
      </section>
    </div>
  );
}
function BestSelling() {
  return (
    <div>
      <section className="pointer-bl">
        <div className="block"></div>
        <b>
          <p>ThisMonth</p>
        </b>
      </section>
      <section className="bstSell-head">
        <h1>Best Selling Products</h1>
        <div>
          <button className="bst-btn">View All</button>
        </div>
      </section>
      <section className="bstSell-cards">
        <div>
          <img src={coat} alt="not found" className="Shop-img" />
          <button className="Add-to-cart">Add to Cart</button>
          <h3>The north coat</h3>
          <div className="price">
            <h4 className="after">$120</h4>
            <h4 className="before">$320</h4>
          </div>
        </div>
        <div>
          <img src={bag} alt="not found" className="Shop-img" />
          <button className="Add-to-cart">Add to Cart</button>
          <h3>gucci duffle bag</h3>
          <div className="price">
            <h4 className="after">$120</h4>
            <h4 className="before">$320</h4>
          </div>
        </div>
        <div>
          <img src={cpu} alt="not found" className="Shop-img" />
          <button className="Add-to-cart">Add to Cart</button>
          <h3>RGB liquid cpu cooler</h3>
          <div className="price">
            <h4 className="after">$120</h4>
            <h4 className="before">$320</h4>
          </div>
        </div>
        <div>
          <img src={bookshelf} alt="not found" className="Shop-img" />
          <button className="Add-to-cart">Add to Cart</button>

          <h3>Small Bookshelf</h3>
          <div className="price">
            <h4 className="after">$120</h4>
            <h4 className="before">$320</h4>
          </div>
        </div>
      </section>
    </div>
  );
}
function MusicFrame() {
  return (
    <div className="frame">
      <h5>Catagories</h5>
      <h1>
        Enhance Your <br />
        Music Experience
      </h1>
      <section className="frame-timer">
        <div>
          <span>
            <b>10</b>
          </span>
          <br />
          <span>Days</span>
        </div>
        <div>
          <span>
            <b>15</b>
          </span>
          <br />
          <span>Hrs </span>
        </div>
        <div>
          <span>
            <b>30</b>
          </span>
          <br />
          <span>Mins</span>
        </div>
        <div>
          <span>
            <b>20</b>
          </span>
          <br />
          <span>Secs</span>
        </div>
      </section>
      <button className="music-btn">Buy Now</button>
    </div>
  );
}
function Products() {
  return (
    <div className="Products">
      <section className="pointer-bl">
        <div className="block"></div>
        <b>
          <p>Our Products</p>
        </b>
      </section>
      <section>
        <div className="product-head">
          <h1>Explore Our Products</h1>
          <div>
            <FontAwesomeIcon className="icons" icon={faArrowLeft} />
            <FontAwesomeIcon className="icons" icon={faArrowRight} />
          </div>
        </div>
      </section>
      <section className="Product-cards">
        <div>
          <img src={cereal} alt="not found" className="Shop-img" />
          <button className="Add-to-cart">Add to Cart</button>
          <h3>Breed Dry Dog food</h3>
          <div className="price">
            <h4 className="after">$120</h4>
          </div>
        </div>
        <div>
          <img src={camera} alt="not found" className="Shop-img" />
          <button className="Add-to-cart">Add to Cart</button>
          <h3>Canon Dos DSLR Camera</h3>
          <div className="price">
            <h4 className="after">$120</h4>
          </div>
        </div>
        <div>
          <img src={Laptop} alt="not found" className="Shop-img" />
          <button className="Add-to-cart">Add to Cart</button>
          <h3>ASUS Gaming Laptop</h3>
          <div className="price">
            <h4 className="after">$120</h4>
          </div>
        </div>
        <div>
          <img src={products} alt="not found" className="Shop-img" />
          <button className="Add-to-cart">Add to Cart</button>
          <h3>Curology Product Set</h3>
          <div className="price">
            <h4 className="after">$120</h4>
          </div>
        </div>
      </section>
      <section className="Product-cards">
        <div>
          <img src={Toycar} alt="not found" className="Shop-img" />
          <button className="Add-to-cart">Add to Cart</button>
          <h3>Kids Electric Car</h3>
          <div className="price">
            <h4 className="after">$120</h4>
          </div>
          <div>
            <input type="radio" name="Toycar-color" className="red" />
            <input type="radio" name="Toycar-color" />
          </div>
        </div>
        <div>
          <img src={cleats} alt="not found" className="Shop-img" />
          <button className="Add-to-cart">Add to Cart</button>
          <h3>Jr Zoom Soccer Cleats</h3>
          <div className="price">
            <h4 className="after">$120</h4>
          </div>
          <div>
            <input type="radio" name="cleat-color" className="red" />
            <input type="radio" name="cleat-color" />
          </div>
        </div>
        <div>
          <img src={Gamepad} alt="not found" className="Shop-img" />
          <button className="Add-to-cart">Add to Cart</button>
          <h3>GP11 Shooter Gamepad</h3>
          <div className="price">
            <h4 className="after">$120</h4>
          </div>
          <div>
            <input type="radio" name="gamepad-color" className="red" />
            <input type="radio" name="gamepad-color" />
          </div>
        </div>
        <div>
          <img src={Jacket} alt="not found" className="Shop-img" />
          <button className="Add-to-cart">Add to Cart</button>
          <h3>Quilted Satin Jacket</h3>
          <div className="price">
            <h4 className="after">$120</h4>
          </div>
          <div>
            <input type="radio" name="Jacket-color" className="red" />
            <input type="radio" name="Jacket-color" />
          </div>
        </div>
      </section>
      <div className="btn-div">
        <button className="sales-btn">View All Products</button>
      </div>
    </div>
  );
}
function NewArival() {
  return (
    <div>
      <section className="pointer-bl">
        <div className="block"></div>
        <b>
          <p>Featured</p>
        </b>
      </section>
      <section className="NewArivl-head">
        <h1>New Arrival</h1>
      </section>
      <section className="newarivl-pics">
        <div className="pic1">
          <img src={pic1} alt="not found" />
          <div className="pic1-content">
            <h1>PlayStation 5 </h1>
            <p>
              Black and White version of PS5
              <br />
              coming out on sale
            </p>
            <h4>
              <a href="Shop now">Shop now</a>
            </h4>
          </div>
        </div>
        <div>
          <div className="pic2">
            <img src={pic2} alt="not found" />
            <div className="pic2-content">
              <h1>Women's Collection </h1>
              <p>
                Featured Women Collection that
                <br />
                give you another vibe
              </p>
              <h4>
                <a href="Shop now">Shop now</a>
              </h4>
            </div>
          </div>
          <div className="pics-div">
            <div className="pic3">
              <img src={pic3} alt="not found" />
              <div className="pic3-content">
                <h1>Speakers </h1>
                <p>Amazon Wirless Speakers</p>
                <h4>
                  <a href="Shop now">Shop now</a>
                </h4>
              </div>
            </div>
            <div className="pic4">
              <img src={pic4} alt="not found" />
              <div className="pic4-content">
                <h1>Perfumes </h1>
                <p>Gucci Intense OUD EDP</p>
                <h4>
                  <a href="Shop now">Shop now</a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
function Services() {
  return (
    <div className="Services">
      <section className="services-content">
        <div className="services-icons">
          <img src={icon1} alt="not found" />
        </div>

        <h3>24/7 CUSTOMER SERVICE</h3>
        <p>friendly 24/7 Customer support</p>
      </section>
      <section className="services-content">
        <div className="services-icons">
          <img src={icon2} alt="not found" />
        </div>

        <h3>FREE AND FAST DELIVERY</h3>
        <p>free delivery for all orders above 140$</p>
      </section>
      <section className="services-content">
        <div className="services-icons">
          <img src={icon3} alt="not found" />
        </div>
        <h3>MONEY BACK GUARANTEE</h3>
        <p>We return money within 30 days</p>
      </section>
    </div>
  );
}
function Footer() {
  return (
    <div className="footer">
      <section>
        <h2>Exclusive</h2>
        <h3>
          <a href="subscribe">Subscribe</a>
        </h3>
        <p>get 10% off on your fisrst order</p>
        <input type="text" placeholder="Enter your email" />
      </section>

      <section>
        <h3>
          <a href="support">Support</a>
        </h3>
        <p>
          111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
        </p>
        <p>
          <a href="e-mail">exclusive@gmail.com</a>
        </p>
        <p>000 299 400</p>
      </section>
      <section>
        <h3>Account</h3>
        <p>
          <a href="myaccount">My Account</a>
        </p>
        <p>
          <a href="Log/reg">Login/Register</a>
        </p>
        <p>
          <a href="cart">Cart</a>
        </p>
        <p>
          <a href="wishlist">Wishlist</a>
        </p>
        <p>
          <a href="shop">Shop</a>
        </p>
      </section>
      <section>
        <h3>Quick Link</h3>
        <p>
          <a href="Privacy policy">Privacy Poicy</a>
        </p>
        <p>
          <a href="Terms of use">Terms of use</a>
        </p>
        <p>
          <a href="FAQ">FAQ</a>
        </p>
        <p>
          <a href="Contact">Contact</a>
        </p>
      </section>

      <setion>
        <h3>Download App</h3>
        <p>Save 3$ with new App user only</p>
      </setion>
    </div>
  );
}
export {
  Navbar,
  Header,
  Sales,
  Catagories,
  BestSelling,
  MusicFrame,
  Products,
  NewArival,
  Services,
  Footer,
};
