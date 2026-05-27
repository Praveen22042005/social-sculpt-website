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

    const socialmedia =
        ["/creative/social-media-img/creative-1.webp",
            "/creative/social-media-img/creative-3.webp",
            "/creative/social-media-img/creative-4.webp",
            "/creative/social-media-img/creative-13.webp",
            "/creative/social-media-img/creative-5.webp",
            "/creative/social-media-img/creative-7.webp",
            "/creative/social-media-img/creative-9.webp",
            "/creative/social-media-img/creative-15.webp",
            "/creative/social-media-img/creative-10.webp",
            "/creative/social-media-img/creative-2.webp",
            "/creative/social-media-img/creative-11.webp",
            "/creative/social-media-img/creative-12.webp",
            "/creative/social-media-img/creative-8.webp",
            "/creative/social-media-img/creative-6.webp",
            "/creative/social-media-img/creative-14.webp",
        ]

    return (
        <>
            <Header />
            <div>
                <section className="banner-positioning works-social-media">
                </section>
            </div>

            <section className="methodology-section section-padding podcast-methodology" data-aos="zoom-in">

                <h1 className="hero-title">
                    <span className="white">What This</span>
                    <span className="ms-3 outline">Work</span>
                    <span className="yellow">Represents</span>
                </h1>

                <p className='text-black mt-5 big-text'>Each project reflects a focused effort to strengthen brand presence, <br className='break-tag' />create meaningful engagement, and <span className="contact-back-span">help businesses grow their <br className='break-tag' />audience through consistent social media execution.</span></p>

            </section>

            <section className="work-process-section">
                <div className="overlay"></div>

                <div className="container position-relative">

                    <div className="text-center work-process-section-content" data-aos="zoom-in">
                        <p className="mini-title">WORK PROCESS</p>
                        <h2 className='common-heading text-center text-white'>Our Approach</h2>
                        <p className="section-desc">
                            A structured approach used to turn ideas into consistent social media content.
                        </p>
                    </div>

                    <div className="row justify-content-center align-items-center process-row">

                        <div className="col-lg-2 col-md-6 mb-4 position-relative p-0">
                            <div className="process-card" data-aos="fade-up" data-aos-delay="100">
                                <div className="">
                                    <img src="/brand-understading.png" alt="Understanding the Brand" />
                                </div>
                                <span className="step-label">STEP 1</span>
                                <h4>Understanding the Brand</h4>
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
                                    <img src="/content-dir.png" alt="Understanding the Brand" />
                                </div>
                                <span className="step-label">STEP 2</span>
                                <h4>Creative Content Direction</h4>
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
                                    <img src="/creative-prod.png" alt="Understanding the Brand" />
                                </div>
                                <span className="step-label">STEP 3</span>
                                <h4>Creative Production</h4>
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
                                    <img src="/publishing.png" alt="Understanding the Brand" />
                                </div>
                                <span className="step-label">STEP 4</span>
                                <h4>Publishing & Optimization</h4>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className='section-padding results'>

                <div className='container'>
                    <h2 className='common-heading mb-5 pb-5 text-center' data-aos="zoom-in">Results We've Created</h2>
                </div>


                <div className="d-none d-lg-block">

                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={4}
                        spaceBetween={30}
                        loop={true}
                        speed={3200}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false,
                        }}
                        allowTouchMove={true}
                        grabCursor={true}
                        freeMode={true}

                        breakpoints={{
                            320: { slidesPerView: 2, spaceBetween: 10 },
                            640: { slidesPerView: 3, spaceBetween: 20 },
                            1024: { slidesPerView: 4, spaceBetween: 30 },
                        }}

                        className="continuous-swiper"
                    >
                        {socialmedia.map((src, i) => (
                            <SwiperSlide key={i}>
                                <div className="odyssey-card">
                                    <div className="odyssey-poster">
                                        <img src={src} alt="socialmedia-creative" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>

                <div className="d-lg-none">

                    <h3 className='text-center mb-4 creative-head'>Madrsa Da</h3>
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={4}
                        spaceBetween={30}
                        loop={true}
                        speed={3200}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false,
                        }}
                        allowTouchMove={true}
                        grabCursor={true}
                        freeMode={true}


                        breakpoints={{
                            320: { slidesPerView: 2, spaceBetween: 10 },
                            640: { slidesPerView: 3, spaceBetween: 20 },
                            1024: { slidesPerView: 4, spaceBetween: 30 },
                        }}

                        className="continuous-swiper"
                    >
                        {socialmedia.map((src, i) => (
                            <SwiperSlide key={i}>
                                <div className="odyssey-card">
                                    <div className="odyssey-poster">
                                        <img src={src} alt="socialmedia-creative" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>

            </section>

            <section className="section-padding pt-0">
                <div className="container">

                    <div className="text-center">
                        <h2 className="common-heading pb-5" data-aos="zoom-in">
                            Social Media Impact
                        </h2>
                    </div>

                    <div className='mt-5'>
                        <div className="row">
                            <div className="col-lg-6 ">
                                <div className='benefit-col me-4' >
                                    <div className="benefit-item" data-aos="fade-up" data-aos-delay="100">
                                        <div className="benefit-header">
                                            <span className="benefit-number">1</span>
                                            <h4>Expanded Brand Reach</h4>
                                        </div>
                                        <p>
                                            Campaigns designed to help brands reach larger and more relevant audiences across social platforms.                                        </p>
                                    </div>

                                    <div className="divider"></div>

                                    <div className="benefit-item mt-5" data-aos="fade-up" data-aos-delay="300">
                                        <div className="benefit-header">
                                            <span className="benefit-number">3</span>
                                            <h4>Improved Engagement</h4>
                                        </div>
                                        <p>
                                            Content strategies that encouraged more conversations, interactions, and audience participation.                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 ">
                                <div className=' benefit-col ms-lg-4 mt-lg-0 mt-5'>
                                    <div className="benefit-item" data-aos="fade-up" data-aos-delay="400">
                                        <div className="benefit-header">
                                            <span className="benefit-number">2</span>
                                            <h4>Audience Community Growth</h4>
                                        </div>
                                        <p>
                                            Focused social media efforts that helped brands build loyal and engaged follower communities.                                        </p>
                                    </div>
                                    <div className="divider"></div>

                                    <div className="benefit-item mt-5" data-aos="fade-up" data-aos-delay="500">
                                        <div className="benefit-header">
                                            <span className="benefit-number">4</span>
                                            <h4>Stronger Brand Consistency</h4>
                                        </div>
                                        <p>
                                            Structured content planning that helped brands maintain a clear and recognizable identity online.                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="features-section section-padding-bottom print-design-impact mt-lg-5">
                <div className="container">

                    <div className="text-center mb-5" data-aos="zoom-in">
                        <h2 className="common-heading">
                            Visual Identity Design
                        </h2>
                        <p className="text-muted">
                            A snapshot of what effective print design helps brands achieve.
                        </p>
                    </div>

                    <div className="row g-4">
                        {[
                            {
                                icon: "fa-eye",
                                title: "Attention-Grabbing Visuals",
                                desc: "Designs created to stand out in busy environments such as events, exhibitions, and retail spaces."
                            },
                            {
                                icon: "fa-palette",
                                title: "Professional Brand Materials",
                                desc: "Well-designed brochures, posters, and marketing materials that strengthen brand perception."
                            },
                            {
                                icon: "fa-file-lines",
                                title: "Clear Information Delivery",
                                desc: "Layouts structured to present information in an easy-to-understand format."
                            },
                            {
                                icon: "fa-layer-group",
                                title: "Consistent Brand Experience",
                                desc: "Print assets that maintain the same visual identity across digital and physical channels."
                            },
                            {
                                icon: "fa-bullhorn",
                                title: "Event and Campaign Support",
                                desc: "Print materials designed to support launches, activations, and marketing campaigns."
                            },
                            {
                                icon: "fa-award",
                                title: "Long-Lasting Brand Impressions",
                                desc: "Physical materials that continue to represent the brand long after the first interaction."
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
                            <div className="wrapper" >
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
