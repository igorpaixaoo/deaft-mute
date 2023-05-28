import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import "../styles/OptionsStyle.css"

const Options = () =>{
  return(
    <div className="App">
      <div className="container">
        <Footer/>
        <div className="options">
          <p>Selecione uma dessas opções:</p>
          <br/>
          <Link to="/audio-to-libras">
            <button id="btnAudioToLibras">Áudio para Libras</button>
          </Link>
          <Link to="/text-to-audio"> 
            <button id="btnTextToAudio">Texto para Áudio</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Options;