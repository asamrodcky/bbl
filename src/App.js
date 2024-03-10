import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar0 from './Components/Navbar';
import AboutMe from './Components/AboutMe';
import Soup from './Components/Soup';
import Section3 from './Components/Section3';
import { Link, Element } from 'react-scroll';

function App() {
  return (
    <div className="App">
      <Navbar0 />
      <Soup />
      <AboutMe />
    </div>
  );
}

export default App;
