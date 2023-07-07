import React from 'react'
import '../../assets/style/home.css'
import { Container, Row, Col, Image } from 'react-bootstrap'
import profile from '../../assets/images/profile.png'
import arrow from '../../assets/images/Arrow.svg'
import WorkCard from '../../components/WorkCard'
import skills from '../../assets/images/skills.png'
import ExampleProject from '../../components/ExampleProject'
import instagram from '../../assets/images/icons/instagram.svg'
import linkedln from '../../assets/images/icons/linkedln.svg'
import github from '../../assets/images/icons/github.svg'
import twitter from '../../assets/images/icons/twitter.svg'
import medium from '../../assets/images/icons/medium.svg'
import google from '../../assets/images/icons/google.svg'
import Spline from '@splinetool/react-spline';

import myProfile from '../../assets/images/myProfile.png'

const Home = () => {
    return (
        <Container fluid="md">
            <Row>
                <Col md={7}>
                    <div className='profile-body mt-5'>
                        <div className='d-flex'>
                            <div className='img-area'>
                                <Image className='profile-img mt-5' src={myProfile} />
                            </div>
                            <div className='d-block'>
                                <div className='d-flex'>
                                    <Image className='arrow' src={arrow} />
                                    <h1 className='name-title'> Hello I' AM <span className='name'>Öztürk Şirin</span></h1>
                                </div>
                                <div style={{ marginLeft: 50 }}>
                                    <h2 className='subtitle'>A Software Developer who</h2>
                                    <h3 className='content'>Judges a book <br /> by its <span className='content-sep'>cover</span>...</h3>
                                    <p className='description'>Because if the cover does not impress you what else can?</p>
                                </div>
                            </div>
                        </div>
                        <div className='basic-about mt-5'>
                            <p className='title'>I'm a Software Engineer.|</p>
                            <p className='position'>Currently, I'm a Software Engineer at<span className='company'> Facebook</span>,</p>
                            <div>
                                <p className='my-info mt-5'>
                                    A self-taught UI/UX designer, functioning in the industry for 3+ years now.
                                    I make meaningful and delightful digital products that create an equilibrium
                                    between user needs and business goals.
                                </p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <div className='work-experience' style={{ marginTop: 80 }}>
                <h1 className='work-title'>Work Experience</h1>
                <Row>
                    <Col md={6}>
                        <WorkCard />
                        <WorkCard />
                    </Col>
                    <Col md={6}>
                        <WorkCard />
                        <WorkCard />
                    </Col>
                </Row>
            </div>
            <div className='skills-body mt-5'>
                <p className='skills-title'>
                    Skills
                </p>
                <Image className='skills-img' src={skills} alt='skills' />
            </div>

            <div className='example-project mt-5'>
                <ExampleProject
                    title={'TEST'}
                    subTitle={'test'}
                    content={
                        `
                        A web app for visualizing personalized Spotify data. View your
                        top artists, top tracks, recently played tracks, and detailed audio
                        information about each track. Create and save new playlists of
                        recommended tracks based on your existing playlists and more.
                        `
                    }
                    spline={
                        <Spline scene="https://prod.spline.design/gl5RN1PooHnnvVP3/scene.splinecode"
                            style={{
                                width: '500px', height: '400px',
                                position: 'relative',
                            }}
                        />
                    }
                    splineSecond={
                        <Spline scene="https://prod.spline.design/4ufXr2X7hbCnHk-L/scene.splinecode"
                            style={{
                                width: '500px', height: '500px',
                                position: 'relative',
                            }}
                        />
                    }
                    titleSecond={'test2'}
                    subTitleSecond={'test2'}
                    contentSecond={
                        `
                        A web app for visualizing personalized Spotify data. View your
                        top artists, top tracks, recently played tracks, and detailed audio
                        information about each track. Create and save new playlists of
                        recommended tracks based on your existing playlists and more.
                        `
                    }
                />
                <ExampleProject
                    title={'TEST'}
                    subTitle={'test'}
                    content={
                        `
                        A web app for visualizing personalized Spotify data. View your
                        top artists, top tracks, recently played tracks, and detailed audio
                        information about each track. Create and save new playlists of
                        recommended tracks based on your existing playlists and more.
                        `
                    }
                    spline={
                        <Spline scene="https://prod.spline.design/UW0MVUj7DDRdVWwX/scene.splinecode"
                            style={{
                                width: '500px', height: '500px',
                                position: 'relative',
                            }}
                        />
                    }
                    splineSecond={
                        <Spline scene="https://prod.spline.design/tDAX0OfVBN99T4oM/scene.splinecode"
                            style={{
                                width: '500px', height: '500px',
                                position: 'relative',
                            }}
                        />

                    }
                    titleSecond={'test2'}
                    subTitleSecond={'test2'}
                    contentSecond={
                        `
                        A web app for visualizing personalized Spotify data. View your
                        top artists, top tracks, recently played tracks, and detailed audio
                        information about each track. Create and save new playlists of
                        recommended tracks based on your existing playlists and more.
                        `
                    }

                />
            </div>
            <section id='contact-section'>
                <div className='contact-body mt-5 mb-5'>
                    <Row className='w-100'>
                        <Col md={7}>
                            <h1 className='title'>Contact</h1>
                            <p className='content mt-4'>
                                I'm currently looking to join a cross-functional team that values improving people's lives
                                through accessible design. or have a project in mind? Let's connect.
                            </p>
                            <p className='content mt-4'>
                                ozturksirininfo@gmail.com
                            </p>
                            <div className='social-body d-flex justify-content-between'>
                                <Image src={linkedln} alt='linkedln' className='social-icon'
                                    onClick={
                                        () => window.open('https://www.linkedin.com/in/%C3%B6zt%C3%BCrk-%C5%9Firin/', '_blank')
                                    }
                                />
                                <Image src={google} alt='mail' className='social-icon'
                                    onClick={
                                        () => window.open('mailto: ozturksirininfo@gmail.com', '_blank')
                                    }
                                />
                                <Image src={github} className='social-icon'
                                    alt='github'
                                    onClick={
                                        () => window.open('https://github.com/ozturksirin', '_blank')
                                    }
                                />
                                <Image src={twitter} className='social-icon'
                                    alt='twitter'
                                    onClick={
                                        () => window.open('https://twitter.com/Ozturksrnn', '_blank')
                                    }
                                />
                                <Image src={medium} className='social-icon'
                                    alt='medium'
                                    onClick={
                                        () => window.open('https://medium.com/@OzturkSirin', '_blank')
                                    }
                                />
                                <Image src={instagram} className='social-icon'
                                    alt='instagram'
                                    onClick={
                                        () => window.open('https://www.instagram.com/ozturksrn/', '_blank')
                                    }
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </Container >
    )
}

export default Home
