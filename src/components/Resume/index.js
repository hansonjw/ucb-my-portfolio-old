import React from 'react';
import resumeimage from "../../assets/resumeimage.png";
import resume from "../../assets/resume.pdf"

function Resume() {

    return(
        <section>
            <div>this is the RESUME section</div>
            <a href={resume} download='resume-Justin-Hanson'>
                <img src={resumeimage} />
            </a>
        </section>
    )
}

export default Resume;