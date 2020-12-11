import React from 'react';


function Nav(props) {
    // deconstructor...this always trips me up
    const {
        navOptions = [],
        currentOption,
        setCurrentOption 
    } = props;

    return(
        <header>
            <nav>
                <div>This is the nav</div>
                <ul>
                    {navOptions.map((navOption) => (
                        <li
                            className={ `${currentOption === navOption && 'navSelected'}`}
                        >
                            <span
                                onClick={() => {
                                    setCurrentOption(navOption);
                                }}
                            >
                                {navOption.text}
                            </span>
                        </li>
                    ))}
                </ul>

            </nav>
        </header>
    )
}

export default Nav;