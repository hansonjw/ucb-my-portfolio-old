import React from 'react';
import About from './../About';
// import * from './../*';

function Page(props) {

    const { currentOption } = props;
    return(
        <section>
            <h1>{currentOption.text}</h1>
            <p>{currentOption.description}</p>
            {currentOption.component}
        </section>
    )
}

export default Page;