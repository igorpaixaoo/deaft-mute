import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home"
import Options from "./pages/Options"
import AudioToLibras from "./pages/AudioToLibras"
import TextoToAudio from "./pages/TextoToAudio"

const App = () =>{
  return(
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/options" element={<Options/>}/>
        <Route exact path="/audio-to-libras" element={<AudioToLibras/>}/>
        <Route exact path="/text-to-audio" element={<TextoToAudio/>}/>
      </Routes>
    </Router>
  )
}

export default App;