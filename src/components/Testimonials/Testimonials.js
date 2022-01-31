import React from 'react';
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import image from '../../images/team/T02ETPL2RB9-U02FY4C3MS4-ec26b8b6486c-512.jpg'
import image2 from '../../images/team/T02ETPL2RB9-U02FEN17FKN-bb995864adde-512.jpg'
import image3 from '../../images/team/T02ETPL2RB9-U02F8FQ2EHG-035bb5c5f359-512.jpg'
import Button from '@restart/ui/esm/Button';
import '../Header/Header.css'


const team = [
    {
        name: 'Nasim Uddin',
        img: image,
        slack: '',
        title: 'Senior Developer'
    },
    {
        name: 'Nasir Uddin',
        img: image2,
        slack: '',
        title: 'Senior Developer'
    },
    {
        name: 'Sarour Uddin',
        img: image3,
        slack: '',
        title: 'Senior Developer'
    }
]



const Testimonials = () => {
    const slides = Array.from({ length: 1000 }).map(
        (el, index) => `Slide ${index + 1}`
    );
    return (
        <div className='p-5'>
            <h1 className='title mb-5'>Our Team</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    team.map(t => <Col>
                        <Card>
                            <Card.Img variant="top" src={t.img} />
                            <Card.Body>
                                <Card.Title>{t.name}</Card.Title>
                                <Card.Text>
                                    {t.title}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>)
                }
            </Row>
        </div>
    );
};

export default Testimonials;