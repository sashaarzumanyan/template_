import React from 'react'
import logo from './images/logo.svg'
import linkedIn from './images/linkedin.png'
import { FaLinkedinIn } from 'react-icons/fa';
import { SiYoutube } from 'react-icons/si'


import './footer.css'

const Footer = () => {

    const menu = ["Home", "About Us", "Technical Assistance", "Procurement", "Projects", "Successful Stories",
        "News", "Contacts"]


    return (
        <div className='allFooter'>

            <div className='footerLogo'>
                <div className='footerLogo_logo'>
                    <img src={logo} />
                </div>

                <div className='footerLogo_container'>
                    <button className='linkdin'>
                        <FaLinkedinIn />
                        <a target={"blank"} href="https://www.linkedin.com/"></a>
                    </button>
                    <button className='look_profile'>Отслеживать</button>
                    <div>1111</div>
                </div>

                <div className='subscribe_youtube'>
                    <button>
                        <SiYoutube />
                        <div>YouTube</div>
                        <a href="https://www.youtube.com/"></a>
                    </button>
                    <div>4</div>
                </div>
            </div>


            <div className='contact_page'>
                <div className='visit_contact'>
                    <div className='visit'>
                        <h4>Visit</h4>
                        <p>
                            Via Arcangelo Corelli, 10
                            00198 Rome
                        </p>
                    </div>
                    <div className='contact'>
                        <h4>Contact</h4>
                        <div>
                            <span>T</span>
                            <a href="+39 06-3609381">+39 06-3609381</a>
                        </div>
                        <div>
                            <span>F</span>
                            <a href="+39 06-36093861">+39 06-36093861</a>
                        </div>
                        <div>
                            <span>M</span>
                            <a href="info@agtinternational.it">info@agtinternational.it</a>
                        </div>
                    </div>
                </div>

                <div className='menu'>
                    <h4>Menu</h4>
                    {menu.map((e) => <a key={e.id} href=''>{e}</a>)}
                </div>


                <div className='job_legal'>
                    <div className='job'>
                        <h4>Job Opportunity</h4>
                        <a href=''>Careers</a>
                        <a href=''>Register your cv</a>
                    </div>

                    <div className='legal'>
                        <h4>Legal</h4>
                        <a href=''>Documents</a>
                        <a href=''>Credits</a>
                    </div>
                </div>

            </div>

            <div></div>
        </div >
    )
}

export default Footer