import React from 'react';
import resume from "../../assets/resume.pdf";
import resume1 from "../../assets/resume1.png";
import resume2 from "../../assets/resume2.png";
import iconDownload from "../../assets/iconDownload.svg";

function Resume() {

    return(
        <div class="container">
            <div class="row px-5">
                <div class="col-lg-2 mx-auto">
                    <a href={resume} class="mx-auto" download='resume-Justin-Hanson'><img src={iconDownload} class="img-download" /></a> 
                </div>
                <div class="col-lg-10 my-auto">
                    <p class="p-resume">
                        Please click the icon to download a pdf copy of my resume.  Thank you for visiting my site.
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <img src={resume1} class="img-resume"/>
                </div>
                <div class="col-lg-6">
                    <img src={resume2} class="img-resume"/>
                </div>
            </div>
        </div>
    )
}

export default Resume;