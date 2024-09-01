import './App.css'
import NavBar from "./components/NavBar"
import Home from "./components/Home";
import About from './components/About';
import MySkills from './components/MySkills';
import Projects from './components/Projects';
import Internship from './components/Internship';
import Contact from './components/Contact';
import Copyright from './components/Copyright';


function App() {
 
  return (
   <div className="bg-black px-8">
   <NavBar />
   <Home />
   <About />
   <MySkills />
   <Projects />
   <Internship />
   <Contact />
   <Copyright />
 
   
    
    </div>


  )
}

export default App;