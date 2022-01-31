import React from 'react';
import img from '../../../images/projects/doctors-portal-37851.web.app_appointments(iPhone X).png'
import img2 from '../../../images/projects/doctors-portal-37851.web.app_(iPad).png'

const Project4 = () => {
    return (
        <div>
            <img style={{ width: '25%',margin:'0 10px'}} src={img} alt="" />
            <img style={{ width: '8%',margin:'0 10px' }} src={img2} alt="" />
            <div>
                <h2>Doctors Portal</h2>
                <span><a style={{ textDecoration: 'none' }} target='blank' href="https://doctors-portal-37851.web.app/">Live site</a></span> ||
                <span><a style={{ textDecoration: 'none' }} href="https://github.com/Moyen75/doctors-portal-client" target='blank'>Code link</a></span>
                ||
                <span><a style={{ textDecoration: 'none' }} target='blank' href="https://github.com/Moyen75/doctors-portal-server">Code link 2</a></span>
                <h3>About This Project</h3>
                <div style={{ maxWidth: '400px', textAlign: 'left', margin: '0 auto' }}>
                    <ul>
                        <li>This a health care related application</li>
                        <li>I built this app with React.</li>
                        <li>I used Firebase for user login/register.</li>
                        <li>I used bootstrap for creating User interface.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Project4;