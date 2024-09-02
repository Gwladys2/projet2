
import './App.css'
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Home from "./composant/Home.jsx";
import Apropos from "./composant/Apropos.jsx";
import Header from "./composant/Header.jsx";
import Footer from "./composant/Footer.jsx";



function App() {


  return (
        <div className={"app-container"}>
        <BrowserRouter>
            <Header/>
            <div className={"content"}>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/propos"} element={<Apropos/>}/>
            </Routes>
            </div>
            <Footer/>
        </BrowserRouter>

    </div>

  )
}

export default App
