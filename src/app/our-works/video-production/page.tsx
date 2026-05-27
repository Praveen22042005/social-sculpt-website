'use client'

import Footer from '@/src/components/Footer'
import Header from '@/src/components/Header'
import React, { useState } from 'react'


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay';
export const dynamic = "force-static";


const page = () => {

    const adsCreative = [
        "https://www.youtube.com/embed/rRLnMP39SCc?autoplay=1&mute=1&playsinline=1&loop=1&playlist=rRLnMP39SCc",
        "https://www.youtube.com/embed/nGw3rwAmnO0?autoplay=1&mute=1&playsinline=1&loop=1&playlist=nGw3rwAmnO0",
        "https://www.youtube.com/embed/wZ4rlze-2yc?autoplay=1&mute=1&playsinline=1&loop=1&playlist=wZ4rlze-2yc",
        "https://www.youtube.com/embed/9xf2FENV77o?autoplay=1&mute=1&playsinline=1&loop=1&playlist=9xf2FENV77o",
        "https://www.youtube.com/embed/nlWOGXfraN4?autoplay=1&mute=1&playsinline=1&loop=1&playlist=nlWOGXfraN4",
        "https://www.youtube.com/embed/HvQwDJyzGoI?autoplay=1&mute=1&playsinline=1&loop=1&playlist=HvQwDJyzGoI",
        "https://www.youtube.com/embed/w-Zq5MgD1KY?autoplay=1&mute=1&playsinline=1&loop=1&playlist=w-Zq5MgD1KY",
        "https://www.youtube.com/embed/OaA4-oqQ_eg?autoplay=1&mute=1&playsinline=1&loop=1&playlist=OaA4-oqQ_eg",
    ]

    return (
        <>
            <Header />
            
            <div>
                <section className="banner-positioning video-production">
                </section>
            </div>
           
            <section className="methodology-section section-padding podcast-methodology" data-aos="zoom-in">

                <h1 className="hero-title">
                    <span className="white">What This</span>
                    <span className="ms-3 outline">Work</span>
                    <span className="yellow">Represents</span>
                </h1>

                <p className='text-black mt-5 big-text'>This work reflects our approach to video production where every piece <br className='break-tag' />  starts with a clear idea
                    and is executed with intent.  From concept to <br className='break-tag' /> final output, <span className="contact-back-span">
                        the focus is on creating content that feels  <br className='break-tag' /> relevant, engaging, and aligned with the brand.
                    </span></p>
            </section>

            <section className="work-process-section our-approach">
                <div className="overlay"></div>

                <div className="container position-relative">

                    <div className="text-center work-process-section-content" data-aos="fade-up">
                        <p className="mini-title">WORK PROCESS</p>
                        <h2 className='common-heading text-center text-white'>How We Produced It</h2>
                        <p className="section-desc">
                            We follow a structured approach to turn your ideas into consistent, high-performing social media videos
                        </p>
                    </div>

                    <div className="row justify-content-center align-items-center process-row">

                        <div className="col-lg-2 col-md-6 mb-4 position-relative p-0">
                            <div className="process-card" data-aos="fade-up" data-aos-delay="100">
                                <div className="">
                                    <img src="/understanding.png" alt="Understanding the Brand" />
                                </div>
                                <span className="step-label">STEP 1</span>
                                <h4>Understanding</h4>
                            </div>
                        </div>

                        <div className='col-lg-1 p-0'>
                            <div className='work-process-arrow'>
                                <i className="fa-solid fa-arrow-right-long"></i>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 mb-4 position-relative p-0">
                            <div className="process-card" data-aos="fade-up" data-aos-delay="200">
                                <div className="">
                                    <img src="/concept.png" alt="Understanding the Brand" />
                                </div>
                                <span className="step-label">STEP 2</span>
                                <h4>Concept</h4>
                            </div>
                        </div>

                        <div className='col-lg-1 p-0'>
                            <div className='work-process-arrow'>
                                <i className="fa-solid fa-arrow-right-long"></i>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 mb-4 position-relative p-0">
                            <div className="process-card" data-aos="fade-up" data-aos-delay="300">
                                <div className="">
                                    <img src="/production.png" alt="Understanding the Brand" />
                                </div>
                                <span className="step-label">STEP 3</span>
                                <h4>Production</h4>
                            </div>
                        </div>

                        <div className='col-lg-1 p-0'>
                            <div className='work-process-arrow'>
                                <i className="fa-solid fa-arrow-right-long"></i>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 mb-4 p-0">
                            <div className="process-card" data-aos="fade-up" data-aos-delay="400">
                                <div className="">
                                    <img src="/post-production.png" alt="Understanding the Brand" />
                                </div>
                                <span className="step-label">STEP 4</span>
                                <h4>Post Production</h4>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className='videos-delievered section-padding-top'>

                <div className='container'>
                    <h2 className='common-heading mb-5 pb-5 text-center' data-aos="zoom-in">Videos We've Produced</h2>
                </div>

                <section className='section-padding pt-0 my-lg-5 my-0'>
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={1}
                        spaceBetween={10}
                        loop={true}
                        speed={6000}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        allowTouchMove={false}
                        grabCursor={false}
                        freeMode={true}
                        breakpoints={{
                            640: { slidesPerView: 2, spaceBetween: 20 },
                            768: { slidesPerView: 3, spaceBetween: 25 },
                            1024: { slidesPerView: 4, spaceBetween: 30 },
                        }}

                        className="continuous-swiper"
                    >
                        {adsCreative.map((src, i) => (
                            <SwiperSlide key={i} >
                                <div className="" >
                                    <div className="personal-branding-video">
                                        <iframe
                                            src={src}
                                            title="YouTube Shorts"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>

            </section>

            <section className="">
                <div className="container">

                    <div className="text-center">
                        <h2 className="common-heading pb-5" data-aos="zoom-in">
                            What Each Video Was Built To Do
                        </h2>
                    </div>

                    <div className='mt-5'>
                        <div className="row">
                            <div className="col-lg-6 ">
                                <div className='benefit-col me-4'>
                                    <div className="benefit-item" data-aos="fade-up" data-aos-delay="100">
                                        <div className="benefit-header">
                                            <span className="benefit-number">1</span>
                                            <h4>Higher engagement</h4>
                                        </div>
                                        <p>
                                            Hooks, pacing, and calls-to-action that turn passive viewers into active participants.
                                        </p>
                                    </div>

                                    <div className="divider"></div>

                                    <div className="benefit-item mt-5" data-aos="fade-up" data-aos-delay="100">
                                        <div className="benefit-header">
                                            <span className="benefit-number">3</span>
                                            <h4>Increased reach</h4>
                                        </div>
                                        <p>

                                            Tailored for YouTube, Instagram, LinkedIn, and beyond - built to maximize distribution.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 ">
                                <div className=' benefit-col ms-lg-4 mt-lg-0 mt-5'>
                                    <div className="benefit-item" data-aos="fade-up" data-aos-delay="100">
                                        <div className="benefit-header">
                                            <span className="benefit-number">2</span>
                                            <h4>Better retention</h4>
                                        </div>
                                        <p>

                                            Tight scripting and dynamic editing that keeps viewers watching until the very end.
                                        </p>
                                    </div>
                                    <div className="divider"></div>

                                    <div className="benefit-item mt-5" data-aos="fade-up" data-aos-delay="100">
                                        <div className="benefit-header">
                                            <span className="benefit-number">4</span>
                                            <h4>Consistent performance
                                            </h4>
                                        </div>
                                        <p>
                                            A reliable content pipeline that keeps your brand visible and relevant week after week.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="features-section section-padding my-lg-5">
                <div className="container">

                    <div className="text-center mb-5" data-aos="zoom-in">
                        <h2 className="common-heading">
                            The Impact of Every Frame

                        </h2>
                        <p className="text-muted mt-4">
                            Creating content that strengthens brand presence <br className='' />and audience connection.

                        </p>
                    </div>

                    <div className="row g-4">
                        {[
                            {
                                icon: "fa-eye",
                                title: "Stronger visibility",
                                desc: "Videos that stand out and capture attention instantly - making your brand the first thing people notice in a crowded feed."
                            },
                            {
                                icon: "fa-palette",
                                title: "Clear Communication",
                                desc: "Content that delivers the message quickly and effectively, so your audience always knows exactly what you offer and why it matters."
                            },
                            {
                                icon: "fa-file-lines",
                                title: "Audience Connection",
                                desc: "Visual storytelling that builds relatability and trust, turning viewers into loyal followers and customers."
                            },
                            {
                                icon: "fa-layer-group",
                                title: "Lasting Recall",
                                desc: "Content that stays memorable beyond the first view, keeping your brand top-of-mind long after the scroll."
                            },
                            {
                                icon: "fa-bullhorn",
                                title: "Consistent Brand Voice",
                                desc: "Every video reflects your identity - same tone, style, and energy across every platform and every post."
                            },
                            {
                                icon: "fa-award",
                                title: "Measurable Results",
                                desc: "Content designed not just to look good, but to drive real outcomes - more views, more engagement, more growth."
                            }
                        ].map((item, index) => (
                            <div className="col-lg-4 col-md-6" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
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
            </section>

            <div className='section-padding pt-0' data-aos="zoom-in">
                <div className='container'>
                    <div className='common-page-cta '>

                        <h3 className='common-heading mb-4'>Strong Brands Exist Beyond Screens</h3>
                        <p>While digital drives discovery, print helps brands create tangible and memorable experiences.</p>

                        <div className='d-flex justify-content-center align-item-center mt-5'>
                            <div className="wrapper">
                                                                       <a href="https://calendly.com/arunachalam-socialsculpt/30min" target='_blank'><span>Book a Call</span></a>

                            </div>
                            <div className="wrapper ms-4">
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
