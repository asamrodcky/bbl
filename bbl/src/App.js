import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar0 from './Components/Navbar';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import { Link, Element } from 'react-scroll';

function App() {
  return (
    <div className="App">
      <Navbar0 />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

export default App;
