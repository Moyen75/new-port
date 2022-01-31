import React from 'react';
import img from '../../../images/projects/assignment-10-e5779.web.app_(iPad Pro).png'
import img2 from '../../../images/projects/assignment-10-e5779.web.app_(iPhone X).png'

const Project1 = () => {
    return (
        <div>
            <img style={{ width: '25%', margin: '0 10px' }} src={img} alt="" />
            <img style={{ width: '8%', margin: '0 10px' }} src={img2} alt="" />
            <div>
                <h2>Doctor's Dental Care</h2>
                <span><a style={{ textDecoration: 'none' }} target='blank' href="https://assignment-10-e5779.web.app/">Live site</a></span> ||
                <span><a style={{ textDecoration: 'none' }} href="https://github.com/Moyen75/doctors-dental-care" target='blank'>Code link</a></span>
                <h3>About This Project</h3>
                <div style={{ maxWidth: '400px', textAlign: 'left', margin: '0 auto' }}>
                    <ul>
                        <li>This a Dental care application</li>
                        <li>I built this app with React.</li>
                        <li>I used Firebase for user login/register.</li>
                        <li>I used bootstrap for creating User interface.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Project1;