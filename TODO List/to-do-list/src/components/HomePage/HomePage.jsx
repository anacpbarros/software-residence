import { Link } from "react-router-dom";

import img from "../../assets/icon.png";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page-container">
      <h3>Use esta ferramenta para anotar suas tarefas a fazer!</h3>
      <br />
      <p>
        Comece a <Link to="/tarefas">criar suas tarefas</Link>!
      </p>
      <Link to="/tarefas">
        <img alt="Ícone Lista" src={img} />
      </Link>
    </div>
  );
}

export default HomePage;
