import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/navbar/Navbar';
import { Banner } from './components/banner/Banner';
import { Skills } from './components/skills/Skills';
import { Projects} from './components/projects/Project';
import { Footer } from './components/footer/Footer';
import { Experience } from './components/experience/Experience';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <Skills/>
    <Projects/>
    <Experience/>
    <Footer/>
    </div>
  );
}

export default App;
