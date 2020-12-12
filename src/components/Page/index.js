import React from 'react';
import About from './../About';
// import * from './../*';

function Page(props) {

    const { currentOption } = props;
    return(
        <container>
            {currentOption.component}
        </container>
    )
}

export default Page;