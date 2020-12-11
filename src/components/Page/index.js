import React from 'react';
import About from './../About';
// import * from './../*';

function Page(props) {

    const { currentOption } = props;

    const { components } = {
        about: <About currentOption = {currentOption}></About>,
        portfolio:<About currentOption = {currentOption}></About>,
        contact:<About currentOption = {currentOption}></About>,
        resume:<About currentOption = {currentOption}></About>,
    }

    return(
        <section>
            <h1>{currentOption.text}</h1>
            <p>{currentOption.description}</p>
            {currentOption.key}
            {currentOption.component}
        </section>
    )
}

export default Page;