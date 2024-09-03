
import './App.css'
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Home from "./composant/Home.jsx";
import Apropos from "./composant/Apropos.jsx";
import Header from "./composant/Header.jsx";
import Footer from "./composant/Footer.jsx";
import Data from "./composant/Data.jsx";
import PhotoDetails from "./composant/PhotoDetails.jsx"
import data from "./data/data.json"




function App() {


  return (
        <div className={"app-container"}>
        <BrowserRouter>
            <Header/>
            <div className={"content"}>
            <Routes>
                <Route path={"/"} element={<Data/>}/>
                <Route path={"/propos"} element={<Apropos/>}/>
                <Route path={"/photo/:id"} element={<PhotoDetails data={data}/>}/>
            </Routes>
            </div>
            <Footer/>
        </BrowserRouter>

    </div>

  )
}

export default App
