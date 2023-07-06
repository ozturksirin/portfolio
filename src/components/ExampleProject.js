import React from 'react'
import '../assets/style/exampleProject.css'
import Spline from '@splinetool/react-spline';
import { Col, Row } from 'react-bootstrap';

const ExampleProject = () => {
    return (
        <div className='example-body'>
            <Row className='w-100'>
                <Col md={6} className='content-col'>
                    <h1 className='title'>Featured  Project</h1>
                    <h2 className='sub-title'>Example Project</h2>
                    <div className='content-area'>
                        <p className='content'>
                            A web app for visualizing personalized Spotify data. View your
                            top artists, top tracks, recently played tracks, and detailed audio
                            information about each track. Create and save new playlists of
                            recommended tracks based on your existing playlists and more.
                        </p>
                    </div>
                </Col>
                <Col md={6} className='spline-col'>
                    <Spline scene="https://prod.spline.design/gl5RN1PooHnnvVP3/scene.splinecode"



                        style={{
                            width: '500px', height: '400px',
                            position: 'relative',
                        }}
                    />
                </Col>
            </Row>
            {/* left image version */}
            <Row className='w-100'>
                <Col md={6} className='spline-col'>
                    <Spline scene="https://prod.spline.design/gl5RN1PooHnnvVP3/scene.splinecode"
                        style={{
                            width: '500px', height: '500px',
                            position: 'relative',
                        }}
                    />
                </Col>
                <Col md={6} className='content-col'>
                    <h1 className='title'>Featured  Project</h1>
                    <h2 className='sub-title'>Example Project</h2>
                    <div className='content-area'>
                        <p className='content'>
                            A web app for visualizing personalized Spotify data. View your
                            top artists, top tracks, recently played tracks, and detailed audio
                            information about each track. Create and save new playlists of
                            recommended tracks based on your existing playlists and more.
                        </p>
                    </div>
                </Col>

            </Row>
        </div>
    )
}

export default ExampleProject
