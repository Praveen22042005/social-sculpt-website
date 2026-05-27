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
    return (
        <>
            <Header />

            <div className='overflow-hidden'>

                <div className='performance-parent'>
                    <section className="banner-positioning seo-banner" >
                        <div className="container">
                            <div className='' data-aos="fade-right">
                                <h1 className="banner-title">
                                    Make Your Brand<br className='break-tag' /> Impossible to Ignore.
                                </h1>

                                <p className="banner-description">
                                    We optimize brands for search visibility, ensuring they are discoverable,<br className='break-tag' /> credible,  and consistently ranked when your audience<br className='break-tag' /> is actively looking for solutions.
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
                                    <h2 className='common-heading mb-6'>Why Your Brand Needs SEO</h2>
                                    <div className="wrapper">
                                        <a href="/contact-us" className='black'><span>Let’s Connect</span> <i className="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                </div>

                            </div>
                            <div className='col-lg-6'>
                                <div className='mt-lg-0 mt-5' data-aos="fade-down" data-aos-delay="200">
                                    <p>Search Engine Optimization helps your brand become discoverable when your audience is actively searching for products, services, or solutions like yours. Instead of relying only on paid visibility, SEO builds a strong organic presence that drives consistent, high-intent traffic to your website over time.</p>
                                    <p className='mt-4'>With the right strategy, SEO improves search rankings, strengthens brand credibility, and ensures your business appears at the right moment in the customer journey. By combining technical optimization, content strategy, and search insights, brands can attract the right audience, increase engagement, and create sustainable digital growth.</p>                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="features-section">
                    <div className="container">

                        <div className="text-center mb-5" data-aos="zoom-in">
                            <h2 className="common-heading">
                                Who This Works Best For
                            </h2>
                            <p className="text-muted pb-4 mt-4">
                                Brands that want sustainable visibility, consistent organic traffic, and <br className='break-tag' />search presence that continuously drives qualified leads.
                            </p>
                        </div>

                        <div className='mt-5'>
                            <div className="row g-4 align-items-center justify-content-center d-flex">
                                {[
                                    {
                                        icon: "fa-comment-dots",
                                        title: "Startups Ready to Grow",
                                        desc: "Early-stage and growing startups that want to build strong search visibility, attract the right audience, and generate consistent organic traffic as they scale their digital presence."
                                    },
                                    {
                                        icon: "fa-robot",
                                        title: "D2C & Ecommerce Brands",
                                        desc: "Brands that want to improve their rankings on search engines so customers can easily discover their products or services when actively searching for solutions."
                                    },
                                    {
                                        icon: "fa-database",
                                        title: "Growth-Focused Companies",
                                        desc: "Businesses that want long-term digital growth through consistent organic traffic, stronger search authority, and a sustainable strategy that continues to bring qualified leads over time."
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
                                    <div className="col-lg-4 col-md-6" key={index} data-aos="fade-up" data-aos-delay={index * 200}>
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

                <div className='section-padding'>
                    <div className='container'>
                        <div className='row'>

                            <div className='col-lg-7 my-auto'>
                                <div data-aos="fade-right">
                                    <h2 className='common-heading mb-6'>How SEO Drives Growth</h2>
                                    <p>Search Engine Optimization focuses on building long-term visibility that consistently brings the right audience to your brand. A well-structured SEO strategy helps your website rank for relevant searches, attract qualified visitors, and create opportunities for engagement, leads, and conversions over time.</p>
                                    <p className='mt-4'>By combining technical optimization, strategic content, and search intent analysis, brands can improve rankings and strengthen their authority in search results. Continuous monitoring and optimization ensure your website stays competitive, adapts to search engine updates, and maintains steady organic growth.</p>
                                </div>
                            </div>

                            <div className='col-lg-5 '>
                                <div className='ms-lg-5 ms-0 mt-lg-0 mt-5' data-aos="fade-left">
                                    <img src="/seo-growth.png" alt="" className='image-fluid ' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="why-section-service section-padding">
                    <div className="container">

                        <div className="mb-4" data-aos="fade-right">
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
                                <div className="col-lg-6" key={index} data-aos="fade-up" data-aos-delay={index * 200}>
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

                        <div className='d-flex justify-content-center mt-5'>
                            <div className="wrapper">
                                <a href="https://calendly.com/arunachalam-socialsculpt/30min" target='_blank' className='black'><span>Book a Call</span></a>

                            </div>
                        </div>


                    </div>
                </section>

            </div>

            <section className="research-section section-padding">
                <div className="container">

                    <div>

                        <div className='pb-4'>
                            <h2 className="common-heading text-center">
                                How We Plan SEO Growth
                            </h2>
                            <p className='mt-4 text-center'>We follow a structured, research-driven approach to ensure your website<br className='break-tag' /> ranks for the right searches and attracts qualified traffic that <br className='break-tag' />supports long-term business growth.</p>
                        </div>

                        <div className='mt-5'>
                            <div className="row g-4">
                                {[
                                    {
                                        icon: "fa-magnifying-glass",
                                        title: "Search & Keyword Research",
                                        desc: "We identify high-intent keywords your audience is actively searching for and strategically map them to the right pages, ensuring your website targets opportunities that drive meaningful and qualified traffic."
                                    },
                                    {
                                        icon: "fa-chart-line",
                                        title: "SEO & Website Audit",
                                        desc: "A comprehensive audit evaluates your website’s technical health, structure, and on-page elements. This helps uncover issues that may be limiting search visibility and ranking potential."
                                    },
                                    {
                                        icon: "fa-pen-to-square",
                                        title: "Content & Page Optimization",
                                        desc: "We optimize existing pages and develop content strategies aligned with search intent, ensuring your website delivers valuable information while improving rankings for relevant search queries."
                                    },
                                    {
                                        icon: "fa-gears",
                                        title: "Technical Improvements",
                                        desc: "From site speed and mobile responsiveness to indexing and structured data implementation, we ensure your website meets the technical standards required for strong and sustainable search rankings."
                                    },
                                    {
                                        icon: "fa-link",
                                        title: "Authority & Link Building",
                                        desc: "We strengthen your website’s credibility through high-quality backlinks and authoritative signals that enhance trust and improve search engine performance."
                                    },
                                    {
                                        icon: "fa-chart-column",
                                        title: "Performance Tracking & Continuous Improvement",
                                        desc: "SEO is continuously monitored through analytics, keyword rankings, and traffic insights. We refine strategies based on data to maintain consistent and long-term organic growth."
                                    }
                                ].map((item, index) => (
                                    <div className="col-lg-4 col-md-6" key={index} data-aos="fade-right" data-aos-delay={index * 200}>
                                        <div className="feature-card-service seo-research-card">

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
                </div>
            </section>

            <div className='section-padding-bottom' data-aos="fade-up">
                <div className='container'>
                    <div className='common-page-cta '>

                        <h3 className='common-heading mb-4'>Start Growing Your Search Visibility</h3>
                        <p>Build a stronger online presence with SEO strategies designed to improve rankings, attract the <br className='break-tag' />right audience, and drive consistent organic traffic to your brand.</p>

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

            <Footer />
        </>
    )
}

export default page
