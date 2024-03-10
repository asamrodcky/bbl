import { Link, Element } from 'react-scroll';

const AboutMe = () => {
    return (
        <Element name="aboutme">
            <section style={{ height: '100vh', backgroundColor: '#FC5F22', padding: "100px" }}>
                <h1 class="text-xl">Gabriella the Home Chef</h1>
                <br/>
                <p>Hi! My name is Gabriella Richard and I'm a second-generation Brazilian American 
                    born and raised in Raleigh, North Carolina. </p>
            </section>
        </Element>
    )
}

export default AboutMe;