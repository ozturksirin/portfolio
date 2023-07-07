import React from 'react'
import '../assets/style/exampleProject.css'
import { Col, Row } from 'react-bootstrap';

const ExampleProject = (props) => {
    const { title, subTitle, content,
        spline, splineSecond, titleSecond,
        subTitleSecond, contentSecond
    } = props;
    return (
        <div className='example-body'>
            <Row className='w-100'>
                <Col md={6} className='content-col'>
                    <h1 className='title'>{title}</h1>
                    <h2 className='sub-title'>{subTitle}</h2>
                    <div className='content-area'>
                        <p className='content'>
                            {
                                content
                            }
                        </p>
                    </div>
                </Col>
                <Col md={6} className='spline-col'>
                    {
                        spline
                    }
                </Col>
            </Row>
            {/* version left content  */}
            <Row className='w-100 mt-5'>
                <Col md={6} className='spline-col'>
                    {
                        splineSecond
                    }
                </Col>
                <Col md={6} className='content-col'>
                    <h1 className='title'>{titleSecond}</h1>
                    <h2 className='sub-title'>{subTitleSecond}</h2>
                    <div className='content-area'>
                        <p className='content'>
                            {
                                contentSecond
                            }
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ExampleProject
