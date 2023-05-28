import { Link } from "react-router-dom"

import Logo from "../util/logo-2.png"
import LogoFooter from "../util/logo-3.png"
import "../styles/HomeStyle.css"

const Footer = () =>{
  return(
    <div className="footer">
      <Link to="/"><img src={LogoFooter} width="200px" id="logo"/></Link>
      <p><span>version: </span>0.01.2</p>
    </div>
  )
}

export default Footer;