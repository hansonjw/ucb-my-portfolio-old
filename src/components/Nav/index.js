import React from 'react';


function Nav(props) {
    // deconstructor...this always trips me up
    const {
        navOptions = [],
        currentOption,
        setCurrentOption 
    } = props;

    return(
        <header class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <nav class="container-xxl felx-wrap flex-md-nowrap" aria-label="Main navigation">
                <a class="navbar-brand p-0 me-2">Justin Hanson</a>
                    <div class="navbar-exapand" id="bdNavbar">
                        <ul class="navbar-nav flex-row flex-wrap bd-navbar-nav mx-auto py-md-0">
                            {navOptions.map((navOption) => (
                                <div class="nav-item col-6 col-md-auto px-5">
                                    <li
                                        className={ `${currentOption === navOption && 'navSelected'} navlinks`}
                                    >
                                        <span
                                            onClick={() => {
                                                setCurrentOption(navOption);
                                            }}
                                        >
                                            {navOption.text}
                                        </span>
                                    </li>
                                </div>
                            ))}
                        </ul>
                    </div>

            </nav>
        </header>
    )
}

export default Nav;