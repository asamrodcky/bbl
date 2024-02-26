import logo from './logo.svg';
import Navbar from './Components/Navbar';
import { Link, Element } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Element name="aboutme">
          <section style={{ height: '100vh', backgroundColor: 'lightblue' }}>
            <h1>About Me</h1>
            <p>My name is Gabi Richard and I am a disciple of the soup queen.</p>
          </section>
        </Element>
        <Element name="aboutsoup">
          <section style={{ height: '100vh', backgroundColor: 'lightgreen' }}>
            <h1>About Soup</h1>
            <p>This shit is bussin.</p>
          </section>
        </Element>
        <Element name="dietaryinfo">
          <section style={{ height: '100vh', backgroundColor: 'orange' }}>
            <h1>Dietary Information</h1>
            <p>Contains meat.</p>
          </section>
        </Element>
    </div>
  );
}

export default App;
