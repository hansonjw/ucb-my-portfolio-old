import React from 'react';


function Footer() {

    return(
    <footer>
        <nav class="container-xxl felx-wrap flex-md-nowrap" aria-label="Main navigation">
            <div class="navbar-expand">
                <div class="navbar-nav flex-row flex-wrap bd-navbar-nav mx-auto py-md-0 justify-content-center">
                    <div class="nav-item col-md-auto px-5 py-2 links">
                        <a class="links" href="https://www.linkedin.com/in/justinhanson1/" target="_blank">Linked In</a>
                    </div>
                    <div class="nav-item col-md-auto px-5 py-2 links">
                        <a class="links" href="https://github.com/hansonjw" target="_blank">GitHub</a>
                    </div>
                    <div class="nav-item col-md-auto px-5 py-2">
                        <a class="links" href="https://twitter.com/hansonjw" target="_blank">Twitter</a>
                    </div>
                </div>
            </div>
        </nav>
    </footer>
    )

}

export default Footer;