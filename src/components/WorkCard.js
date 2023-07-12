import React from 'react'
import '../assets/style/card.css'
import { Col, Image, Row } from 'react-bootstrap'
import coffe from '../assets/images/coffe.svg'

const WorkCard = () => {
    return (
        <div className='card-body'>
            <div className='card-inner '>
                <Row className='w-100'>
                    <Col md={4} sm={4} xs={4}>
                        <Image src={coffe} className='img' />
                    </Col>
                    <Col md={6} sm={6} xs={6} className='mt-5'>
                        <div className='card-content'>
                            <h1 className='card-title'>CIB on the Mobile</h1>
                            <p className='card-content'>Take your client onboard seamlessly by our amazing
                                tool of digital onboard process.
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default WorkCard
