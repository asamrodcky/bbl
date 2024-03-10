import './App.css';
import Navbar0 from './Components/Navbar';
import Head from './Components/Head';
import Soup from './Components/Soup';
import AboutMe from './Components/AboutMe';
import { Link, Element } from 'react-scroll';

function App() {
  return (
    <div className="App">
      <Navbar0 />
      <Head />
      <Soup />
      <AboutMe />
    </div>
  );
}

export default App;
