import { Link } from "react-router-dom";
import XLogo from "../assets/XLogo.svg";
import "../styles/NavBar.css";

function Navbar() {
  return (
    <nav>
      <div>
        <img src={XLogo} alt="X Logo"></img>
      </div>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">Notifications</Link>
        </li>
        <li>
          <Link to="/contact">Profile</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
