import React from 'react';
import me from "../../assets/me.jpeg";

function About() {

    return(
        <section>
            <img src={me} />
            <p>
                This si some text about me and how wonderful I am!!
            </p>
        </section>
    )
}

export default About;