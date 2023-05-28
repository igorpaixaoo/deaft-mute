import { useState } from "react";

import Footer from "../components/Footer";

import { AiFillSound } from "react-icons/ai";

import "../styles/TextoToAudioStyle.css"

const TextoToAudio = () =>{
  const [text, setText] = useState('')
  const msg = new SpeechSynthesisUtterance()
  msg.text = text;

  const textToAudio = ()=>{
    window.speechSynthesis.speak(msg)
  }

  return(
    <div className="App">
      <div className="container">
        <Footer/>
        <div className="text-to-audio">
          <textarea rows={10} maxLength="300" id="text" placeholder="Digite o texto:" onChange={(e) => setText(e.target.value)}/>
          <button onClick={textToAudio}>{<AiFillSound/>}</button>
        </div>
      </div>
    </div>
  )
}

export default TextoToAudio;