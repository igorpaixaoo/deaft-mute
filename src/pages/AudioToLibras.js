import SpeechRecognition, {useSpeechRecognition} from "react-speech-recognition";
import Footer from "../components/Footer";

import "../styles/AudioToLibrasStyle.css"

import { FaMicrophone } from "react-icons/fa"
import { FaMicrophoneSlash } from "react-icons/fa";
import { AiOutlineClear } from "react-icons/ai"
import { useState } from "react";

const AudioToLibras = () =>{
  const {
    transcript, 
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition()
 
  if(!browserSupportsSpeechRecognition) return (<span>Seu navegador não é compativel com o sistema.</span>)

  return (
    <div className="App">
      <div className="container">
        <Footer/>
        <div className="audio-to-libras">
          <button onClick={SpeechRecognition.startListening}>{<FaMicrophone/>}</button>
          <button onClick={SpeechRecognition.stopListening}>{<FaMicrophoneSlash/>}</button>
          <button onClick={resetTranscript}>{<AiOutlineClear/>}</button>
          <div className="area-text">
            <p id="h1-text">{transcript}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AudioToLibras;