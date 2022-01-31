import React from 'react';
import { Container } from 'react-bootstrap';
import '../Header/Header.css'

const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <div className='footer-icon'>
                    <span><a href="https://www.facebook.com/profile.php?id=100006908957877"><i class="fab fa-facebook icon"></i></a></span>
                    <span><a href="https://www.linkedin.com/in/moyen-islam-675204211/"><i class="fab fa-linkedin-in icon"></i></a></span>
                    <span><a href="https://twitter.com/MoyenIslam3"><i class="fab fa-twitter icon"></i></a></span>
                    <span><a href="https://www.instagram.com/moyen.sr.01/"><i class="fab fa-instagram icon"></i></a></span>
                </div>
                <div>
                    <h2>Moyenul Islam</h2>
                    <h5>&copy;copyright 2021</h5>
                    <p>All rights reserved.powered by Moyenul Islam</p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;