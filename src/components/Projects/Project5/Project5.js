import React from 'react';
import img from '../../../images/projects/gifted-spence-60c3e3.netlify.app_(iPad Pro).png'
import img2 from '../../../images/projects/gifted-spence-60c3e3.netlify.app_services(iPhone X).png'

const Project5 = () => {
    return (
        <div>
            <img style={{ width: '25%', margin: '0 10px' }} src={img} alt="" />
            <img style={{ width: '8%', margin: '0 10px' }} src={img2} alt="" />
            <div>
                <h2>English club</h2>
                <span><a style={{ textDecoration: 'none' }} target='blank' href="https://gifted-spence-60c3e3.netlify.app/">Live site</a></span> ||
                <span><a style={{ textDecoration: 'none' }} target='blank' href="https://github.com/Moyen75/english-club-2">code link</a></span>

                <h3>About This Project</h3>
                <div style={{ maxWidth: '400px', textAlign: 'left', margin: '0 auto' }}>
                    <ul>
                        <li>This a course selling related application</li>
                        <li>I built this app with React.</li>
                        <li>It contains variant courses data.</li>
                        <li>I used bootstrap for creating User interface.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Project5;