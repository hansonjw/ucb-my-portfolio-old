import React from 'react';

import investing from '../../assets/investing.png';
import note from '../../assets/note.png';
import blog from '../../assets/blog.png';
import run from '../../assets/run.png';
import stocks from '../../assets/stocks.png';
import weather from '../../assets/weather.png';

function Portfolio() {

    const projects = [
        {   
            id: 'investing',
            url: 'https://seedstocks.herokuapp.com/',
            git: 'https://github.com/hansonjw/stock-quotes',
            image: investing
        },
        {
            id: 'note',
            url: 'https://lit-beach-81656.herokuapp.com/',
            git: 'https://github.com/hansonjw/mini-eureka',
            image: note
        },
        {
            id: 'blog',
            url: 'https://vast-fjord-84705.herokuapp.com/',
            git: 'https://github.com/hansonjw/tech-blog',
            image: blog
        },
        {
            id: 'run',
            url: 'https://hansonjw.github.io/run-buddy/',
            git: 'https://github.com/hansonjw/run-buddy',
            image: run
        },
        {
            id: 'stocks',
            url: 'https://github.com/aadi1988/Common-Capitalism',
            git: 'https://aadi1988.github.io/Common-Capitalism/',
            image: stocks
        },
        {
            id: 'weather',
            url: 'https://hansonjw.github.io/weatherdashboard/',
            git: 'https://github.com/hansonjw/weatherdashboard',
            image: weather
        }
    ]

    return(
        <div>
            {projects.map((project) => (
                <div>
                    <img src={project.image} />
                    <a href={project.url}>link</a>
                    <a href={project.git}>github</a>
                </div>
            ))}
        </div>
    )
}

export default Portfolio;


