import React from 'react'
import { Col, Row } from 'react-bootstrap';

const Resume = () => {
    return (
        <div>
            <Row xs={1} md={2} className='g-4'>
                <Col>
                    <a href="#education">Education</a>
                    <a href="#work">Work History</a>
                    <a href="#skills">Programming Skills</a>
                    <a href="#projects">Projects </a>
                    <a href="#interest">Interest</a>
                </Col>
            </Row>
        </div>
    )
}

export default Resume;
