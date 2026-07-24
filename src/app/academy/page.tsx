'use client'
import ThankYouModal from '@/src/components/ThankYouModel';
import React, { useState, useRef } from 'react'
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import Marquee from 'react-fast-marquee';
export const dynamic = "force-static";
// import emailjs from "@emailjs/browser";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
};

const wordUp = {
    hidden: { opacity: 0, y: 26 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 220, damping: 22 } },
};

const chipPop = {
    hidden: { opacity: 0, scale: 0.4, rotate: -14 },
    show: { opacity: 1, scale: 1, rotate: -2, transition: { type: 'spring' as const, stiffness: 260, damping: 13 } },
};

const btnSpring = { type: 'spring' as const, stiffness: 400, damping: 17 };

const brandLogosRow1 = [
    "/Clients/client-logo-2.png",
    "/Clients/client-logo-3.png",
    "/Clients/client-logo-10.png",
    "/Clients/client-logo-6.jpg",
    "/Clients/client-logo-7.png",
    "/Clients/client-logo-16.png",
    "/Clients/client-logo-9.png",
    "/Clients/client-logo-13.avif",
    "/Clients/client-logo-18.png",
    "/Clients/client-logo-12.png",
    "/Clients/client-logo-13.png",
    "/Clients/client-logo-20.webp",
    "/Clients/EB5.jpg",
];

