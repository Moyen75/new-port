import React from 'react';
import img from '../../../images/projects/assignment-12-782e1.web.app_(iPad Pro).png'
import img2 from '../../../images/projects/assignment-12-782e1.web.app_(iPad).png'

const Project3 = () => {
    return (
        <div>
            <img style={{ width: '25%',margin:'0 10px'}} src={img} alt="" />
            <img style={{ width: '8%',margin:'0 10px' }} src={img2} alt="" />
            <div>
                <h2>Nur & Sons Auto</h2>
                <span><a style={{ textDecoration: 'none' }} target='blank' href="https://assignment-12-782e1.web.app/">Live site</a></span> ||
                <span><a style={{ textDecoration: 'none' }} href="https://github.com/Moyen75/nur-sons" target='blank'>Code link</a></span>
                ||
                <span><a style={{ textDecoration: 'none' }} target='blank' href="https://github.com/Moyen75/Nur-Sons_server">Code link 2</a></span>
                <h3>About This Project</h3>
                <div style={{ maxWidth: '400px', textAlign: 'left', margin: '0 auto' }}>
                    <ul>
                        <li>This a car selling application</li>
                        <li>I built this app with React.</li>
                        <li>I used Firebase for user login/register.</li>
                        <li>I used bootstrap for creating User interface.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Project3;