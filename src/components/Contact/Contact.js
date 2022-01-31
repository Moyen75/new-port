import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import '../Header/Header.css'
import email from '../../images/email.jpeg'
import gmail from '../../images/gmail.png'
import { Container } from '@mui/material';
import { Grid } from '@material-ui/core';

const Contact = () => {
    return (
        <div className='my-5'>
            <h1 className='title'>Contact Me</h1>
            <Container className='mt-5'>
                <div className='contact-me'>
                    <div>
                        <div style={{ display: 'flex', marginLeft: "5px", alignItems: 'center' }} >
                            <h2 style={{ color: 'white', marginLeft: '2px' }}>Get In Touch</h2>
                            <img style={{ width: '40px', height: '40px' }} src={gmail} alt="" />
                            <h2 className='get-touch'>I</h2>
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex' }} className='text-dark  social-icons'>
                            <span className='icons-holder'><a href="https://www.facebook.com/profile.php?id=100006908957877" target='blank' style={{ padding: '2px' }} className=' text-dark'><i class="fab fa-facebook social-icon fb"></i></a></span>
                            <span className='icons-holder'>
                                <a style={{ padding: '2px' }} className=' text-dark' href="https://twitter.com/MoyenIslam3" target='blank'><i class="fab fa-twitter social-icon"></i></a>
                            </span>
                            <span className='icons-holder'>
                                <a className='p-2 text-dark' href="https://www.linkedin.com/in/moyen-islam-675204211/" target='blank'><i class="fab fa-linkedin social-icon"></i></a>
                            </span>
                        </div>
                    </div>
                    <Grid container spacing={2} sx={{ minHeight: '350px' }} className='g-4 align-items-center '>
                        <Grid item xs={12} md={6}>
                            <div style={{ textAlign: 'left', color: 'gray', textTransform: 'capitalize' }}>
                                <h3>send your email here!</h3>
                                <img style={{ width: '100%' }} src={email} alt="" />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className='form-email'>
                                <form id="contactform" action="https://formsubmit.io/send/moyenislam75@gmail.com" method="POST">
                                    <input style={{ width: '75%', margin: '6px', padding: '13px' }} name="name" type="text" id="name" placeholder='Name' />
                                    <input style={{ width: '75%', margin: '6px', padding: '13px' }} name="email" type="email" placeholder='E-mail' id="email" />
                                    <textarea style={{ width: '75%', margin: '6px', padding: '13px' }} placeholder='Message' name="message" id="comment" rows="3"></textarea>

                                    <input name="_formsubmit_id" type="text" style={{ display: 'none' }} />

                                    <input style={{ width: '30%', margin: '6px', padding: '3px', backgroundColor: '#14ABF4', color: 'white', border: '1px solid #14ABF4', borderRadius: '5px' }} value="Send" type="submit" />
                                </form>
                            </div>
                        </Grid>
                    </Grid>

                </div>
            </Container>
        </div>
    );
};

export default Contact;