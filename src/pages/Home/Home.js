import React from 'react'
import '../../assets/style/home.css'
import { Container, Row, Col, Image } from 'react-bootstrap'
// import profile from '../../assets/images/profile.png'
import arrow from '../../assets/images/Arrow.svg'
// import WorkCard from '../../components/WorkCard'
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
import { TypeAnimation } from 'react-type-animation'

const Home = () => {
    return (
        <Container fluid="md">
            <section id='profile-section'>
                <Row className='w-100 mt-5'>
                    <Col md={8}>
                        <div className='profile-body'>
                            <div className='d-flex mobile-profile'>
                                <div className='img-area'>
                                    <Image className='profile-img mt-5' src={myProfile} alt='öztürk|şirin|portfolio' />
                                </div>
                                <div className='d-block'>
                                    <div className='d-flex test'>
                                        <Image className='arrow' src={arrow} alt='arrow' />
                                        <h1 className='name-title'>Hello I' AM <span className='name'>Öztürk Şirin</span></h1>
                                    </div>
                                    <div style={{ marginLeft: 50 }}>
                                        <h2 className='subtitle'>A Software Developer who</h2>
                                        <h3 className='content'>Code speaks louder than <span className='content-sep'>words</span>...</h3>
                                        <p className='description'>Let your creations do the talking.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='basic-about mt-5'>
                                <TypeAnimation
                                    className='title'
                                    cursor={true}
                                    sequence={['I am a Software Developer.',
                                        2000,
                                        'I am a  Programmer.',
                                        2000,
                                        'I am a Software Developer.',
                                    ]}
                                    speed={20}
                                    repeat={Infinity}


                                />
                                <p className='position'>I am currently working as a <span className='company'>freelencer</span>,</p>
                                <div>
                                    <p className='my-info mt-5'>
                                        Hello, I graduated from BANDIRMA ONYEDİ EYLÜL UNIVERSITY computer programming.
                                        I gained important experience during my internship at the beginning of my career.
                                        I had the opportunity to improve myself especially in frontend development and took an active role in a total of 2 projects.
                                        These projects allowed me to gain extensive experience by working on both mobile and web platforms.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </section>
            {/* <div className='work-experience' style={{ marginTop: 80 }}>
                <h1 className='work-title'>Work Experience</h1>
                <Row>
                    <Col md={6}>
                        <WorkCard />
                    </Col>
                    <Col md={6}>
                        <WorkCard />
                    </Col>
                </Row>
            </div> */}
            <div className='skills-body mt-5'>
                <p className='skills-title'>
                    Skills
                </p>
                <Image className='skills-img' src={skills} alt='skills' />
            </div>
            <section id='work-section'>
                <div className='example-project mt-5'>
                    <ExampleProject
                        title={'İlkay Elektronik'}
                        subTitle={'Web Site'}
                        content={
                            `
                        İlkay Elektronik is a business that sells satellite, television, 
                        electronic equipment and similar technological products to its customers.
                        It is a corporate website with a simple, simple design, made for easy use 
                        and to increase user interaction. ( Built with reactjs technology )
                        `
                        }
                        spline={
                            <Spline scene="https://prod.spline.design/gl5RN1PooHnnvVP3/scene.splinecode"
                                style={{
                                    height: '400px',
                                    position: 'relative',
                                }}
                            />
                        }
                        splineSecond={
                            <Spline scene="https://prod.spline.design/4ufXr2X7hbCnHk-L/scene.splinecode"
                                style={{
                                    height: '500px',
                                    position: 'relative',
                                }}
                            />
                        }
                        titleSecond={'Music App'}
                        subTitleSecond={'Mobile App'}
                        contentSecond={
                            `
                        A mobile application I made between the courses and projects
                        I followed while learning react native development. (Developed with React native)
                        `
                        }
                    />
                    <ExampleProject
                        title={'Irrigation system'}
                        subTitle={'Mobile App & Ardunio'}
                        content={
                            `
                        Plant irrigation system that can be controlled via mobile application developed with esp-8266.
                        I did the mobile application development.
                        In the hardware part, we worked together with my teammate. ( Developed with Java )
                        `
                        }
                        spline={
                            <Spline scene="https://prod.spline.design/UW0MVUj7DDRdVWwX/scene.splinecode"
                                style={{
                                    height: '500px',
                                    position: 'relative',
                                }}
                            />
                        }
                        splineSecond={
                            <Spline scene="https://prod.spline.design/tDAX0OfVBN99T4oM/scene.splinecode"
                                style={{
                                    height: '500px',
                                    position: 'relative',
                                }}
                            />

                        }
                        titleSecond={'Todo App'}
                        subTitleSecond={'Mobile App'}
                        contentSecond={
                            `
                            A simple mobile app that I made between
                            the lessons and projects I watched while learning react native development.
                            (Developed with React Native)
                            `
                        }

                    />
                </div>
            </section>
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