const brandLogosRow2 = [
    "/Clients/client-logo-21.svg",
    "/Clients/client-logo-17.png",
    "/Clients/client-logo-22.avif",
    "/Clients/client-logo-14.jpg",
    "/Clients/client-logo-16.svg",
    "/Clients/client-logo-8.png",
    "/Clients/client-logo-11.png",
    "/Clients/client-logo-14.png",
    "/Clients/client-logo-4.png",
    "/Clients/client-logo-1.png",
    "/Clients/client-logo-19.webp",
    "/Clients/IIMShillong.png",
];


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
        <MotionConfig reducedMotion="user">
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

            <header className="anav-wrap">
                <nav className="navbar navbar-expand-lg anav">
                    <div className="container">
                        <a className="navbar-brand" href="/"><img src="/academy-ss.jpg" alt="Social Sculpt Academy" className='anav-logo' /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#academyNav" aria-controls="academyNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="academyNav">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#methodology">Methodology</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#program">Curriculum</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#internship">Internship</a>
                                </li>
                            </ul>
                            <a href="#contact-us" className="anav-cta">
                                Apply Now
                                <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </a>
                        </div>
                    </div>
                </nav>
            </header>

            <div className='overflow-hidden'>
                <div className='academy-parent'>
                    <section className="academy-hero-wrap">
                        <motion.div
                            className="ahero-bg-glow"
                            animate={{ x: [0, 40, 0], y: [0, -25, 0] }}
                            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
                        ></motion.div>

                        <div className="ahero-floaties" aria-hidden="true">
                            <motion.svg className="ahero-floaty ahero-floaty-spark1" viewBox="0 0 24 24"
                                animate={{ y: [0, -14, 0], rotate: [0, 25, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
                                <path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
                            </motion.svg>
                            <motion.svg className="ahero-floaty ahero-floaty-spark2" viewBox="0 0 24 24"
                                animate={{ y: [0, 10, 0], rotate: [0, -35, 0], scale: [1, 0.75, 1] }}
                                transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}>
                                <path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
                            </motion.svg>
                            <motion.span className="ahero-floaty ahero-floaty-ring"
                                animate={{ y: [0, -18, 0], x: [0, 8, 0] }}
                                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}></motion.span>
                            <motion.span className="ahero-floaty ahero-floaty-dot"
                                animate={{ y: [0, 12, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}></motion.span>
                            <motion.svg className="ahero-floaty ahero-floaty-plus" viewBox="0 0 24 24"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}>
                                <path d="M11 2h2v9h9v2h-9v9h-2v-9H2v-2h9z" />
                            </motion.svg>
                        </div>
                        <div className="container">
                            <div className="ahero-grid">

                                <motion.div className="ahero-left" variants={stagger} initial="hidden" animate="show">

                                    <motion.div className="ahero-badge-wrap" variants={fadeUp}>
                                        <div className="ahero-badge-glow"></div>
                                        <div className="ahero-badge">
                                            <span className="ahero-badge-icon">
                                                <svg viewBox="0 0 24 24"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" /></svg>
                                            </span>
                                            <span className="ahero-badge-text">Social Sculpt Academy</span>
                                            <span className="ahero-badge-live">
                                                <span className="academy-hero-badge-dot"></span>
                                                Live Cohort
                                            </span>
                                        </div>
                                    </motion.div>

                                    <motion.h1 className="ahero-title" variants={stagger}>
                                        {['Where', 'Marketers', 'Are'].map((w) => (
                                            <motion.span key={w} className="ahero-word" variants={wordUp}>{w} </motion.span>
                                        ))}
                                        <motion.span className="ahero-title-chip" variants={chipPop}>Built</motion.span>
                                        <br className='break-tag' />
                                        <motion.span className="ahero-word" variants={wordUp}>Not Taught</motion.span>
                                    </motion.h1>

                                    <motion.p className="ahero-desc" variants={fadeUp}>
                                        Master Vibe Marketing, AI systems, and real-world execution <br className='break-tag' />and become impossible to ignore in the digital economy
                                    </motion.p>

                                    <motion.div className="ahero-stats" variants={fadeUp}>
                                        <div className="ahero-stat">
                                            <p className="ahero-stat-top">8-Week</p>
                                            <p className="ahero-stat-sub">Live Program</p>
                                        </div>
                                        <div className="ahero-stat">
                                            <p className="ahero-stat-top">AI-Powered</p>
                                            <p className="ahero-stat-sub">Vibe Marketing</p>
                                        </div>
                                        <div className="ahero-stat">
                                            <p className="ahero-stat-top">2 Execution</p>
                                            <p className="ahero-stat-sub">Tracks</p>
                                        </div>
                                        <div className="ahero-stat">
                                            <p className="ahero-stat-top">Portfolio</p>
                                            <p className="ahero-stat-sub">First Learning</p>
                                        </div>
                                        <div className="ahero-stat">
                                            <p className="ahero-stat-top">Paid</p>
                                            <p className="ahero-stat-sub">Internship</p>
                                        </div>
                                        <div className="ahero-stat">
                                            <p className="ahero-stat-top">Limited</p>
                                            <p className="ahero-stat-sub">Seats Per Batch</p>
                                        </div>
                                    </motion.div>

                                    <motion.div className="ahero-ctas" variants={fadeUp}>
                                        <motion.a href="#contact-us" className="academy-hero-btn-primary"
                                            whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.96 }} transition={btnSpring}>
                                            Speak with us
                                            <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                        </motion.a>
                                        <motion.a href="#program" className="ahero-btn-blue"
                                            whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.96 }} transition={btnSpring}>
                                            Explore Program
                                            <span className="ahero-btn-arrow">→</span>
                                        </motion.a>
                                    </motion.div>

                                </motion.div>

                                <div className="ahero-right">
                                    <motion.div
                                        className="ahero-form-card"
                                        initial={{ opacity: 0, scale: 0.92 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
                                    >
                                        <h3 className="ahero-form-title">Want to know more?</h3>

                                        <form onSubmit={handleSubmit}>

                                            <div className="mb-3">
                                                <input type="text" className="custom-input" name="name" value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="Enter your name" />
                                                {errors.name && <small className="text-danger">{errors.name}</small>}
                                            </div>

                                            <div className="mb-3">
                                                <input type="text" name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="custom-input"
                                                    placeholder="Enter your email address" />
                                                {errors.email && <small className="text-danger">{errors.email}</small>}
                                            </div>

                                            <div className="mb-3">
                                                <input type="number" className="custom-input" name="phonenumber"
                                                    value={formData.phonenumber}
                                                    onChange={handleChange}
                                                    placeholder="Enter your phone number" />
                                                {errors.phonenumber && <small className="text-danger">{errors.phonenumber}</small>}
                                            </div>

                                            <div className="mb-3">
                                                <textarea className="custom-input" name="message" placeholder="Why you interested in this course" value={formData.message}
                                                    onChange={handleChange}></textarea>
                                                {errors.message && <small className="text-danger">{errors.message}</small>}
                                            </div>

                                            <motion.button type="submit" className='common-btn-academy w-100 text-center'
                                                whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.97 }} transition={btnSpring}>
                                                <span>{loading ? "Enrolling..." : "Enroll Now "}</span>
                                            </motion.button>
                                            <p className='ahero-form-note'>(Batch date will be announced soon)</p>

                                        </form>
                                    </motion.div>

                                    <motion.div
                                        className="ahero-pills"
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.45, delay: 0.7 }}
                                    >
                                        <span className="ahero-pill"><span className="academy-hero-badge-dot"></span>Limited seats</span>
                                        <span className="ahero-pill"><span className="academy-hero-badge-dot"></span>High expectations</span>
                                        <span className="ahero-pill"><span className="academy-hero-badge-dot"></span>Real transformation</span>
                                    </motion.div>
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
                                    Marketing Has Already{' '}
                                    <span className="ahero-underline-wrap">
                                        Changed
                                        <svg className="ahero-underline" viewBox="0 0 220 12" preserveAspectRatio="none" aria-hidden="true">
                                            <motion.path d="M3 9 C 60 3, 160 3, 217 7" fill="none"
                                                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                                                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }} />
                                        </svg>
                                    </span>
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
                                            <div className="choose-your-path-card">
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

                                <div className="academy-phase row">
                                    <div className=" academy-left-col academy-empty d-none d-md-block"></div>
                                    <div className="academy-dot-wrap col-auto">
                                        <motion.div className="academy-dot academy-dot-filled"
                                            initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true, margin: '-80px' }}
                                            transition={{ type: 'spring', stiffness: 300, damping: 15 }}></motion.div>
                                    </div>
                                    <div className="academy-right-col">
                                        <span className="academy-week-tag">Weeks 1 – 4</span>
                                        <div className='col-lg-9 mx-auto'>
                                            <div className="academy-pcard">
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
                                        <motion.div className="academy-dot academy-dot-filled"
                                            initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true, margin: '-80px' }}
                                            transition={{ type: 'spring', stiffness: 300, damping: 15 }}></motion.div>
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

                    <section className="academy-become section-padding-bottom position-relative common-backline">
                        <div className="container">
                            <h2 className="common-heading text-center">What We Help You Become</h2>
                            <p className='text-center important-text'>Not just certified. Not just course completed. <br className='break-tag' />But someone who:</p>

                            <div className="academy-become-grid">
                                <div className="academy-become-item"><span className="academy-tcheck"><i className="fa-solid fa-arrow-right"></i></span>Understands how people think</div>
                                <div className="academy-become-item"><span className="academy-tcheck"><i className="fa-solid fa-arrow-right"></i></span>Knows how brands grow</div>
                                <div className="academy-become-item"><span className="academy-tcheck"><i className="fa-solid fa-arrow-right"></i></span>Can build systems, not just posts</div>
                                <div className="academy-become-item"><span className="academy-tcheck"><i className="fa-solid fa-arrow-right"></i></span>Uses AI intelligently</div>
                                <div className="academy-become-item"><span className="academy-tcheck"><i className="fa-solid fa-arrow-right"></i></span>Can turn ideas into income</div>
                                <div className="academy-become-item"><span className="academy-tcheck"><i className="fa-solid fa-arrow-right"></i></span>Can build authority through personal branding</div>
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

                                            <motion.span className="module-arrow"
                                                animate={{ rotate: activeModules.includes(1) ? 0 : 180 }} transition={{ duration: 0.25 }}>
                                                <i className="fa-solid fa-angle-down"></i>
                                            </motion.span>
                                        </button>

                                        <AnimatePresence initial={false}>
                                            {activeModules.includes(1) && (
                                                <motion.div className="module-contents" style={{ overflow: 'hidden' }}
                                                    initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.32, ease: 'easeOut' }}>

                                                <p><span>• Marketing Evolution & Vibe Marketing:</span> Understand how marketing shifted from product to culture-driven strategies.</p>
                                                <p><span>• Consumer Psychology:</span> Learn cognitive biases and emotional triggers behind buying decisions.</p>
                                                <p><span>• Attention Economy & ZMOT:</span> Understand how consumers discover and research before purchasing.</p>
                                                <p><span>• Core Frameworks:</span> Apply AIDA, funnels, and real-world campaign analysis.</p>
                                            </motion.div>
                                            )}
                                        </AnimatePresence>

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

                                            <motion.span className="module-arrow"
                                                animate={{ rotate: activeModules.includes(1) ? 0 : 180 }} transition={{ duration: 0.25 }}>
                                                <i className="fa-solid fa-angle-down"></i>
                                            </motion.span>
                                        </button>

                                        <AnimatePresence initial={false}>
                                            {activeModules.includes(1) && (
                                                <motion.div className="module-contents" style={{ overflow: 'hidden' }}
                                                    initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.32, ease: 'easeOut' }}>

                                                {/* <p><span>• Core Marketing Principles:</span> It's provocative, memorable, speaks directly to ambition, and positions the course as insider knowledge - exactly what a premium academy should feel like.</p> */}
                                                {/* <p><span>• Customer Insights:</span> Understand buyer personas.</p> */}
                                                <p><span>• What a Brand Really Is:</span> Learn identity, perception, and brand promise.</p>
                                                <p><span>• Brand Archetypes:</span> Use archetypes to build emotional connection.</p>
                                                <p><span>• Positioning Strategy:</span> Create clear differentiation in crowded markets.</p>
                                                <p><span>• Brand Storytelling:</span> Build narratives using Golden Circle and StoryBrand.</p>
                                            </motion.div>
                                            )}
                                        </AnimatePresence>

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

                                                <motion.span className="module-arrow"
                                                    animate={{ rotate: activeModules.includes(3) ? 0 : 180 }} transition={{ duration: 0.25 }}>
                                                    <i className="fa-solid fa-angle-down"></i>
                                                </motion.span>
                                            </button>

                                            <AnimatePresence initial={false}>
                                            {activeModules.includes(3) && (
                                                <motion.div className="module-contents" style={{ overflow: 'hidden' }}
                                                    initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.32, ease: 'easeOut' }}>

                                                    {/* <p><span>• Core Marketing Principles:</span> It's provocative, memorable, speaks directly to ambition, and positions the course as insider knowledge - exactly what a premium academy should feel like.</p> */}
                                                    {/* <p><span>• Customer Insights:</span> Understand buyer personas.</p> */}
                                                    <p><span>• Content Strategy Systems:</span> Build scalable content frameworks.</p>
                                                    <p><span>• AI-Powered Creation:</span> Use AI tools for content generation and workflows.</p>
                                                    <p><span>• Platform Content Formats:</span> Learn what works on different platforms.</p>
                                                    <p><span>• Consistency Engine:</span> Build systems for regular content output.</p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

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

                                                <motion.span className="module-arrow"
                                                    animate={{ rotate: activeModules.includes(4) ? 0 : 180 }} transition={{ duration: 0.25 }}>
                                                    <i className="fa-solid fa-angle-down"></i>
                                                </motion.span>
                                            </button>

                                            <AnimatePresence initial={false}>
                                            {activeModules.includes(4) && (
                                                <motion.div className="module-contents" style={{ overflow: 'hidden' }}
                                                    initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.32, ease: 'easeOut' }}>

                                                    {/* <p><span>• Core Marketing Principles:</span> It's provocative, memorable, speaks directly to ambition, and positions the course as insider knowledge - exactly what a premium academy should feel like.</p> */}
                                                    {/* <p><span>• Customer Insights:</span> Understand buyer personas.</p> */}
                                                    <p><span>• Algorithm Mastery:</span> Understand platform algorithms.</p>
                                                    <p><span>• Content Distribution:</span> Maximize reach through engagement signals.</p>
                                                    <p><span>• Influencer Marketing:</span> Plan and execute influencer campaigns.</p>
                                                    <p><span>• Community Building:</span> Build loyal owned audiences.</p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

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

                                                <motion.span className="module-arrow"
                                                    animate={{ rotate: activeModules.includes(5) ? 0 : 180 }} transition={{ duration: 0.25 }}>
                                                    <i className="fa-solid fa-angle-down"></i>
                                                </motion.span>
                                            </button>

                                            <AnimatePresence initial={false}>
                                            {activeModules.includes(5) && (
                                                <motion.div className="module-contents" style={{ overflow: 'hidden' }}
                                                    initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.32, ease: 'easeOut' }}>

                                                    {/* <p><span>• Core Marketing Principles:</span> It's provocative, memorable, speaks directly to ambition, and positions the course as insider knowledge - exactly what a premium academy should feel like.</p> */}
                                                    {/* <p><span>• Customer Insights:</span> Understand buyer personas.</p> */}
                                                    <p><span>• Social Media Growth Systems:</span> Build scalable growth strategies.</p>
                                                    <p><span>• SEO & LLM Optimization:</span> Learn search and AI-driven discovery.</p>
                                                    <p><span>• Performance Marketing:</span> Run paid ads with ROI focus.</p>
                                                    <p><span>• Full-Funnel Strategy:</span> Build end-to-end marketing funnels.</p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

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

                                                <motion.span className="module-arrow"
                                                    animate={{ rotate: activeModules.includes(6) ? 0 : 180 }} transition={{ duration: 0.25 }}>
                                                    <i className="fa-solid fa-angle-down"></i>
                                                </motion.span>
                                            </button>

                                            <AnimatePresence initial={false}>
                                            {activeModules.includes(6) && (
                                                <motion.div className="module-contents" style={{ overflow: 'hidden' }}
                                                    initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.32, ease: 'easeOut' }}>

                                                    {/* <p><span>• Core Marketing Principles:</span> It's provocative, memorable, speaks directly to ambition, and positions the course as insider knowledge - exactly what a premium academy should feel like.</p> */}
                                                    {/* <p><span>• Customer Insights:</span> Understand buyer personas.</p> */}
                                                    <p><span>• Personal Brand Positioning:</span> Define niche and positioning.</p>
                                                    <p><span>• LinkedIn Authority Building:</span> Build professional presence.</p>
                                                    <p><span>• Instagram Growth:</span> Create and grow with content.</p>
                                                    <p><span>• AI Content Systems & Monetization:</span> Scale and monetize your brand.</p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </section>

                    <section className='Tools-Technologies technologies-logo section-padding-bottom position-relative common-backline' id="tools">
                        <div className='container'>
                            <h2 className='common-heading text-center text-white'>Learn the Tools Modern Marketers Actually Use</h2>
                        </div>

                        <div className='mt-5 academy-logo-marquee'>
                            <Marquee speed={45} gradient={false} pauseOnHover={true} autoFill={true}>
                                <img src="/technologies/google-search.png" alt="Google Search" />
                                <img src="/technologies/Google_Analytics.svg" alt="Google Analytics" />
                                <img src="/technologies/Google-Trends.webp" alt="Google Trends" />
                                <img src="/technologies/Meta-Ads.webp" alt="Meta Ads" />
                                <img src="/technologies/google-ads.png" alt="Google Ads" />
                                <img src="/technologies/studio.png" alt="Studio" />
                                <img src="/technologies/Ahrefs.png" alt="Ahrefs" />
                            </Marquee>
                        </div>

                        <div className='mt-4 academy-logo-marquee'>
                            <Marquee speed={45} direction="right" gradient={false} pauseOnHover={true} autoFill={true}>
                                <img src="/technologies/google-tag-manager.png" alt="Google Tag Manager" />
                                <img src="/technologies/figma.jpg" alt="Figma" />
                                <img src="/technologies/canva.jpeg" alt="Canva" />
                                <img src="/technologies/semrush.png" alt="Semrush" />
                                <img src="/technologies/perplexity.webp" alt="Perplexity" />
                                <img src="/technologies/capcut.webp" alt="CapCut" />
                            </Marquee>
                        </div>

                        <div className='container'>
                            <div className='mt-5'>
                                <h2 className='common-heading text-center text-white pt-5'>Work with AI Tools That Multiply Your Output</h2>
                            </div>
                        </div>

                        <div className='mt-5 academy-logo-marquee'>
                            <Marquee speed={45} gradient={false} pauseOnHover={true} autoFill={true}>
                                <img src="/ai-technologies/chatgpt.png" alt="ChatGPT" />
                                <img src="/ai-technologies/claude.webp" alt="Claude" />
                                <img src="/ai-technologies/notion.png" alt="Notion" />
                                <img src="/ai-technologies/hiigsfeild.png" alt="Higgsfield" />
                                <img src="/ai-technologies/midjourney.avif" alt="Midjourney" />
                                <img src="/ai-technologies/notebooklm.png" alt="NotebookLM" />
                                <img src="/ai-technologies/ElevenLabs.png" alt="ElevenLabs" />
                            </Marquee>
                        </div>
                    </section>

                    <section className="academy-internship-section section-padding-bottom position-relative common-backline" id="internship">
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

                    <section className="academy-brands section-padding-bottom position-relative common-backline">
                        <div className="container">
                            <h2 className="common-heading text-center">Brands We Work With. <span className="academy-brands-accent">Results That Speak</span></h2>
                            <p className="text-center important-text">Social Sculpt has worked with real brands across industries - from startups <br className='break-tag' />to established businesses. This is the experience we bring into the classroom.</p>
                        </div>

                        <div className="mt-5 academy-brand-marquee">
                            <Marquee speed={40} gradient={false} pauseOnHover={true} autoFill={true}>
                                {brandLogosRow1.map((logo) => (
                                    <div className="academy-brand-tile" key={logo}>
                                        <img src={logo} alt="Client brand logo" />
                                    </div>
                                ))}
                            </Marquee>
                        </div>

                        <div className="mt-4 academy-brand-marquee">
                            <Marquee speed={40} direction="right" gradient={false} pauseOnHover={true} autoFill={true}>
                                {brandLogosRow2.map((logo) => (
                                    <div className="academy-brand-tile" key={logo}>
                                        <img src={logo} alt="Client brand logo" />
                                    </div>
                                ))}
                            </Marquee>
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
                                        <p className="academy-diff-sub">Surface-level training on platforms and features.</p>
                                    </div>
                                    <div className="academy-diff-arrow">
                                        <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                    </div>
                                    <div className="academy-diff-we">
                                        <div className="academy-diff-we-tag">We</div>
                                        <p className="academy-diff-we-text">Build how you think.</p>
                                        <p className="academy-diff-sub academy-diff-sub-we">Train your judgement, not just your skillset.</p>
                                    </div>
                                </div>

                                <div className="academy-diff-row">
                                    <div className="academy-diff-others">
                                        <div className="academy-diff-others-tag">Others</div>
                                        <p className="academy-diff-others-text">Teach tactics.</p>
                                        <p className="academy-diff-sub">Quick hacks that stop working in months.</p>
                                    </div>
                                    <div className="academy-diff-arrow">
                                        <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                    </div>
                                    <div className="academy-diff-we">
                                        <div className="academy-diff-we-tag">We</div>
                                        <p className="academy-diff-we-text">Teach strategy.</p>
                                        <p className="academy-diff-sub academy-diff-sub-we">Frameworks that compound over your career.</p>
                                    </div>
                                </div>

                                <div className="academy-diff-row">
                                    <div className="academy-diff-others">
                                        <div className="academy-diff-others-tag">Others</div>
                                        <p className="academy-diff-others-text">Teach marketing.</p>
                                        <p className="academy-diff-sub">Generic theory disconnected from outcomes.</p>
                                    </div>
                                    <div className="academy-diff-arrow">
                                        <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                    </div>
                                    <div className="academy-diff-we">
                                        <div className="academy-diff-we-tag">We</div>
                                        <p className="academy-diff-we-text">Teach how to create influence.</p>
                                        <p className="academy-diff-sub academy-diff-sub-we">Build a brand, an audience, and real authority.</p>
                                    </div>
                                </div>

                                <div className="academy-diff-row">
                                    <div className="academy-diff-others">
                                        <div className="academy-diff-others-tag">Others</div>
                                        <p className="academy-diff-others-text">Information overload.</p>
                                        <p className="academy-diff-sub">Hours of videos with no real execution.</p>
                                    </div>
                                    <div className="academy-diff-arrow">
                                        <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                    </div>
                                    <div className="academy-diff-we">
                                        <div className="academy-diff-we-tag">We</div>
                                        <p className="academy-diff-we-text">Execution-first learning.</p>
                                        <p className="academy-diff-sub academy-diff-sub-we">Every week you ship real, portfolio-grade work.</p>
                                    </div>
                                </div>

                                <div className="academy-diff-row">
                                    <div className="academy-diff-others">
                                        <div className="academy-diff-others-tag">Others</div>
                                        <p className="academy-diff-others-text">One-size-fits-all syllabus.</p>
                                        <p className="academy-diff-sub">Not built for how modern marketers work.</p>
                                    </div>
                                    <div className="academy-diff-arrow">
                                        <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                    </div>
                                    <div className="academy-diff-we">
                                        <div className="academy-diff-we-tag">We</div>
                                        <p className="academy-diff-we-text">Designed around real workflows.</p>
                                        <p className="academy-diff-sub academy-diff-sub-we">Modeled on how top marketers actually operate.</p>
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
              <a
                  href="https://wa.me/917550039872?text=Hi%2C%20I%E2%80%99m%20interested%20in%20the%20Social%20Sculpt%20Academy%20program.%20Can%20you%20share%20more%20details%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="academy-wa-float"
                  aria-label="Chat with us on WhatsApp"
              >
                  <i className="fa-brands fa-whatsapp"></i>
              </a>
              <ThankYouModal open={showModal} setOpen={setShowModal} />
        </div>
        </MotionConfig>

    )
}

export default page
