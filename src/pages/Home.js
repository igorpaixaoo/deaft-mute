import { Link } from "react-router-dom";

import "../styles/HomeStyle.css"
import Logo from "../util/logo-2.png"

const Home = () =>{
  return(
    <div className="App">
      <div className="container">
        <div className="home">
          <img src={Logo}></img>
          <Link to="/options"><button>Iniciar</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Home;