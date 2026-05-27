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

    const Tamilpreneur =
        ["/creative/ads-creative-img/creative-1.webp",
            "/creative/ads-creative-img/creative-7.jpeg",
            "/creative/ads-creative-img/creative-3.webp",
            "/creative/ads-creative-img/creative-11.png",
            "/creative/ads-creative-img/creative-5.webp",
            "/creative/ads-creative-img/creative-13.webp",
            "/creative/ads-creative-img/creative-8.jpeg",
            "/creative/ads-creative-img/creative-2.webp",
            "/creative/ads-creative-img/creative-9.webp",
            "/creative/ads-creative-img/creative-12.png",
            "/creative/ads-creative-img/creative-4.webp",
            "/creative/ads-creative-img/creative-14.webp",
            "/creative/ads-creative-img/creative-6.webp",
            "/creative/ads-creative-img/creative-10.webp",
        ]

    return (
        <>
            <Header />
            <div>
                <section className="banner-positioning works-performance">
                </section>
            </div>

            <section className="methodology-section section-padding podcast-methodology" data-aos="zoom-in">

                <h1 className="hero-title">
                    <span className="white">What This</span>
                    <span className="ms-3 outline">Work</span>
                    <span className="yellow">Represents</span>
                </h1>

                <p className='text-black mt-5 big-text'>Our ad creatives are designed with performance<br className='break-tag' />in mind. Each concept focuses on <span className="contact-back-span">clear messaging, strong visuals,<br className='break-tag' /> and formats optimized for paid campaigns across digital platforms.</span></p>

            </section>

            <section className="work-process-section work-process">
                <div className="overlay"></div>

                <div className="container position-relative" >

                    <div className="text-center work-process-section-content" data-aos="zoom-in">
                        <p className="mini-title">WORK PROCESS</p>
                        <h2 className='common-heading text-center text-white'>How We Built</h2>
                        <p className="section-desc">
                            How we develop ad creatives designed for performance and campaign impact.                        </p>
                    </div>

                    <div className="row justify-content-center align-items-center process-row">

                        <div className="col-lg-2 col-md-6 mb-4 position-relative p-0">
                            <div className="process-card" data-aos="fade-up" data-aos-delay="100">
                                <div className="">
                                    <img src="/campaign-understanding.png" alt="Understanding the Brand" />
                                </div>
                                <span className="step-label">STEP 1</span>
                                <h4>Campaign Understanding</h4>
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
                                    <img src="/campaign-concept.png" alt="Understanding the Brand" />
                                </div>
                                <span className="step-label">STEP 2</span>
                                <h4>Ad Creative Concept</h4>
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
                                    <img src="/creative-develoment.png" alt="Understanding the Brand" />
                                </div>
                                <span className="step-label">STEP 3</span>
                                <h4>Ad Creative Development</h4>
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
                                    <img src="/perform-testing.png" alt="Understanding the Brand" />
                                </div>
                                <span className="step-label">STEP 4</span>
                                <h4>Performance Testing</h4>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className='section-padding work-we-deleivered'>

                <div className='container'>
                    <h2 className='common-heading mb-5 text-center' data-aos="zoom-in">Creatives Behind the Conversions</h2>
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
                        {Tamilpreneur.map((src, i) => (
                            <SwiperSlide key={i}>
                                <div className="odyssey-card">
                                    <div className="odyssey-poster">
                                        <img src={src} alt="Tamilpreneur-creative" />
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
                        {Tamilpreneur.map((src, i) => (
                            <SwiperSlide key={i}>
                                <div className="odyssey-card">
                                    <div className="odyssey-poster">
                                        <img src={src} alt="Tamilpreneur-creative" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>

            </section>

            <section className="section-padding pt-0 results mt-lg-5">
                <div className="container">

                    <div className="text-center">
                        <h2 className="common-heading pb-5" data-aos="zoom-in">
                            Results From the Work
                        </h2>
                    </div>

                    <div className='mt-5'>
                        <div className="row">
                            <div className="col-lg-6 ">
                                <div className='benefit-col me-4'>
                                    <div className="benefit-item" data-aos="fade-up" data-aos-delay="100">
                                        <div className="benefit-header">
                                            <span className="benefit-number">1</span>
                                            <h4>Higher Click-Through Rates</h4>
                                        </div>
                                        <p>
                                            Ad creatives designed to stop the scroll and encourage more users to click and explore the offer.                                        </p>
                                    </div>

                                    <div className="divider"></div>

                                    <div className="benefit-item mt-5" data-aos="fade-up" data-aos-delay="200">
                                        <div className="benefit-header">
                                            <span className="benefit-number">3</span>
                                            <h4>Better Ad Engagement</h4>
                                        </div>
                                        <p>
                                            Creative formats that increased interactions, video views, and engagement across paid campaigns.                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 ">
                                <div className=' benefit-col ms-lg-4 ms-0 mt-lg-0 mt-5'>
                                    <div className="benefit-item" data-aos="fade-up" data-aos-delay="300">
                                        <div className="benefit-header" >
                                            <span className="benefit-number">2</span>
                                            <h4>Improved Conversion Performance</h4>
                                        </div>
                                        <p>
                                            Clear messaging and visual storytelling that helped campaigns generate stronger lead and purchase intent.                                        </p>
                                    </div>
                                    <div className="divider"></div>

                                    <div className="benefit-item mt-5" data-aos="fade-up" data-aos-delay="400">
                                        <div className="benefit-header">
                                            <span className="benefit-number">4</span>
                                            <h4>Creative Testing for Performance</h4>
                                        </div>
                                        <p>
                                            Multiple creative variations developed to identify top-performing ads and scale winning campaigns.                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="features-section mt-lg-5 section-padding-bottom">
                <div className="container">

                    <div className="text-center mb-5" data-aos="zoom-in">
                        <h2 className="common-heading">
                            Campaign Performance Highlights
                        </h2>
                        <p className="text-muted">
                            A snapshot of the impact strong ad creatives can deliver.
                        </p>
                    </div>

                    <div className="row g-4">
                        {[
                            {
                                icon: "fa-bullseye",
                                title: "Higher Ad Engagement",
                                desc: "Well-designed creatives that attract attention within crowded ad feeds."
                            },
                            {
                                icon: "fa-hand-pointer",
                                title: "Stronger Click Performance",
                                desc: "Messaging and visuals optimized to encourage users to interact with ads."
                            },
                            {
                                icon: "fa-chart-line",
                                title: "More Efficient Campaigns",
                                desc: "Better performing creatives that help reduce wasted ad spend."
                            },
                            {
                                icon: "fa-rectangle-ad",
                                title: "Creative Formats That Convert",
                                desc: "Ad formats built specifically for paid platforms and audience behavior."
                            },
                            {
                                icon: "fa-rotate",
                                title: "Faster Creative Iteration",
                                desc: "Testing different visuals and hooks to quickly identify winning ads."
                            },
                            {
                                icon: "fa-layer-group",
                                title: "Scalable Campaign Assets",
                                desc: "Creatives designed to support larger campaigns across multiple platforms."
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

                        <h3 className='common-heading mb-4'>Creative Quality Impacts Ad Performance</h3>
                        <p>Even the best targeting cannot fix weak creatives. Strong ad visuals and clear<br className='break-tag' /> messaging are essential to making campaigns profitable.</p>

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
