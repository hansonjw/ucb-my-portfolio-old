import React from 'react';


function Page(props) {

    const { currentOption } = props;
    return(
        <div>
            {currentOption.component}
        </div>
    )
}

export default Page;