import { Link } from "react-router-dom";

function Navbar({ toggleTheme, morktTema }) {
  return (
    <nav className="navbar">
      <button className="Navknapp">
        <Link to="/">Startsida</Link>
      </button>
      <button className="Navknapp">
        <Link to="/favorite">Favoriter</Link>
      </button>
      <button className="Navknapp">
        <Link to="/accounts">Kontolista</Link>
      </button>
      <button onClick={toggleTheme} className="Navknapp">
        Ändra tema
      </button>
    </nav>
  );
}

export default Navbar;
