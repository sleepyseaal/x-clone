import { Link } from "react-router-dom";
import XLogo from "../assets/XLogo.svg";
import "../styles/NavBar.css";

function Navbar() {
  return (
    <nav>
      <div>
        <Link to="/">
          <img src={XLogo} alt="X Logo"></img>
        </Link>
      </div>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/notifications">Notifications</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
