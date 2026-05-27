'use client'
import Header from '@/src/components/Header';
import ThankYouModal from '@/src/components/ThankYouModel';
import React, { useState } from 'react'
export const dynamic = "force-static";
// import emailjs from "@emailjs/browser";


type Module = {
    id: number;
    title: string;
    content?: string[];
};

interface FormData {
    name: string;
    email: string;
    phonenumber: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    phonenumber?: string;
    message?: string;
}


const page = () => {

    const [activeModules, setActiveModules] = useState<number[]>([1]);

    const toggleModule = (id: number) => {
        if (id === 1) return;

        setActiveModules((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id]
        );
    };

    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phonenumber: "",
        message: "",
    });

    const [errors, setErrors] = useState<FormErrors>({});

    const [loading, setLoading] = useState<boolean>(false);

    const [showModal, setShowModal] = useState<boolean>(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });

        setErrors({
            ...errors,
            [name]: "",
        });

    };

    const validateForm = () => {

        let newErrors: FormErrors = {};

        if (!formData.name) {
            newErrors.name = "Name is required";
        } else if (formData.name.length < 3) {
            newErrors.name = "Name must be at least 3 characters";
        } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
            newErrors.name = "Name can contain only letters";
        }

        // if (!formData.service.trim()) {
        //     newErrors.service = "Service name is required";
        // }

        if (!formData.phonenumber.trim()) {
            newErrors.phonenumber = "Phone number is required";
        } else if (!/^[0-9]{10}$/.test(formData.phonenumber)) {
            newErrors.phonenumber = "Enter valid 10 digit number";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Enter valid email";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Please describe your challenge";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;

    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        if (!validateForm()) return;

        setLoading(true);

        try {

            const params = new URLSearchParams();

            params.append("name", formData.name);
            // params.append("service", formData.service);
            params.append("message", formData.message);
            params.append("phonenumber", formData.phonenumber);
            params.append("email", formData.email);

            await fetch(
                // "https://script.google.com/macros/s/AKfycbzd75h65nKxt1IC7f7WxqxNKZlLbshK6x6A1nZUzH_yyuZzJcWeS1CwBpsOfFbpHLCl/exec",
                "https://script.google.com/macros/s/AKfycbxLPquQ_M8Pq2v7m4N14voVdTCa5Vblj7wtRGN94L-TLH7MrXOA1l1uKn6wJqi-MZbVMg/exec",
                {
                    method: "POST",
                    mode: "no-cors",
                    body: params,
                }
            );

            // await emailjs.send(
            //   "service_x8u73pv",
            //   "template_ca5nznt",
            //   {
            //     name: formData.name,
            //     email: formData.email,
            //     phonenumber: formData.phonenumber,
            //     service: formData.service,
            //     message: formData.message,
            //   },
            //   "sYgfWk5g7QMhcexxQ"
            // );


            setFormData({
                name: "",
                email: "",
                phonenumber: "",
                // service: "",
                message: "",
            });

            setShowModal(true);

        } catch (err) {

            console.error(err);
            alert("Something went wrong");

        } finally {

            setLoading(false);
        }

    };

    return (
        <div className=''>


            {/* <section>
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <a className="navbar-brand" href="#"><img src="/academy-ss.jpg" alt="Logo" className='logo-image' /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#program">Program</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#methodology">Methodology</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#tools">Tools</a>
                                </li>
                            </ul>
                            <button className="hidden items-center cursor-pointer gap-2 banner-button-cta">
                                <a href="#contact-us">Contact Us</a>
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </nav>
            </section> */}

            <Header />

            <div className='overflow-hidden'>
                <div className='academy-parent'>
                    <section className="academy-hero-wrap">
                        <div className="container">
                            <div className="academy-hero-inner m-0">

                                <div className="academy-hero-badge">
                                    <span className="academy-hero-badge-dot"></span>
                                    <span className="academy-hero-badge-text">Social Sculpt Academy</span>
                                </div>

                                <h1 className="academy-hero-title ">
                                    Where Marketers Are Built <br className='break-tag' />
                                    Not Taught <span className="academy-hero-title-yellow"></span>
                                </h1>

                                <div className='my-5'>
                                    <p className="academy-hero-desc">
                                        Master Vibe Marketing, AI systems, and real-world execution <br className='break-tag' />and become impossible to ignore in the digital economy
                                    </p>
                                </div>

                                <div className="academy-hero-ctas">
                                    <a href="#contact-us" className="academy-hero-btn-primary">
                                        Speak with us
                                        <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                    </a>
                                    {/* <a href="#brochure" className="academy-hero-btn-secondary">
                  <svg viewBox="0 0 24 24"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17" /></svg>
                  Download Brochure
                </a> */}
                                </div>

                            </div>
                        </div>

                    </section>

                    <section className="academy-shift section-padding-bottom pt-5 position-relative common-backline">
                        <div className="container">

                            <div className="academy-shift-top">
                                {/* <div className='d-flex justify-content-center'> */}
                                <div className="academy-internship-badge">
                                    <span className="academy-internship-badge-dot"></span>
                                    The Shift
                                </div>
                                {/* </div> */}

                                <h2 className="common-heading">
                                    Marketing Has Already Changed
                                </h2>

                            </div>

                            <div className="row g-5 align-items-start">

                                <div className="col-lg-6">
                                    <div className="academy-shift-body">
                                        <p className="academy-shift-text">
                                            Marketing is no longer about posting content.
                                        </p>
                                        <p className="academy-shift-text">
                                            It’s about <strong>understanding people, creating meaningful connections</strong>, and using AI with intention.
                                        </p>
                                        <p className="academy-shift-text">
                                            Technology is transforming how marketing works — but it won’t replace marketers.
                                        </p>
                                        <p className="academy-shift-text">
                                            The ones who combine <strong>strategy, creativity, and AI </strong>will lead what comes next.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="academy-shift-closing">
                                        <div className="academy-shift-closing-bar"></div>
                                        <p className="academy-shift-closing-text">
                                            Social Sculpt Academy<br className='break-tag' />
                                            <span>prepares you for that shift.</span>
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </section>

                    <section className="Our-Methodology academy-method-section section-padding-bottom position-relative common-backline" id="methodology">
                        <div className="container">

                            <div className='d-flex justify-content-center'>
                                <div className="academy-internship-badge">
                                    <span className="academy-internship-badge-dot"></span>
                                    Our Methodology
                                </div>
                            </div>

                            <h2 className="common-heading  text-center">We Don’t Teach Marketing <br className='break-tag' />We Engineer Capability</h2>

                            <p className='text-center important-text'>This is not a course built on lectures.
                                It’s a system designed to make you  <br className='break-tag' />execute, think, and perform like a real marketer.</p>

                            <div className='d-flex justify-content-center'>
                                <div className="academy-who-belief my-4">
                                    <p className="academy-who-belief-text">
                                        Built on three execution-first pillars
                                    </p>
                                </div>
                            </div>

                            {/* <div className='mt-5'>
            <div className="row g-0 academy-method-pillars">
              <div className="col-12 col-md-4 academy-method-pillar">
                <div>
                  <div className="academy-method-pillar-num">01 — Portfolio-First Learning</div>
                  <div className="academy-method-pillar-title">Portfolio-First Learning</div>
                  <p className="academy-method-pillar-text">Every week, you don't just "learn" — you create. By the end of 8 weeks, you'll have a portfolio that speaks louder than any certificate.</p>
                </div>
                <div className="academy-method-pillar-line"></div>
              </div>
              <div className="col-12 col-md-4 academy-method-pillar">
                <div>
                  <div className="academy-method-pillar-num">02 — AI-Native Execution</div>
                  <div className="academy-method-pillar-title">AI-Native Execution</div>
                  <p className="academy-method-pillar-text">You won't just hear about AI tools — you'll use them like a pro. From content creation to strategy, you'll learn how modern marketers actually work.</p>
                </div>
                <div className="academy-method-pillar-line"></div>
              </div>
              <div className="col-12 col-md-4 academy-method-pillar">
                <div>
                  <div className="academy-method-pillar-num">03 — Real-World Application</div>
                  <div className="academy-method-pillar-title">Real-World Application</div>
                  <p className="academy-method-pillar-text">No fluff. No outdated theory. Only real case studies, real strategies, and real execution frameworks used by top brands and creators.</p>
                </div>
                <div className="academy-method-pillar-line"></div>
              </div>
            </div>
          </div> */}

                            <div className="mt-5">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="choose-your-path-card" >
                                                <div className="image-wrap academy-wrap">
                                                    <img src="./academic-hme.png" alt="About Social Sculpt" className="img-fluid" />
                                                </div>
                                                <div className="content-card academy">
                                                    <h3 >Proof Over Theory</h3>
                                                    <p>You don’t sit through lessons you build real work.
                                                        Every week is designed to produce output that compounds into a portfolio that speaks for you.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="choose-your-path-card mt-lg-0 mt-4">
                                                <div className="image-wrap academy-wrap">
                                                    <img src="./academic-hme.png" alt="About Social Sculpt" className="img-fluid" />
                                                </div> 
                                                <div className="content-card academy">
                                                    <h3>AI as a System, Not a Tool</h3>
                                                    <p>You won’t just “learn AI tools.”
                                                        You’ll integrate AI into how you think, create, and execute like modern marketers actually do.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="choose-your-path-card mt-lg-0 mt-4">
                                                <div className="image-wrap academy-wrap">
                                                    <img src="./academic-hme.png" alt="About Social Sculpt" className="img-fluid" />
                                                </div>
                                                <div className="content-card academy">
                                                    <h3>Built for the Real Market</h3>
                                                    <p>Everything you learn is grounded in how marketing works today -
                                                        algorithms, psychology, strategy, and execution combined.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>

                    <section className="Choose-your-path section-padding-bottom position-relative common-backline" id="program">
                        <div className="container">

                            <div className='d-flex justify-content-center'>
                                <div className="academy-internship-badge">
                                    <span className="academy-internship-badge-dot"></span>
                                    8-Week Program
                                </div>
                            </div>

                            <h2 className="common-heading text-center">A System Built to Help You Earn <br className='break-tag' />Not Just Get Certified</h2>

                            <div className="academy-timeline">
                                <div className="academy-spine"></div>

                                <div className="academy-phase row">
                                    <div className=" academy-left-col academy-empty d-none d-md-block"></div>
                                    <div className="academy-dot-wrap col-auto">
                                        <div className="academy-dot academy-dot-filled"></div>
                                    </div>
                                    <div className="academy-right-col">
                                        <span className="academy-week-tag">Weeks 1 – 4</span>
                                        <div className='col-lg-9 mx-auto'>
                                            <div className="academy-pcard ">
                                                <h3 className="academy-pcard-title">Foundation of Modern Marketing</h3>
                                                <p className="academy-pcard-desc">Build a deep, first-principles understanding of how marketing actually works today — beyond trends, tools, and surface-level tactics.</p>
                                                <ul className="academy-skill-list">
                                                    <li><i className="fa-solid fa-arrow-right"></i> How marketing evolved - and what actually works in 2025</li>
                                                    <li><i className="fa-solid fa-arrow-right"></i>Consumer psychology, attention, and decision-making (ZMOT)</li>
                                                    <li><i className="fa-solid fa-arrow-right"></i>Content strategy that earns attention and drives action</li>
                                                    <li><i className="fa-solid fa-arrow-right"></i>Brand positioning and storytelling that people connect with</li>
                                                    <li><i className="fa-solid fa-arrow-right"></i>AI-powered workflows that improve thinking and execution</li>
                                                </ul>
                                                <div className="academy-callout">This is where you stop following trends - and start thinking like a marketer.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="academy-phase-connector"></div>

                                <div className="academy-phase row align-items-center g-0">
                                    <div className=" academy-left-col btm">
                                        <span className="academy-week-tag academy-week-tag-light">Weeks 5 – 8</span>
                                    </div>
                                    <div className="academy-dot-wrap">
                                        <div className="academy-dot academy-dot-filled"></div>
                                    </div>
                                    <div className="col academy-right-col btm">
                                        <span className="academy-week-tag academy-week-tag-light d-inline-flex d-md-none mb-2">Weeks 5 – 8</span>
                                        <p className="academy-phase-two-title">Choose Your Execution Path</p>
                                    </div>
                                </div>

                            </div>

                            <div className="academy-connector">
                                <div className="academy-conn-line"></div>
                                <div className="academy-conn-dot"></div>
                                <div className="academy-conn-line academy-conn-line-short"></div>
                            </div>

                            <div className="row g-3 academy-tracks-grid">
                                <div className="col-12 col-md-6">
                                    <div className="academy-tcard academy-tcard-dark">
                                        <div className="academy-tcard-icon">📈</div>
                                        <p className="academy-tcard-track">Track A</p>
                                        <h3 className="academy-tcard-name">Growth Marketing</h3>
                                        <p className="academy-tcard-desc">Learn how to scale brands with systems, data, and <br className='break-tag'/>performance-driven thinking.</p>
                                        <ul className="academy-tcard-skills">
                                            <li><span className="academy-tcheck"><i className="fa-solid fa-arrow-right"></i></span>Social media growth systems that compound</li>
                                            <li><span className="academy-tcheck"><i className="fa-solid fa-arrow-right"></i></span>SEO and LLM-driven discovery strategies</li>
                                            <li><span className="academy-tcheck"><i className="fa-solid fa-arrow-right"></i></span>Paid ads fundamentals (Meta & Google)</li>
                                            <li><span className="academy-tcheck"><i className="fa-solid fa-arrow-right"></i></span>Funnel thinking, conversion, and analytics</li>
                                        </ul>
                                        <div className="academy-tcard-for">Aspiring marketers, freelancers, and anyone who wants to drive measurable business results.</div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="academy-tcard academy-tcard-light mt-lg-0 mt-4">
                                        <div className="academy-tcard-icon">🎯</div>
                                        <p className="academy-tcard-track">Track B</p>
                                        <h3 className="academy-tcard-name">Personal Branding</h3>
                                        <p className="academy-tcard-desc">Turn your skills, ideas, and perspective into a brand that<br className='break-tag'/>₹ attracts opportunities.</p>
                                        <ul className="academy-tcard-skills">
                                            <li><span className="academy-tcheck"><i className="fa-solid fa-arrow-right"></i></span>Personal brand positioning and niche clarity </li>
                                            <li><span className="academy-tcheck"><i className="fa-solid fa-arrow-right"></i></span>LinkedIn & Instagram growth systems</li>
                                            <li><span className="academy-tcheck"><i className="fa-solid fa-arrow-right"></i></span>Content frameworks that build authority</li>
                                            <li><span className="academy-tcheck"><i className="fa-solid fa-arrow-right"></i></span>Monetization and inbound opportunity systems</li>
                                        </ul>
                                        <div className="academy-tcard-for">Creators, founders, and professionals who want visibility, credibility, and leverage.</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>

                    <section className="Syllabus section-padding-bottom position-relative common-backline">
                        <div className="container">
                            <div className='mb-5'>
                                <h2 className="text-center common-heading text-black">
                                    Explore What You’ll Learn
                                </h2>
                            </div>

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="module-parent">

                                        <button
                                            className="module-card w-full flex justify-between items-center text-left position-relative"
                                            onClick={() => toggleModule(1)}
                                        >
                                            <div>
                                                <span className="bg-green-600 text-sm rounded module-head">
                                                    Module 1
                                                </span>
                                                <h3 className="mt-3 text-lg">
                                                    Foundations of Modern Marketing
                                                </h3>
                                            </div>

                                            <span className="module-arrow">
                                                {activeModules.includes(1)
                                                    ? <i className="fa-solid fa-angle-down"></i>
                                                    : <i className="fa-solid fa-angle-up"></i>}
                                            </span>
                                        </button>

                                        {activeModules.includes(1) && (
                                            <div className="module-contents">
                                                <p>Understand how marketing actually works in today’s attention-driven, AI-powered world.</p>
                                                {/* <p><span>• Customer Insights:</span> Understand buyer personas.</p>
                      <p><span>• Media Strategy:</span> Use the PESO model for brand visibility.</p> */}
                                            </div>
                                        )}

                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="module-parent mt-lg-0 mt-md-0 mt-4">

                                        <button
                                            className="module-card w-full flex justify-between items-center text-left position-relative"
                                            onClick={() => toggleModule(1)}
                                        >
                                            <div>
                                                <span className="bg-green-600 text-sm rounded module-head">
                                                    Module 2
                                                </span>
                                                <h3 className="mt-3 text-lg">
                                                    Brand Strategy & Positioning
                                                </h3>
                                            </div>

                                            <span className="module-arrow">
                                                {activeModules.includes(1)
                                                    ? <i className="fa-solid fa-angle-down"></i>
                                                    : <i className="fa-solid fa-angle-up"></i>}
                                            </span>
                                        </button>

                                        {activeModules.includes(1) && (
                                            <div className="module-contents">
                                                {/* <p><span>• Core Marketing Principles:</span> It's provocative, memorable, speaks directly to ambition, and positions the course as insider knowledge - exactly what a premium academy should feel like.</p> */}
                                                {/* <p><span>• Customer Insights:</span> Understand buyer personas.</p> */}
                                                <p>Learn how to build brands people connect <br className='break-tag' />with, trust, and remember.</p>
                                            </div>
                                        )}

                                    </div>
                                </div>

                            </div>

                            <div className='mt-4'>
                                <div className="row">

                                    <div className="col-lg-6">
                                        <div className="module-parent">

                                            <button
                                                className="module-card w-full flex justify-between items-center text-left position-relative"
                                                onClick={() => toggleModule(3)}
                                            >
                                                <div>
                                                    <span className="bg-green-600 text-sm rounded module-head">
                                                        Module 3
                                                    </span>
                                                    <h3 className="mt-3 text-lg">
                                                        Content Systems & AI Execution
                                                    </h3>
                                                </div>

                                                <span className="module-arrow">
                                                    {activeModules.includes(3)
                                                        ? <i className="fa-solid fa-angle-down"></i>
                                                        : <i className="fa-solid fa-angle-up"></i>}
                                                </span>
                                            </button>

                                            {activeModules.includes(3) && (
                                                <div className="module-contents">
                                                    {/* <p><span>• Core Marketing Principles:</span> It's provocative, memorable, speaks directly to ambition, and positions the course as insider knowledge - exactly what a premium academy should feel like.</p> */}
                                                    {/* <p><span>• Customer Insights:</span> Understand buyer personas.</p> */}
                                                    <p>Create high-impact content using structured systems and AI-powered workflows.</p>
                                                </div>
                                            )}

                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="module-parent mt-lg-0 mt-md-0 mt-4">

                                            <button
                                                className="module-card w-full flex justify-between items-center text-left position-relative"
                                                onClick={() => toggleModule(4)}
                                            >
                                                <div>
                                                    <span className="bg-green-600 text-sm rounded module-head">
                                                        Module 4
                                                    </span>
                                                    <h3 className="mt-3 text-lg">
                                                        Growth, Distribution & Performance

                                                    </h3>
                                                </div>

                                                <span className="module-arrow">
                                                    {activeModules.includes(4)
                                                        ? <i className="fa-solid fa-angle-down"></i>
                                                        : <i className="fa-solid fa-angle-up"></i>}
                                                </span>
                                            </button>

                                            {activeModules.includes(4) && (
                                                <div className="module-contents">
                                                    {/* <p><span>• Core Marketing Principles:</span> It's provocative, memorable, speaks directly to ambition, and positions the course as insider knowledge - exactly what a premium academy should feel like.</p> */}
                                                    {/* <p><span>• Customer Insights:</span> Understand buyer personas.</p> */}
                                                    <p>Learn how to scale reach, build funnels, and drive measurable results.
                                                    </p>
                                                </div>
                                            )}

                                        </div>
                                    </div>

                                </div>
                            </div>


                            <div className='mt-4'>
                                <div className="row">

                                    <div className="col-lg-6">
                                        <div className="module-parent">

                                            <button
                                                className="module-card w-full flex justify-between items-center text-left position-relative"
                                                onClick={() => toggleModule(5)}
                                            >
                                                <div>
                                                    <span className="bg-green-600 text-sm rounded module-head">
                                                        Module 5
                                                    </span>
                                                    <h3 className="mt-3 text-lg">
                                                        Growth Marketing Specialization
                                                    </h3>
                                                </div>

                                                <span className="module-arrow">
                                                    {activeModules.includes(5)
                                                        ? <i className="fa-solid fa-angle-down"></i>
                                                        : <i className="fa-solid fa-angle-up"></i>}
                                                </span>
                                            </button>

                                            {activeModules.includes(5) && (
                                                <div className="module-contents">
                                                    {/* <p><span>• Core Marketing Principles:</span> It's provocative, memorable, speaks directly to ambition, and positions the course as insider knowledge - exactly what a premium academy should feel like.</p> */}
                                                    {/* <p><span>• Customer Insights:</span> Understand buyer personas.</p> */}
                                                    <p>Deep dive into SEO, paid ads, analytics, and full-funnel execution.</p>
                                                </div>
                                            )}

                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="module-parent mt-lg-0 mt-md-0 mt-4">

                                            <button
                                                className="module-card w-full flex justify-between items-center text-left position-relative"
                                                onClick={() => toggleModule(6)}
                                            >
                                                <div>
                                                    <span className="bg-green-600 text-sm rounded module-head">
                                                        Module 6
                                                    </span>
                                                    <h3 className="mt-3 text-lg">
                                                        Personal Branding Specialization
                                                    </h3>
                                                </div>

                                                <span className="module-arrow">
                                                    {activeModules.includes(6)
                                                        ? <i className="fa-solid fa-angle-down"></i>
                                                        : <i className="fa-solid fa-angle-up"></i>}
                                                </span>
                                            </button>

                                            {activeModules.includes(6) && (
                                                <div className="module-contents">
                                                    {/* <p><span>• Core Marketing Principles:</span> It's provocative, memorable, speaks directly to ambition, and positions the course as insider knowledge - exactly what a premium academy should feel like.</p> */}
                                                    {/* <p><span>• Customer Insights:</span> Understand buyer personas.</p> */}
                                                    <p>Build authority, grow on LinkedIn & Instagram, and create inbound opportunities.</p>
                                                </div>
                                            )}

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </section>

                    <section className='Tools-Technologies technologies-logo section-padding-bottom position-relative common-backline' id="tools">
                        <div className='container'>
                            <h2 className='text-center text-white'>Learn the Tools Modern Marketers Actually Use</h2>

                            <div className='mt-5 digital-tech-logo'>
                                <div className='row justify-content-center'>
                                    <div className='col-lg-2 col-4 my-auto'>
                                        <div className=''>
                                            <img src="/technologies/google-search.png" alt="Digital Marketing" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className='col-lg-2 col-4 my-auto'>
                                        <div className=''>
                                            <img src="/technologies/Google_Analytics.svg" alt="Digital Marketing" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className='col-lg-2 col-4 my-auto'>
                                        <div className=''>
                                            <img src="/technologies/Google-Trends.webp" alt="Digital Marketing" className="img-fluid" />
                                        </div>
                                    </div>

                                    <div className='col-lg-2 col-4 my-auto'>
                                        <div className='mt-lg-0 mt-3'>
                                            <img src="/technologies/Meta-Ads.webp" alt="Digital Marketing" className="img-fluid " />
                                        </div>
                                    </div>

                                    <div className='col-lg-2 col-4 my-auto '>
                                        <div className='mt-lg-0 mt-3'>
                                            <img src="/technologies/google-ads.png" alt="Digital Marketing" className="img-fluid small-image" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='mt-5 digital-tech-logo'>
                                <div className='row justify-content-center'>
                                    <div className='col-lg-2 col-4 my-auto'>
                                        <div className=''>
                                            <img src="/technologies/studio.png" alt="Digital Marketing" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className='col-lg-2 col-4 my-auto'>
                                        <div className=''>
                                            <img src="/technologies/Ahrefs.png" alt="Digital Marketing" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className='col-lg-2 col-4 my-auto'>
                                        <div className=''>
                                            <img src="/technologies/google-tag-manager.png" alt="Digital Marketing" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className='col-lg-2 col-4 my-auto'>
                                        <div className='mt-lg-0 mt-5'>
                                            <img src="/technologies/figma.jpg" alt="Digital Marketing" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className='col-lg-2 col-4 my-auto'>
                                        <div className='mt-lg-0 mt-5'>
                                            <img src="/technologies/canva.jpeg" alt="Digital Marketing" className="img-fluid small-image " />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='mt-5 pt-lg-4 pt-0 digital-tech-logo'>
                                <div className='row justify-content-center align-items-center'>
                                    <div className='col-lg-2 col-4 my-auto'>
                                        <div className=''>
                                            <img src="/technologies/semrush.png" alt="Digital Marketing" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className='col-lg-2 col-4 my-auto'>
                                        <div className=''>
                                            <img src="/technologies/perplexity.webp" alt="Digital Marketing" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className='col-lg-2 col-4 my-auto'>
                                        <div className=''>
                                            <img src="/technologies/capcut.webp" alt="Digital Marketing" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='mt-5'>
                                    <h2 className='text-center text-white pt-5'>Work with AI Tools That Multiply Your Output</h2>
                                </div>

                                <div className='mt-5 digital-tech-logo'>
                                    <div className='row justify-content-center'>
                                        <div className='col-lg-2 col-4 my-auto'>
                                            <div className=''>
                                                <img src="/ai-technologies/chatgpt.png" alt="Digital Marketing" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className='col-lg-2 col-4 my-auto'>
                                            <div className=''>
                                                <img src="/ai-technologies/claude.webp" alt="Digital Marketing" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className='col-lg-2 col-4 my-auto'>
                                            <div className=''>
                                                <img src="/ai-technologies/notion.png" alt="Digital Marketing" className="img-fluid" />
                                            </div>
                                        </div>
                                        
                                        <div className='col-lg-2 col-4 my-auto'>
                                            <div className='mt-lg-0 mt-5'>
                                                <img src="/ai-technologies/hiigsfeild.png" alt="Digital Marketing" className="img-fluid" />
                                            </div>
                                        </div>

                                        <div className='col-lg-2 col-4 my-auto'>
                                            <div className='mt-lg-0 mt-5'>
                                                <img src="/ai-technologies/midjourney.avif" alt="Digital Marketing" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='mt-5 digital-tech-logo'>
                                    <div className='row justify-content-center'>
                                        <div className='col-lg-2 col-4 my-auto'>
                                            <div className=''>
                                                <img src="/ai-technologies/notebooklm.png" alt="Digital Marketing" className="img-fluid" />
                                            </div>
                                        </div>

                                        <div className='col-lg-2 col-4 my-auto'>
                                            <div className=''>
                                                <img src="/ai-technologies/ElevenLabs.png" alt="Digital Marketing" className="img-fluid" />
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </section>

                    <section className="academy-internship-section section-padding-bottom position-relative common-backline">
                        <div className="container">
                            <div className="academy-internship-inner">

                                <div className='d-flex justify-content-center'>
                                    <div className="academy-internship-badge">
                                        <span className="academy-internship-badge-dot"></span>
                                        PAID INTERNSHIP OPPORTUNITY
                                    </div>
                                </div>

                                <h2 className="common-heading text-center">Perform. Get Selected<br className='break-tag' />Work With Us</h2>
                                <p className="academy-internship-lead text-center">This is where everything comes together.
                                    Top performers from each batch<br className='break-tag' /> earn the opportunity to work on real projects with Social Sculpt.</p>

                                <div className='academy-internship-body'>
                                    <div className="row g-4 ">

                                        <div className="col-12 col-md-6">
                                            <div className=''>
                                                <div className="academy-internship-perks">
                                                    <div className="academy-internship-perk">
                                                        <div>
                                                            <span className="academy-internship-perk-num me-3">01</span>
                                                            <span className="academy-internship-perk-text">Real client projects</span>
                                                            <p className='mb-0 mt-2'>Work on actual brands - not simulated assignments</p>
                                                        </div>
                                                    </div>
                                                    <div className="academy-internship-perk">
                                                        <div>
                                                            <span className="academy-internship-perk-num me-3">02</span>
                                                            <span className="academy-internship-perk-text">Hands-on execution experience</span>
                                                            <p className='mb-0 mt-2'>Apply everything you’ve learned in real scenarios
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="academy-internship-perk">
                                                        <div>
                                                            <span className="academy-internship-perk-num me-3">03</span>
                                                            <span className="academy-internship-perk-text">Direct mentorship</span>
                                                            <p className='mb-0 mt-2'>Work closely with our team and get guided feedback</p>
                                                        </div>
                                                    </div>

                                                    <div className="academy-internship-perk">
                                                        <div>
                                                            <span className="academy-internship-perk-num me-3">04</span>
                                                            <span className="academy-internship-perk-text">Career acceleration</span>
                                                            <p className='mb-0 mt-2'>Build proof, confidence, and real industry exposure</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-6">
                                            <div className="academy-internship-right">
                                                <div className="academy-internship-earned">
                                                    <p className="academy-internship-earned-line1">This is not guaranteed.<br className='break-tag' />It's earned.</p>
                                                    <p className="academy-internship-earned-line2">And that’s exactly what makes it valuable.</p>
                                                </div>
                                                <div className="academy-internship-meta">
                                                    <div className="academy-internship-meta-row">
                                                        <span className="academy-internship-meta-label">Duration</span>
                                                        <span className="academy-internship-meta-val">4 weeks</span>
                                                    </div>
                                                    <div className="academy-internship-meta-row">
                                                        <span className="academy-internship-meta-label">Type</span>
                                                        <span className="academy-internship-meta-val">Paid</span>
                                                    </div>
                                                    <div className="academy-internship-meta-row">
                                                        <span className="academy-internship-meta-label">Selection</span>
                                                        <span className="academy-internship-meta-val">Top performers only</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                {/* <div className="academy-internship-footer">
              <p className="academy-internship-footer-text">Selected from <strong>each batch</strong> · Performance-based · No guaranteed seats</p>
            </div> */}

                            </div>
                        </div>
                    </section>

                    <section className="academy-who section-padding-bottom position-relative common-backline " id="about">
                        <div className="container">
                            <div className="row align-items-start g-5">

                                <div className="col-lg-7">
                                    <div className="academy-internship-badge">
                                        <span className="academy-internship-badge-dot"></span>
                                        Who We Are
                                    </div>
                                    <h2 className="common-heading">
                                        Built by Marketers.<br className='break-tag' />
                                        For the Next Generation <br className='break-tag' />
                                        of Marketers.
                                    </h2>

                                    <div className="academy-who-divider"></div>

                                    <div className="academy-who-body">

                                        <p className="academy-who-text">
                                            Social Sculpt Academy is the learning arm of Social Sculpt - a new-age personal branding and growth marketing agency built on <strong className='blue'>creativity, consistency, and bold thinking.</strong>
                                        </p>

                                        <p className="academy-who-text">This isn’t theory-first learning.
                                            It’s built from <strong className='blue'>real execution, real experiments, and real results.</strong></p>

                                        <p className="academy-who-text">
                                            Founded by <strong className='blue'>Arunachalam S,</strong>
                                            the academy comes from hands-on experience in building brands,
                                            scaling content, and working in today’s digital landscape.
                                        </p>

                                        <div className="academy-who-belief">
                                            <p className="academy-who-belief-text">
                                                Marketing is not theory. It’s execution.
                                            </p>
                                        </div>

                                        <p className="academy-who-closing">
                                            This academy is an extension of that belief —
                                            where you don’t just learn, you build, apply, and prove your skills.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-lg-5">
                                    <div className="academy-who-right">

                                        <div>
                                            <img src="/arun.jpg" alt="About Social Sculpt" className="img-fluid" />
                                        </div>

                                        <div className='founder-achievements' >
                                            <p className='name'>Arunachalam S</p>
                                            <p>Co-Founder & CMO - Nebula Startup School
                                                <br className='break-tag' /> Founder & CEO - Social Sculpt | Co-Creator & CMO - Postautopsy <br className='break-tag' />
                                                Podcast Host - Sculptors Podcast | Personal Branding Strategist</p>
                                        </div>

                                        {/* <div className="academy-who-founder-card">
                  <p className="academy-who-founder-tag">Founder</p>
                  <h3 className="academy-who-founder-name">Arunachalam S</h3>
                  <p className="academy-who-founder-title">Chennai-born Creator & Entrepreneur</p>
                  
                  <div className="academy-who-founder-tags">
                    <span className="academy-who-founder-tag-pill">Creator</span>
                    <span className="academy-who-founder-tag-pill">Entrepreneur</span>
                    <span className="academy-who-founder-tag-pill">Brand Builder</span>
                    <span className="academy-who-founder-tag-pill">Growth Marketer</span>
                  </div>
                </div> */}

                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                    <section className="academy-diff section-padding-bottom position-relative common-backline">
                        <div className="container">

                            <div className="academy-diff-top">
                                <div className="academy-internship-badge">
                                    <span className="academy-internship-badge-dot"></span>
                                    What Sets Us Apart
                                </div>

                                <h2 className="common-heading">
                                    What Makes Social Sculpt<br className='break-tag' />Academy Different
                                </h2>
                            </div>

                            <div className="academy-diff-compare">

                                <div className="academy-diff-row">
                                    <div className="academy-diff-others">
                                        <div className="academy-diff-others-tag">Others</div>
                                        <p className="academy-diff-others-text">Teach tools.</p>
                                    </div>
                                    <div className="academy-diff-arrow">
                                        <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                    </div>
                                    <div className="academy-diff-we">
                                        <div className="academy-diff-we-tag">We</div>
                                        <p className="academy-diff-we-text">Build how you think</p>
                                    </div>
                                </div>

                                <div className="academy-diff-row">
                                    <div className="academy-diff-others">
                                        <div className="academy-diff-others-tag">Others</div>
                                        <p className="academy-diff-others-text">Teach tactics.</p>
                                    </div>
                                    <div className="academy-diff-arrow">
                                        <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                    </div>
                                    <div className="academy-diff-we">
                                        <div className="academy-diff-we-tag">We</div>
                                        <p className="academy-diff-we-text">Teach strategy.</p>
                                    </div>
                                </div>

                                <div className="academy-diff-row">
                                    <div className="academy-diff-others">
                                        <div className="academy-diff-others-tag">Others</div>
                                        <p className="academy-diff-others-text">Teach marketing.</p>
                                    </div>
                                    <div className="academy-diff-arrow">
                                        <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                    </div>
                                    <div className="academy-diff-we">
                                        <div className="academy-diff-we-tag">We</div>
                                        <p className="academy-diff-we-text">Teach how to create influence.</p>
                                    </div>
                                </div>

                            </div>

                            <p className="academy-diff-combine-label">At Social Sculpt Academy, you don’t just learn skills <br className='break-tag' />
                                you learn how to combine what actually drives results.</p>

                            <div className="academy-diff-pillars">

                                <div className="academy-diff-pillar">
                                    <div className="academy-diff-pillar-num">01</div>
                                    <p className="academy-diff-pillar-title">Human Understanding</p>
                                    <p className='academy-diff-paras'>Know what people think, feel, and respond to</p>
                                </div>

                                <div className="academy-diff-pillar">
                                    <div className="academy-diff-pillar-num">02</div>
                                    <p className="academy-diff-pillar-title">Strategic Thinking</p>
                                    <p className='academy-diff-paras'>Make decisions based on clarity, not guesswork</p>
                                </div>

                                <div className="academy-diff-pillar">
                                    <div className="academy-diff-pillar-num">03</div>
                                    <p className="academy-diff-pillar-title">AI Leverage</p>
                                    <p className='academy-diff-paras'>Use AI to scale execution without losing creativity</p>
                                </div>

                            </div>

                            {/* <div className="academy-diff-closing">
            <p className="academy-diff-closing-text">
              This is what creates powerful marketers<br className='break-tag' />and industry leaders.
            </p>
            <div className="academy-diff-closing-icon">
              <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </div>
          </div> */}

                        </div>
                    </section>

                    <section className="academy-cta-section section-padding-bottom position-relative common-backline" id="contact-us">
                        <div className="container">
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div>
                                        <div className="academy-cta-inner">

                                            <div className="academy-cta-line"></div>

                                            <h2 className="academy-cta-title">Become Job-Ready. Build Your Income</h2>

                                            <p className="academy-cta-sub">Learn skills that don’t just look good on paper -
                                                but help you get hired, get clients, and start earning.</p>

                                            <p className="academy-cta-sub">If you’re serious about building a real marketing career, this is where it begins.</p>

                                            <div className="academy-cta-urgency">
                                                <div className="academy-cta-urgency-item">
                                                    <span className="academy-cta-urgency-dot"></span>
                                                    Limited seats
                                                </div>
                                                <div className="academy-cta-divider"></div>
                                                <div className="academy-cta-urgency-item">
                                                    <span className="academy-cta-urgency-dot"></span>
                                                    High expectations
                                                </div>
                                                <div className="academy-cta-divider"></div>
                                                <div className="academy-cta-urgency-item">
                                                    <span className="academy-cta-urgency-dot"></span>
                                                    Real transformation
                                                </div>
                                            </div>
                                            {/* <a href="#" className="academy-cta-btn">
                      Apply Now
                      <span className="academy-cta-btn-arrow">→</span>
                      Become Job-Ready in 8 Weeks
                    </a> */}

                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className="contact-form-card">
                                        <h4 className=" mb-4">Send Us a Message</h4>

                                        <form onSubmit={handleSubmit}>

                                            <div className="mb-3">
                                                <input type="text" className=" custom-input" name="name" value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="Enter your name" />
                                                {errors.name && <small className="text-danger">{errors.name}</small>}
                                            </div>

                                            <div className="mb-3">
                                                <input type="text" name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className=" custom-input"
                                                    placeholder="Enter your email address" />
                                                {errors.email && <small className="text-danger">{errors.email}</small>}
                                            </div>

                                            <div className="mb-3">
                                                <input type="number" className=" custom-input" name="phonenumber"
                                                    value={formData.phonenumber}
                                                    onChange={handleChange}
                                                    placeholder="Enter your phone number" />
                                                {errors.phonenumber && <small className="text-danger">{errors.phonenumber}</small>}
                                            </div>
                                            <div className="mb-3">
                                                <textarea className=" custom-input" name="message" placeholder="Why you interested in this course" value={formData.message}
                                                    onChange={handleChange}></textarea>
                                                {errors.message && <small className="text-danger">{errors.message}</small>}
                                            </div>
                                            <button type="submit" className='common-btn-academy w-100 text-center'> <span>{loading ? "Enrolling..." : "Enroll Now "}</span></button >
                                            <p className='mt-2'>(Batch date will be announced soon)</p>

                                        </form>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </section>


                    {/* Footer */}
                    <section className='section-padding footer'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-4'>
                                    <div>
                                        {/* <img src="/academy-ss.jpg" alt="Logo" className='footer-image' /> */}

                                        <p className='mb-lg-4'>Social Sculpt Academy is the learning arm of Social Sculpt - a new-age personal branding and growth marketing agency built on creativity, consistency, and bold thinking.</p>

                                        <div className=''>
                                            <ul className="social ps-0">

                                                <li data-tooltip="Instagram">
                                                    <a href="https://www.instagram.com/social_sculpt_academy" aria-label="Instagram" target='_blank'>
                                                        <i className="fa-brands fa-instagram"></i>
                                                    </a>
                                                </li>
                                                {/* <li data-tooltip="Linkedin">
                                                    <a href="https://www.linkedin.com/company/socialsculpt-inc" aria-label="Linkedin" target='_blank'>
                                                        <i className="fa-brands fa-linkedin-in"></i>
                                                    </a>
                                                </li> */}
                                            </ul>
                                        </div>



                                    </div>

                                </div>
                                <div className='col-lg-4'>
                                    <div className='footer-links-top-academy'>
                                        <div className='footer-links-academy'>
                                            <a href="#about">About Us</a>
                                            <a href="#program">Program</a>
                                            <a href="#">Methodology</a>
                                            <a href="#">Tools</a>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className='footer-address-links'>
                                        <a href='mailto:suriya@socialsculpt.in'>suriya@socialsculpt.in</a>
                                        <div className='mt-0 mb-4'>
                                            <a href='tel:+91 755 003 9872' className='me-3'>+91 755 003 9872</a>
                                            <a href='tel:+91 7395 984 542'>+91 7395 984 542</a>
                                        </div>
                                    </div>

                                    <a
                                        href="https://maps.app.goo.gl/Vh74Q8T5rtqMRVaNA"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="address-text"
                                    >
                                        Ground Floor, Vijay Kalyani Apartment, A1,<br className="break-tag" />
                                        103/74 Avvai Shanmugham Salai,<br className="break-tag" />
                                        Royapettah, Chennai – 600014
                                    </a>
                                </div>
                            </div>

                            <p className='footer-copy-academy'>© 2025 Social Sculpt Private Limited. All rights reserved.</p>
                        </div>
                    </section>

                </div>
            </div>
              <ThankYouModal open={showModal} setOpen={setShowModal} />
        </div>

    )
}

export default page
