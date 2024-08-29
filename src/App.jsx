
import './App.css'
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Home from "./composant/Home.jsx";
import Apropos from "./composant/Apropos.jsx";
import Donnees from "./composant/Donnees.jsx";


function App() {


  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/propos"} element={<Apropos/>}/>
                <Route path={"/donnees"} element={<Donnees/>}/>
            </Routes>
        </BrowserRouter>

    </div>

  )
}

export default App
