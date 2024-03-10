import { Link, Element } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';

const Section3 = () => {
    return (
        <Element name="dietaryinfo">
            <section style={{ height: '100vh', backgroundColor: 'orange', padding: "100px" }}>
                <h1>Dietary Information</h1>
                <p>Contains meat.</p>
            </section>
        </Element>
    )
}

export default Section3;