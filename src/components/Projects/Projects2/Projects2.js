import React from 'react';
import img from '../../../images/projects/screencapture-hotel-pro-max-web-app-2021-12-29-11_09_08.png'
import img2 from '../../../images/projects/screencapture-hotel-pro-max-web-app-2021-12-29-11_09_28.png'

const Projects2 = () => {
    return (
        <div>
            <img style={{ width: '25%',margin:'0 10px'}} src={img} alt="" />
            <img style={{ width: '8%' ,margin:'0 10px' }} src={img2} alt="" />
            <div>
                <h2>Hotel Pro</h2>
                <span><a style={{ textDecoration: 'none' }} target='blank' href="https://hotel-pro-max.web.app/">Live site</a></span> ||
                <span><a style={{ textDecoration: 'none' }} href="https://github.com/Moyen75/hotel-pro-client" target='blank'>Code link</a></span>
                ||
                <span><a style={{ textDecoration: 'none' }} target='blank' href="https://github.com/Moyen75/hotel-pro-server">Code link 2</a></span>
                <h3>About This Project</h3>
                <div style={{ maxWidth: '400px', textAlign: 'left', margin: '0 auto' }}>
                    <ul>
                        <li>This a restaurant related application</li>
                        <li>I built this app with React.</li>
                        <li>I used Firebase for user login/register.</li>
                        <li>I used Material UI for creating User interface.</li>
                        <li>I used Express.js and Mongodb for backend.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Projects2;