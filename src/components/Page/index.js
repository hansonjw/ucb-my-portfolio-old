import React from 'react';
import About from './../About';
// import * from './../*';

function Page(props) {

    const { currentOption } = props;
    return(
        <section>
            {currentOption.component}
        </section>
    )
}

export default Page;