import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Services from './Pages/Services.js';
import Contact from './Pages/Contact.js';
import NavBar from './NavBar.js';
import HondBewaking from "./Pages/Services/HondBewaking";
import Chauffeur from "./Pages/Services/Chauffeur";
import Evenement from "./Pages/Services/Evenement";
import Horeca from "./Pages/Services/Horeca";
import Huismeester from "./Pages/Services/Huismeester";
import MobieleBV from "./Pages/Services/MobieleBV";
import Object from "./Pages/Services/Object";
import Persoon from "./Pages/Services/Persoon";
import Receptie from "./Pages/Services/Receptie";
import Zorg from "./Pages/Services/Zorg";


function App() {
    return (
        <Router>
            <div>
                <NavBar/>


            </div>
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/OverOns" element={<About/>}/>
                <Route path="/Diensten" element={<Services/>}/>
                <Route path="/Diensten/bewaking-met-honden" element={<HondBewaking />}/>
                <Route path="/Diensten/chauffeursdiensten" element={<Chauffeur />}/>
                <Route path="/Diensten/evenementsbeveiliging" element={<Evenement />}/>
                <Route path="/Diensten/horecabeveiliging" element={<Horeca />}/>
                <Route path="/Diensten/huismeester" element={<Huismeester  />}/>
                <Route path="/Diensten/mobile-surveillance" element={<MobieleBV  />}/>
                <Route path="/Diensten/objectbeveiliging" element={<Object  />}/>
                <Route path="/Diensten/persoonsbeveiliging" element={<Persoon  />}/>
                <Route path="/Diensten/receptiebeveiliging" element={<Receptie  />}/>
                <Route path="/Diensten/zorgbeveiliging" element={<Zorg  />}/>
                <Route path="/Contact" element={<Contact/>}/>
            </Routes>
        </Router>
    );
}

export default App;
