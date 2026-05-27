'use client'
import Footer from '@/src/components/Footer'
import Header from '@/src/components/Header'
import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay';
export const dynamic = "force-static";


const page = () => {
    const [activeSlide, setActiveSlide] = useState("SocialMedia");
    const creativeSection = ['SocialMedia', 'AdsCreative', 'OffPrintDesign']

    const slides = [
        "/creative/1.png",
        "/creative/2.png",
        "/creative/3.png",
        "/creative/1.png",
        "/creative/2.png",
        "/creative/3.png",
        "/creative/1.png",
        "/creative/2.png",
        "/creative/3.png",
        "/creative/1.png",
        "/creative/2.png",
        "/creative/3.png",
    ];

    const adsCreative = [
        "/creative/4.png",
        "/creative/5.png",
        "/creative/6.png",
        "/creative/7.png",
        "/creative/8.png",
        "/creative/4.png",
        "/creative/5.png",
        "/creative/6.png",
        "/creative/7.png",
        "/creative/8.png",
        "/creative/4.png",
        "/creative/5.png",
        "/creative/6.png",
        "/creative/7.png",
        "/creative/8.png",
    ]

    const OffPrintDesign = [
        "/creative/offPrintDesign/1.png",
        "/creative/offPrintDesign/2.png",
        "/creative/offPrintDesign/3.png",
        "/creative/offPrintDesign/4.png",
        "/creative/offPrintDesign/5.png",
        "/creative/offPrintDesign/6.png",
        "/creative/offPrintDesign/7.png",
        "/creative/offPrintDesign/8.png",
        "/creative/offPrintDesign/9.png",
        "/creative/offPrintDesign/1.png",
        "/creative/offPrintDesign/2.png",
        "/creative/offPrintDesign/3.png",
        "/creative/offPrintDesign/4.png",
        "/creative/offPrintDesign/5.png",
        "/creative/offPrintDesign/6.png",
    ]


    return (
        <>
            <Header />

            <div className='overflow-hidden'>

                <div className='performance-parent'>
                    <section className="banner-positioning performance-marketing">
                        <div className="container">
                            <div className='' data-aos="fade-up">
                                <h1 className="banner-title">
                                    Scale Faster With<br className='break-tag' /> Data-Driven Marketing.
                                </h1>

                                <p className="banner-description">
                                    We design performance marketing strategies for brands<br className='break-tag' /> and startups that want  qualified leads, better conversions,<br className='break-tag' /> and measurable growth that goes beyond clicks and impressions.
                                </p>

                                <div className='d-flex'>
                                    <div className="wrapper">
                                        <a href="/contact-us" className='perosnal-brand'><span>Book a Consultation</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className='section-padding'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div data-aos="fade-down">
                                    <h2 className='common-heading mb-6'>Why you need performance marketing for your brand</h2>
                                    <div className="wrapper">
                                        <a href="https://www.linkedin.com/in/arunachalam-numismatician/" target='_blank' className='black'><span>Let’s Connect</span> <i className="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                </div>

                            </div>
                            <div className='col-lg-6'>
                                <div className='mt-lg-0 mt-5' data-aos="fade-down" data-aos-delay="300">
                                    <p>Performance marketing focuses on measurable outcomes such as leads, sales, and customer acquisition. Every campaign is built to track performance and optimize results using real data. Instead of spending on ads without clear visibility, brands can monitor exactly how their marketing budget performs across channels.</p>
                                    <p className='mt-4'>This approach allows businesses to continuously test, refine, and scale campaigns that deliver the best results. With data-driven insights and constant optimization, performance marketing helps brands improve efficiency, reduce wasted spend, and turn marketing investments into consistent, measurable growth.</p>                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="features-section section-padding-bottom">
                    <div className="container">

                        <div className="text-center mb-5" data-aos="zoom-in">
                            <h2 className="common-heading">
                                Who This Works Best For
                            </h2>
                            <p className="text-muted pb-4">
                                Brands that want measurable growth, better conversions, and<br className='break-tag' /> marketing that directly drives revenue.
                            </p>
                        </div>

                        <div className='mt-5'>
                            <div className="row g-4 align-items-center justify-content-center d-flex">
                                {[
                                    {
                                        icon: "fa-comment-dots",
                                        title: "Startups Ready to Scale",
                                        desc: "Early-stage and growing startups that want predictable lead generation, efficient customer acquisition, and faster market traction through targeted performance campaigns."
                                    },
                                    {
                                        icon: "fa-robot",
                                        title: "D2C & Ecommerce Brands",
                                        desc: "Brands looking to increase online sales through optimized advertising, better audience targeting, and conversion-focused campaign strategies."
                                    },
                                    {
                                        icon: "fa-database",
                                        title: "Growth-Focused Companies",
                                        desc: "Businesses that want clear ROI from marketing efforts and the ability to continuously optimize campaigns to drive consistent, scalable revenue growth."
                                    },
                                    // {
                                    //     icon: "fa-rotate",
                                    //     title: "Stay Consistent Without Stress",
                                    //     desc: "We help plan, structure, and manage your messaging so your brand stays active."
                                    // },
                                    // {
                                    //     icon: "fa-inbox",
                                    //     title: "Build Meaningful Connections",
                                    //     desc: "Engage with the right audience and nurture relationships that lead to ."
                                    // },
                                    // {
                                    //     icon: "fa-chart-column",
                                    //     title: "Measure Your Influence",
                                    //     desc: "Track visibility, engagement, and opportunities generated through your personal brand."
                                    // }
                                ].map((item, index) => (
                                    <div className="col-lg-4 col-md-6" key={index} data-aos="fade-up" data-aos-delay={index * 120}>
                                        <div className="feature-card-service">

                                            <div className="card-body">
                                                <div className="feature-icon mb-3">
                                                    <i className={`fa-solid ${item.icon}`}></i>
                                                </div>

                                                <h5 className="card-title">
                                                    {item.title}
                                                </h5>

                                                <p className="card-text">
                                                    {item.desc}
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>

                    </div>
                </section>

                <div className='section-padding-bottom'>
                    <div className='container'>
                        <div className='row'>

                            <div className='col-lg-6'>
                                <div data-aos="fade-right">
                                    <h2 className='common-heading mb-6'>How Performance Marketing Drives Growth</h2>
                                    <p>Performance marketing focuses on measurable results that directly impact your business. Campaigns are designed to generate qualified leads, increase conversions, and drive customer acquisition across the platforms where your audience is most active. Every strategy is built around clear goals, ensuring marketing efforts contribute to real growth rather than just impressions or reach.</p>
                                    <p className='mt-4'>By combining data, creative strategy, and continuous optimization, brands can understand what works and scale campaigns that perform best. Real-time insights help refine targeting, improve efficiency, and ensure marketing budgets are invested where they deliver the strongest results.</p>
                                </div>
                            </div>

                            <div className='col-lg-6'>
                                <div className='ms-lg-5 ms-0 mt-lg-0 mt-5' data-aos="fade-left">
                                    <img src="/performance-growth.png" alt="" className='image-fluid ' />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <section className="why-section-service section-padding">
                    <div className="container">

                        <div className="mb-4">
                            <h2 className="common-heading" data-aos="fade-right">
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
                                <div className="col-lg-6" key={index} data-aos="fade-up" data-aos-delay={index * 120}>
                                    <div className="why-card-services">
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

                    </div>
                </section>

            </div>

            <section className="research-section section-padding">
                <div className="container">

                    <div className='mb-5' data-aos="zoom-in">
                        <h2 className="common-heading text-center">
                            How We Plan<br className='break-tag' /> Performance Campaigns
                        </h2>
                        <p className='mt-4 text-center'>We follow a structured, data-first approach to ensure every campaign is<br className='break-tag' /> built for measurable growth and optimized for the best possible results.</p>
                    </div>

                    <div className='pt-3'>
                        <div className="row g-4">
                            {[
                                {
                                    icon: "fa-comment-dots",
                                    title: "Market & Audience Research",
                                    desc: "We analyze your market, audience behavior, and customer intent to understand who is most likely to convert and where they can be reached"
                                },
                                {
                                    icon: "fa-robot",
                                    title: "Competitor Benchmarking",
                                    desc: "We study competitor campaigns, messaging, and channel strategies to identify opportunities and gaps your brand can leverage"
                                },
                                {
                                    icon: "fa-database",
                                    title: "Performance Strategy",
                                    desc: "Based on insights, we design a clear campaign strategy including channel selection, budget allocation, and performance goals"
                                },
                                {
                                    icon: "fa-rotate",
                                    title: "Creative & Ad Development",
                                    desc: "We craft high-performing ad creatives and messaging designed to capture attention and encourage action"
                                },
                                {
                                    icon: "fa-inbox",
                                    title: "Campaign Launch",
                                    desc: "Campaigns are structured, tracked, and launched with proper analytics to ensure accurate performance measurement from day one"
                                },
                                {
                                    icon: "fa-chart-column",
                                    title: "Optimization & Scaling",
                                    desc: "We continuously monitor results, test variations, and scale the campaigns that generate the highest conversions and ROI"
                                }
                            ].map((item, index) => (
                                <div className="col-lg-4 col-md-6" key={index} data-aos="fade-down" data-aos-delay={index * 120}>
                                    <div className="feature-card-service performance-research-card">

                                        <div className="card-body">
                                            <div className="feature-icon mb-3">
                                                <i className={`fa-solid ${item.icon}`}></i>
                                            </div>

                                            <h5 className="card-title">
                                                {item.title}
                                            </h5>

                                            <p className="card-text">
                                                {item.desc}
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                    <div className='d-flex justify-content-center mt-5'>
                        <div className="wrapper">
                            <a href="https://calendly.com/arunachalam-socialsculpt/30min" target='_blank' className='black'><span>Book a Call</span></a>

                        </div>
                    </div>


                </div>
            </section>

            <div className='section-padding-bottom '>
                <div className='container'>
                    <div className='common-page-cta' data-aos="zoom-in">

                        <h3 className='common-heading mb-4'>Turn Clicks Into Customers</h3>
                        <p>Drive more leads, better conversions, and measurable growth with performance marketing that works.</p>

                        <div className='d-flex justify-content-center align-item-center mt-5 final-cta-btn'>
                            <div className="wrapper">
                                <a href="/contact-us"><span>Book a Call</span></a>
                            </div>
                            <div className="wrapper ms-lg-4 ms-md-4 ms-0 mt-lg-0 mt-md-0 mt-4">
                                <a href="/contact-us"><span>Contact Us</span></a>
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
