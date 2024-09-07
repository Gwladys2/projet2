
import './App.css'
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Home from "./composant/Home.jsx";
import Collapse from "./composant/Collapse.jsx";
import Header from "./composant/Header.jsx";
import Footer from "./composant/Footer.jsx";
import Data from "./composant/Data.jsx";
import PhotoDetails from "./composant/PhotoDetails.jsx"
import data from "./data/data.json"
import NotFound from "./composant/NotFound.jsx"
import Slider from "./composant/Slider.jsx";




function App() {


  return (
      <div className="app-container">
          <BrowserRouter>
              <Header />
              <Routes>
                  <Route path="/" element={<div className="content-data"><Data /></div>}/>
                  <Route path="/propos" element={<div className="content propos-content"><Collapse /></div>}/>
                  <Route path="/slider" element={<div className="content slider-content"><Slider /></div>}/>
                  <Route path="/photo/:id" element={<div className="content photo-details-content"><PhotoDetails data={data} /></div>}/>
                  <Route path="*" element={<div className="content notFound"><NotFound /></div>} />
              </Routes>
              <Footer />
          </BrowserRouter>
      </div>
  )
}

export default App
