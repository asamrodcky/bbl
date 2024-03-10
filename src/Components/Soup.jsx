import { Link, Element } from 'react-scroll';

const Soup = () => {
    return (
        <Element name="aboutsoup">
            <section style={{ height: '1500px', backgroundColor: '#FFC897', padding: "100px" }}>
                <h1 class="text-xl">History & Culture</h1>
                <br/>
                <div>
                    <p class="flex justify-start">
                        Feijoada is a traditional Brazilian dish that has
                        its roots deeply embedded in the country's history and cultural heritage.
                        <br />
                        <br />
                        Feijoada’s origins date back to the era of slavery and colonialism in Brazil, the last country in the world to abolish slavery.
                        Today, the Black population makes up 54% of the nation’s total population—the most
                        prominent Black population outside of Africa.
                        <br />
                        <br />
                        Initially, feijoada was a simple stew made by the slaves using leftover cuts of meat pork and beef,
                        which were often discarded by the colonizers. These ingredients were combined with the black beans
                        and cooked slowly over a low flame.
                        <br />
                        <br />
                        Over time, feijoada evolved into a beloved national dish that reflects the diverse cultural influences of Brazil. It became a symbol of Brazilian identity,
                        representing the blending of European, African, and indigenous culinary traditions. The dish
                        is a staple in any special occasions from family gathering to fundraisers.
                        <br />
                        <br />
                        Today, feijoada is typically made with black beans, various cuts of pork and/or beef and
                        smoked sausages. The dish is often seasoned with garlic, onions, and bay leaves,
                        and cooked slowly to allow the flavors to meld together.
                        <br />
                        <br />
                        Feijoada is traditionally served with side dishes such as white rice, collard greens, orange slices, and
                        farofa (toasted cassava flour). It is enjoyed throughout Brazil, with each region
                        adding its own variations and twists to the recipe.
                    </p>
                </div>
            </section>
        </Element>
    )
}

export default Soup;