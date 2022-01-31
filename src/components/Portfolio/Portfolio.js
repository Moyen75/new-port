import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import '../Header/Header.css'
import logo from '../../images/projects/main/assignment-10-e5779.web.app_(iPad Pro).png'
import logo2 from '../../images/projects/main/assignment-11-b1d81.web.app_(iPad Pro).png'
import logo3 from '../../images/projects/main/assignment-12-782e1.web.app_(iPad Pro) (1).png'
import logo4 from '../../images/projects/main/doctors-portal-37851.web.app_(iPad Pro).png'
import logo5 from '../../images/projects/main/gifted-spence-60c3e3.netlify.app_(Nest Hub).png'
import logo6 from '../../images/projects/main/laughing-almeida-093716.netlify.app_(iPad Pro).png'
import '../../Style/Style.css'
import { Container } from '@mui/material';
import { Grid } from '@material-ui/core';


const Portfolio = () => {
    return (
        <div className='projects'>
            <Container className='service-cont'>
                <div>
                    <div className='my-projects'>
                        <h1 className='title'>MY PROJECTS</h1>
                    </div>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4} className='card-1'>
                            <a href="/project1" className='stretched-link'> </a>
                        </Grid>
                        <Grid item xs={12} md={4} className='card-1 card-2'>

                            <a href="/project2" className='stretched-link'> </a>
                        </Grid>
                        <Grid item xs={12} md={4} className='card-1  card-3'>

                            <a href="/project3" className='stretched-link'> </a>
                        </Grid>
                        <Grid item xs={12} md={4} className='card-1 card-4'>

                            <a href="/project4" className='stretched-link'> </a>
                        </Grid>
                        <Grid item xs={12} md={4} className='card-1 card-5'>

                            <a href="/project5" className='stretched-link'> </a>
                        </Grid>
                        <Grid item xs={12} md={4} className='card-1 card-6'>

                            <a href="/project6" className='stretched-link'> </a>
                        </Grid>

                    </Grid>
                </div>
            </Container>
        </div>
    );
};

export default Portfolio;