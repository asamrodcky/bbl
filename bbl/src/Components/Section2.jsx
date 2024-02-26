import { Link, Element } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';

const Section2 = () => {
    return (
        <Element name="aboutsoup">
            <section style={{ height: '100vh', backgroundColor: 'lightgreen' , padding: "100px"}}>
                <h1>About Soup</h1>
                <p>This shit is bussin.</p>
            </section>
        </Element>
    )
}

export default Section2;