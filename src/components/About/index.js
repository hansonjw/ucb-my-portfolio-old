import React from 'react';
import me from "../../assets/me.jpeg";
import aboutMe from "../../assets/aboutMe.json";

function About() {

    return(
        <div class="container">
            <div class="row">
                <div class="col">
                    <img src={me} class="img-about"/>
                </div>
                <div class="col px-5">
                    <p>{aboutMe.text1}</p>
                    <br></br>        
                    <p>{aboutMe.text2}</p>
                    <br></br>  
                    <p>{aboutMe.text3}</p>
                    <br></br>              
                </div>
            </div>
        </div>
    )
}

export default About;