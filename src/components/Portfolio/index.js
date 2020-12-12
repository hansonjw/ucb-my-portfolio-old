import React from 'react';

import investing from '../../assets/investing.png';
import note from '../../assets/note.png';
import blog from '../../assets/blog.png';
import run from '../../assets/run.png';
import stocks from '../../assets/stocks.png';
import weather from '../../assets/weather.png';
import githubIcon from '../../assets/icon-github.png';

function Portfolio() {

    const projects = [
        {   
            id: 'investing',
            url: 'https://seedstocks.herokuapp.com/',
            git: 'https://github.com/hansonjw/stock-quotes',
            image: investing,
            title: "Seed Stocks",
            description: "This application is a social media style platform for users to collaborate on the development of investment ideas and to develop sound investment thesis's'"
        },
        {
            id: 'note',
            url: 'https://lit-beach-81656.herokuapp.com/',
            git: 'https://github.com/hansonjw/mini-eureka',
            image: note,
            title: "Note Taker",
            description: "Lorem Ipsum"
        },
        {
            id: 'blog',
            url: 'https://vast-fjord-84705.herokuapp.com/',
            git: 'https://github.com/hansonjw/tech-blog',
            image: blog,
            title: "Tech Blog",
            description: "Lorem Ipsum"
        },
        {
            id: 'run',
            url: 'https://hansonjw.github.io/run-buddy/',
            git: 'https://github.com/hansonjw/run-buddy',
            image: run,
            title: "Run Buddy",
            description: "Lorem Ipsum"
        },
        {
            id: 'stocks',
            url: 'https://aadi1988.github.io/Common-Capitalism/',
            git: 'https://github.com/aadi1988/Common-Capitalism',
            image: stocks,
            title: "Common Capitalism",
            description: "Lorem Ipsum"
        },
        {
            id: 'weather',
            url: 'https://hansonjw.github.io/weatherdashboard/',
            git: 'https://github.com/hansonjw/weatherdashboard',
            image: weather,
            title: "Weather",
            description: "Lorem Ipsum"
        }
    ]

    return(
        <div class="container">
            {projects.map((project) => (
                <div class="card m-3">
                    <div class="row">
                        <div class="col-3">
                            <img src={project.image} class="card-img m-3 rounded-5 img-portfolio"/>
                        </div>
                        <div class="col-9">
                            <div class="card-body flex-box">
                                <h5 class="card-title">{project.title}</h5>
                                <p class="card-text">{project.description}</p>
                                <a href={project.url} class="card-link m-3" target="_blank">Website</a>
                                <a href={project.git} class="card-link m-3" target="_blank">GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
                
            ))}
        </div>
    )
}

export default Portfolio;


