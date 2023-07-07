import React from 'react'
import '../../assets/style/sidebar.css'
import home from '../../assets/images/icons/home.svg'
import { Image } from 'react-bootstrap'
import profile from '../../assets/images/icons/profile.svg'
import work from '../../assets/images/icons/work.svg'
import contact from '../../assets/images/icons/contact.svg'
import { Link } from 'react-scroll'

const Sidebar = () => {
    return (
        <div className='sidebar-body mt-5'>
            <div className='sidebar-content'>
                <Link to='/'
                    className='sidebar-link mt-5'
                    activeClass='active'
                >
                    <Image src={home} alt='home' className='icon' />
                </Link>
                <Link to='/'
                    className='sidebar-link'
                    activeClass='active'
                >
                    <Image src={profile} alt='home' className='icon' />
                </Link>

                <Link to='/'
                    className='sidebar-link'
                    activeClass='active'
                >
                    <Image src={work} alt='home' className='icon' />
                </Link>

                <Link to='contact-section'
                    className='sidebar-link'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={50}
                    activeClass="active"
                >
                    <Image src={contact} alt='home' className='icon' />
                </Link>
            </div>
        </div >
    )
}

export default Sidebar
