'use client'
import React from 'react'
import Marquee from "react-fast-marquee";

const Footer = () => {
    return (
        <div>
            <section className="footer-cta-section section-padding">
                <div className="container">
                    <div className="row align-items-start footer-cta-top">
                        <div className="col-lg-7">
                            <h2 className="footer-cta-title">
                                Ready to sculpt your <br className="break-tag" />personal brand?
                            </h2>
                            <p className="footer-cta-subtitle">
                                Let's talk about your growth - book a consultation.
                            </p>
                            <div className="wrapper">
                                <a href="https://calendly.com/arunachalam-socialsculpt/30min" target='_blank' className='perosnal-brand'><span>Book a consultation</span></a>
                            </div>
                        </div>

                        <div className="col-lg-5 ">
                            <div className=''>
                                <ul className="social">

                                    <li data-tooltip="Instagram">
                                        <a href="https://www.instagram.com/social.sculpt.inc/" aria-label="Instagram" target='_blank'>
                                            <i className="fa-brands fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li data-tooltip="Linkedin">
                                        <a href="https://www.linkedin.com/company/socialsculpt-inc" aria-label="Linkedin" target='_blank'>
                                            <i className="fa-brands fa-linkedin-in"></i>
                                        </a>
                                    </li>

                                    <li data-tooltip="YouTube" >
                                        <a href="https://www.youtube.com/@Social.sculpt" aria-label="YouTube" target='_blank'>
                                            <i className="fa-brands fa-youtube"></i>
                                        </a>
                                    </li>

                                    {/* <li data-tooltip="Facebook" >
                                        <a href="#" aria-label="Facebook">
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    
                                    <li data-tooltip="Twitter"  >
                                        <a href="https://twitter.com/optimisticweb" aria-label="Twitter">
                                            <i className="fa-brands fa-x-twitter"></i>
                                        </a>
                                    </li> */}

                                </ul>
                            </div>

                        </div>
                    </div>

                    <hr className="footer-divider" />

                    <div className="row footer-links">
                        <div className="col-lg-10">
                            <ul className="footer-nav">
                                <li><a href="/">Home</a></li>
                                <li><a href="/whoweare">About Us</a></li>
                                <li><a href="/services/growth-marketing">Growth Marketing</a></li>
                                <li><a href="/services/personal-branding">Personal Branding</a></li>
                                <li><a href="/services/consulting">Consulting</a></li>
                            </ul>
                        </div>

                    </div>

                    <div className='footer-social-media'>
                        <div className="row">
                            <div className="col-lg-3">
                                <p className="footer-label">Phone</p>
                                <a href="tel:+91 755 003 9872">
                                    +91 755 003 9872
                                </a>
                                <a href="tel:+91 7395 984 542" className='ms-4'>
                                    +91 7395 984 542
                                </a>
                            </div>

                            {/* <div className="col-lg-5">
                                <p className="footer-label">Legal</p>
                                <div className='d-flex'>
                                    <a href="/terms" className="footer-link footer-text">Terms & Conditions</a><br className="break-tag"/>
                                    <a href="/privacy" className="footer-link ms-3 footer-text">Privacy Policy</a>
                                </div>
                            </div> */}

                            <div className="col-lg-3">
                                <div className='mt-lg-0 mt-md-0 mt-4'>
                                <p className="footer-label">Email us</p>
                                <a href="mailto:marketing@socialsculpt.in" className='footer-text'>
                                    marketing@socialsculpt.in
                                </a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='footer-social-media '>
                        <div className="row ">


                            <div className="col-lg-5">
                                <p className="footer-label">Address</p>
                                <div className='d-flex'>
                                    <a href="https://maps.app.goo.gl/Vh74Q8T5rtqMRVaNA" target='_blank' className="footer-link footer-text">Ground floor, Vijay Kalyani Apartment, A1,<br className="break-tag" /> 103/74Avvai, Shanmugham salai, Jagadambal Colony,<br className="break-tag" />  Teachers Colony, Royapettah, Chennai, Tamil Nadu 600014</a><br className="break-tag" />
                                </div>
                            </div>


                            <div className="col-lg-3">
                                <div className='mt-lg-0 mt-5'>
                                    <p className="footer-label">Social Sculpt</p>
                                    <p>© 2026 - Copyright</p>
                                </div>
                            </div>

                        </div>
                    </div>



                    <div>
                        <div className="footer-marquee">
                            <Marquee
                                speed={65}
                                direction="right"
                                gradient={false}
                                pauseOnHover={false}
                                autoFill={true}
                            >
                                <span className="marquee-item">Sculpting Allies</span>
                                <span className="marquee-item">Sculpting Allies</span>
                                <span className="marquee-item">Sculpting Allies</span>
                                <span className="marquee-item">Sculpting Allies</span>
                                <span className="marquee-item">Sculpting Allies</span>
                                <span className="marquee-item">Sculpting Allies</span>
                            </Marquee>
                        </div>
                    </div>


                </div>
            </section>

        </div>
    )
}

export default Footer
