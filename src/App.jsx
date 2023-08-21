import { Route, Routes } from "react-router-dom";
import './App.css'
import { Navbars } from './Components/Navbar';
//import { About } from "./components/pages";
import { Home, About, Skills, Projects, Contacts } from "./components/pages";

function App() {
  
  return (
  <div className="App">
    <Navbars />
    <Routes>
       <Route path="/Home"element={<Home />}/>
       <Route path="/About"element={<About />}/>
       <Route path="/Skills"element={<Skills />}/>
       <Route path="/Projects"element={<Projects />}/>
       <Route path="/Contacts"element={<Contacts />}/>
       </Routes>


      
    </div>
  );
}

export default App;
