import React from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { Wave } from 'react-animated-text';
import '../Header/Header.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Banner = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/services')
    }
    return (
        <div className='top-banner'>
            <Container className='main-banner'>
                <div>
                    <h1 className='name' style={{ color: 'rgb(255, 213, 74)' }}><Wave text="Moyenul Islam" /></h1>
                    <div className='main'>
                        <h4> <Wave text='MERN stack Developer  || Graphics Designer.' /></h4>
                    </div>
                    <p>Experienced Freelance with a demonstrated history of working in the education management industry. Skilled in Html,Javascript, Node.js, React, Front-end Development,Material UI, Bootstrap, and Cascading Style Sheets (CSS). </p>
                    <button className='button' onClick={handleClick}>view my work</button>
                </div>
            </Container>
        </div>
    );
};

export default Banner;