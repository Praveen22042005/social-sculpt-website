'use client'
import Footer from '@/src/components/Footer'
import Header from '@/src/components/Header'
import React, { useState } from 'react'
export const dynamic = "force-static";


const page = () => {
    const [active, setActive] = useState<number | null>(0)

    const services = [
        {
            title: "Performance Marketing",
            content: (
                <>
                    <p className="mb-6 text-gray-600">
                        Our brand strategy thrives on our ability to think outside the realm and craft narratives  that capture, nurture, and nourish any desired market.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                        <ul className="space-y-2 list-disc pl-5">
                            <li>Strategic Planning</li>
                            <li>Digital Transformation Strategies</li>
                        </ul>
                        <ul className="space-y-2 list-disc pl-5">
                            <li>Go-To-Market Strategy</li>
                            <li>Brand Positioning & Differentiation</li>
                        </ul>
                    </div>
                </>
            )
        },
        { title: "Search Engine Optimization", content: <p className="text-gray-600">Brand identity services...</p> },
        { title: "Digital Marketing", content: <p className="text-gray-600">Digital marketing services...</p> },
        { title: "Branding", content: <p className="text-gray-600">Production services...</p> },
    ]

    return (

        <>
            <Header />


            <div className='overflow-hidden'>
                <div className='growth-marketing-parent'>

                    <section className="banner-positioning growth-marketing">
                        <div className="container">
                            <div className='' data-aos="fade-up">
                                <h1 className="banner-title">
                                    Strategic Growth<br className='break-tag' />  Beyond Trends
                                </h1>

                                <p className="banner-description" >
                                    We design strategic Social Media Marketing systems that help brands<br className='break-tag' /> grow their audience, strengthen engagement, and convert <br className='break-tag' /> social presence into meaningful business impact.
                                </p>

                                <div className='d-flex'>
                                    <div className="wrapper">
                                        <a href="https://calendly.com/arunachalam-socialsculpt/30min" target='_blank' className='perosnal-brand'><span>Book a Consultation</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section-padding">
                        <div className="container">
                            <div className="row align-items-start ">

                                <div className="col-lg-6 " >
                                    <div className='mb-5 mb-lg-0 me-lg-5' data-aos="fade-up" data-aos-delay="100">

                                        <span className="section-label">SERVICES</span>

                                        <h2 className="services-heading mt-4">
                                            Our growth marketing strategies are designed to help brands scale sustainably.
                                        </h2>

                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="services-links" data-aos="fade-up" data-aos-delay="300">
                                        {[
                                            { title: "Performance Marketing", link: "/services/performance-marketing" },
                                            { title: "Social Media Marketing", link: "/services/social-media-marketing" },
                                            { title: "Search Engine Optimization", link: "/services/search-engine-optimization" },
                                        ].map((item, index) => (
                                            <div key={index} data-aos-delay={index * 120}>
                                                <a
                                                    key={index}
                                                    href={item.link}
                                                    className="service-link-item"
                                                >
                                                    <span>{item.title}</span>
                                                    <i className="fa-solid fa-arrow-right-long arrow"></i>
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                    <section className='section-padding pt-lg-0 pt-0 my-lg-4'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div data-aos="fade-up" data-aos-delay="100" >
                                        <h2 className='personal-head-left'>
                                            SYSTEMS
                                            WHICH SCALE
                                            GROWTH
                                        </h2>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div data-aos="fade-up" data-aos-delay="300">
                                        <h2 className='personal-head-right grwoth-marketing'>We create high-performing funnels, campaigns, and automation
                                            flows that <span className="contact-back-span"> convert attention into predictable demand.</span>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="why-section-service section-padding">
                        <div className="container">

                            <div className="mb-4">
                                <h2 className="common-heading">
                                    Why Choose Social Sculpt?
                                </h2>
                            </div>

                            <div className="row">

                                {[
                                    {
                                        number: "01",
                                        title: "We Start With You",
                                        desc: "We take the time to understand who you are, what you stand for, and where you want to go. Everything we build comes from that foundation."
                                    },
                                    {
                                        number: "02",
                                        title: "No Forced Trends",
                                        desc: "We don’t believe in chasing what’s popular if it doesn’t fit. The focus is always on creating something that feels natural, relevant, and true to you."
                                    },
                                    {
                                        number: "03",
                                        title: "A Collaborative Process",
                                        desc: "You are part of the journey. We work closely with you at every stage to ensure the outcome feels aligned and intentional."
                                    },
                                    {
                                        number: "04",
                                        title: "Built for the Long Run",
                                        desc: "We are not here for quick spikes. The focus is on steady growth, meaningful visibility, and building something that lasts."
                                    }
                                ].map((item, index) => (
                                    <div className="col-lg-6" key={index} >
                                        <div className="why-card-services" data-aos="fade-up" data-aos-delay={index * 120}>
                                            <div>
                                                <div className="badge-circle">
                                                    {item.number}
                                                </div>
                                            </div>

                                            <div className='ms-4'>
                                                <h4 className="title mb-3">
                                                    {item.title}
                                                </h4>

                                                <p className="mb-0">
                                                    {item.desc}
                                                </p>

                                                <span className="bg-number">
                                                    {item.number}
                                                </span>
                                            </div>

                                        </div>
                                    </div>
                                ))}

                            </div>

                            <div className='d-flex justify-content-center mt-5'>
                                <div className="wrapper">
                                <a href="https://calendly.com/arunachalam-socialsculpt/30min" target='_blank' className='banner-second-btn black'><span>Book a Strategy Call </span></a>
                                </div>
                            </div>

                        </div>
                    </section>

                    <div className='section-padding'>
                        <div className='container'>
                            <div className='common-page-cta' data-aos="fade-up">

                                <h3 className='common-heading mb-4'>Build Growth That Scales</h3>
                                <p>Create performance-driven campaigns that convert attention into consistent growth.</p>

                                <div className='d-flex justify-content-center align-item-center mt-5 final-cta-btn'>
                                    <div className="wrapper">
                                        <a href="https://calendly.com/arunachalam-socialsculpt/30min" target='_blank'><span>Book a Call</span></a>
                                    </div>
                                    <div className="wrapper ms-lg-4 ms-md-4 ms-0 mt-lg-0 mt-md-0 mt-4">
                                        <a href="/contact-us"><span>Contact Us</span></a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    )
}

export default page
