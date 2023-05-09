import { Link} from "react-router-dom";
import {BiCameraMovie, BiSearchAlt2} from "react-icons/bi";
import "./NavBar.css";

const NavBar = () => {
    return(
    <nav id="navbar">
        <h2>
          <Link to='/'><BiCameraMovie />NetFilmes</Link>
        </h2>
        <form>
            <input type="text" placeholder="Busque um filme" />
            <button type="submit"><BiSearchAlt2 /></button>
        </form>
      </nav>
    )
}

export default NavBar