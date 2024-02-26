import { Link, Element } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';

const Section1 = () => {
    return (
        <Element name="aboutme">
            <section style={{ height: '100vh', backgroundColor: 'lightblue', padding: "100px" }}>
                <h1>About Me</h1>
                <p>My name is Gabi Richard and I am a disciple of the soup queen.</p>
            </section>
        </Element>
    )
}

export default Section1;