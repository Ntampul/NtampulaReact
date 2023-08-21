//import { Route, Routes } from "react-router-dom";
import './App.css'
import { Navbars } from './Components/Navbar';
import {Home } from './Components/pages/Home';
//import { About } from "./components/pages";
//import { Home, About, Skills, Projects, Contacts } from "./components/pages";

function App() {
  
  return (
  <div className="App">

<Navbars/>
<Home/>

      
    </div>
  );
}

export default App;
