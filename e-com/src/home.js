import logo from "./images/Exclusive.png";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  return (
    <nav>
      <div>
        <img src={logo} alt="not found" />
      </div>
      <div>
        <ul>
          <li>
            <a href="Home">Home</a>
          </li>
          <li>
            <a href="Contact">Contact</a>
          </li>
          <li>
            <a href="About">About</a>
          </li>
          <li>
            <a href="Sign Up">Sign Up</a>
          </li>
        </ul>
      </div>
      <div>
        <input type="text" />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <FontAwesomeIcon icon={faCartShopping} />
        <FontAwesomeIcon icon={faHeart} />
      </div>
    </nav>
  );
}
