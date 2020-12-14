import React from 'react';
import resume from "../../assets/resume.pdf";
import resume1 from "../../assets/resume1.png";
import resume2 from "../../assets/resume2.png";
import iconDownload from "../../assets/iconDownload.svg";

function Resume() {

    return(
        <div class="container">
            <div class="row px-auto">
                <p class="p-resume text-center">
                <a class="links" href={resume} download='resume-Justin-Hanson'>Please click here to download a pdf copy of my resume.  Thank you for visiting my site.</a> 
                </p>
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