'use client'
import Footer from '@/src/components/Footer'
import Header from '@/src/components/Header'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay';
import { useState } from 'react';
export const dynamic = "force-static";


interface FormData {
    name: string;
    city: string;
    email: string;
    phonenumber: string;
    link: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    city?: string;
    phonenumber?: string;
    link?: string;
    message?: string;
}

const page = () => {


    const [formData, setFormData] = useState<FormData>({
        name: "",
        city: "",
        email: "",
        phonenumber: "",
        link: "",
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

        if (!formData.link.trim()) {
            newErrors.link = "Link is required";
        }
        if (!formData.city.trim()) {
            newErrors.city = "City is required";
        }

        // else if (!/^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?$/.test(formData.link)) {
        //     newErrors.link = "Enter valid URL";
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
            newErrors.message = "Please describe your Message";
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
            params.append("link", formData.link);
            params.append("city", formData.city);
            params.append("message", formData.message);
            params.append("phonenumber", formData.phonenumber);
            params.append("email", formData.email);

            await fetch(
                "https://script.google.com/macros/s/AKfycbx7lzSHAJoQfx2Dnz_U9OowHAXYdnPBwYYmLhVHom1vniq8Qn5OJNBgcl-ojinDVttMDA/exec",
                {
                    method: "POST",
                    mode: "no-cors",
                    body: params,
                }
            );

            // setSubmittedData(formData);

            setFormData({
                name: "",
                city: "",
                email: "",
                phonenumber: "",
                link: "",
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

    const adsCreative = [
        "https://www.youtube.com/embed/15uNzOozm2o?autoplay=1&mute=1&playsinline=1&loop=1&playlist=15uNzOozm2o",
        "https://www.youtube.com/embed/H7GBA7pd7aE?autoplay=1&mute=1&playsinline=1&loop=1&playlist=H7GBA7pd7aE",
        "https://www.youtube.com/embed/P91YJMVcD1U?autoplay=1&mute=1&playsinline=1&loop=1&playlist=P91YJMVcD1U",
        "https://www.youtube.com/embed/YHCjJ52TCA4?autoplay=1&mute=1&playsinline=1&loop=1&playlist=YHCjJ52TCA4",
        // "https://www.youtube.com/embed/zDwlnQA5FrQ?autoplay=1&mute=1&playsinline=1&loop=1&playlist=zDwlnQA5FrQ",
        "https://www.youtube.com/embed/9w53tEp4R-E?autoplay=1&mute=1&playsinline=1&loop=1&playlist=9w53tEp4R-E",
    ]


    return (
        <>
            <Header />

            <div className='overflow-hidden personal-branding-parent'>

                <section className="banner-positioning personal-branding">
                    <div className="container">
                        <div className='' data-aos="fade-right">
                            <h1 className="banner-title text-white" >
                                Be Bigger Than <br className='break-tag' />the Algorithm.
                            </h1>

                            <p className="banner-description text-white">
                                We design personal brands for founders, leaders,<br className='break-tag' /> and industry experts who want to be recognised,<br className='break-tag' /> respected, and remembered
                            </p>

                            <div className='d-flex'>
                                <div className="wrapper">
                                    <a href="https://calendly.com/arunachalam-socialsculpt/30min" target='_blank' className='perosnal-brand'><span>Book a Consultation</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='section-padding'>
                    <div className='container'>
                        <div className='row'>

                            <div className='col-lg-5'>
                                <div className='me-lg-5' data-aos="zoom-in">
                                    <img src="/personal-brand.png" alt="" className='image-fluid perosnal-image' />
                                </div>
                            </div>


                            <div className='col-lg-7 my-auto'>
                                <div data-aos="zoom-in">
                                    <h2 className="common-heading mb-4">Build a Brand That Speaks Before You Do</h2>
                                    <p className='mt-4'>Your personal brand is not just your presence online. It is your reputation, authority, and identity combined. In a crowded digital space, visibility alone is not enough. You need clarity, consistency, and a strategy that positions you with intent.</p>
                                    <p className='mt-4'>At Social Sculpt, we help individuals turn their expertise, story, and perspective into a powerful digital identity that attracts the right audience and opportunities.</p>

                                    <div className='d-flex mt-5'>
                                        <div className="wrapper">
                                            <a href="https://calendly.com/arunachalam-socialsculpt/30min" target='_blank' className='perosnal-brand black'><span>Book a Consultation</span></a>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>


                </section>

                <section className="methodology-section section-padding">
                    <div className='container'>
                        <div className='' data-aos="zoom-in">
                            <div className="methodology-header">
                                <span className="line"></span>
                                <p className="tag">OUR APPROACH</p>
                                <span className="line"></span>
                            </div>

                            <h1 className="hero-title">
                                <span className="white">How We Turn</span>
                                <span className="ms-3 outline">Your Expertise</span>
                                <span className="yellow">Into Your Identity</span>
                            </h1>

                            <p className="hero-desc">

                                Most people have the knowledge. Few have the brand that <br className='break-tag' />makes people stop, listen, and remember. <span className="highlight">We bridge that<br className='break-tag' /> gap - with strategy, clarity, and intention.</span>

                                {/* We help <span className="highlight">founders</span> turn their expertise into influence and meaningful
                            <br />
                            <span className="highlight">business opportunities.</span> */}

                            </p>
                        </div>
                    </div>
                </section>

                <section className="timeline-section section-padding">

                    <div className="container" >
                        <div className='text-center mb-5' data-aos="zoom-in" >
                            <span className="badge-label" >WORKFLOW</span>
                            <h2 className="timeline-heading"
                            >
                                The Path to Growth
                            </h2>
                            <p className="timeline-sub" >
                                A clear, strategic roadmap that transforms your expertise into <br className='break-tag' />visibility, authority, and real opportunity
                            </p>
                        </div>
                    </div>

                    <div className="container position-relative">

                        <div className="timeline-line-wrapper">
                            <div className="timeline-line"></div>
                            <div
                                className="timeline-line-progress"
                            ></div>
                        </div>

                        <div className="row align-items-center timeline-item" >

                            <>
                                <div className="col-lg-5" data-aos="fade-up">
                                    <div className='text-end timeline-content one' >
                                        <span className="step-label">INITIATION</span>
                                        <h3>Discover</h3>
                                        <p className="step-sub">The Foundation</p>
                                        <p className="step-desc">
                                            We uncover your strengths, audience, and positioning <br className='break-tag' />gaps to identify what truly sets you apart.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-lg-2" data-aos="fade-down">
                                    <div className='position-relative text-center'>
                                        <div className="timeline-icon timeline-icon-one">
                                            <span>1</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-5"></div>
                            </>
                        </div>

                        <div className="row align-items-center timeline-item" >
                            <>
                                <div className="col-lg-5"></div>

                                <div className="col-lg-2" data-aos="fade-up">
                                    <div className='position-relative text-center'>
                                        <div className="timeline-icon timeline-icon-two">
                                            <span>2</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-5 " data-aos="fade-down">
                                    <div className='timeline-content two'>
                                        <span className="step-label">CLARITY</span>
                                        <h3>Define</h3>
                                        <p className="step-sub">The Narrative</p>
                                        <p className="step-desc">
                                            We shape your message and positioning so your <br className='break-tag' />expertise translates clearly to the right audience.
                                        </p>
                                    </div>
                                </div>

                            </>
                        </div>

                        <div className="row align-items-center timeline-item" >
                            <>
                                <div className="col-lg-5 " data-aos="fade-up">
                                    <div className='text-end timeline-content three'>
                                        <span className="step-label">CREATION</span>
                                        <h3>Design</h3>
                                        <p className="step-sub">The System</p>
                                        <p className="step-desc">
                                            We build cohesive visual and content systems <br className='break-tag' /> that strengthen credibility and consistency.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-lg-2" data-aos="fade-down">
                                    <div className='position-relative text-center'>
                                        <div className="timeline-icon timeline-icon-three">
                                            <span>3</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-5"></div>
                            </>
                        </div>

                        <div className="row align-items-center timeline-item" >
                            <>
                                <div className="col-lg-5"></div>

                                <div className="col-lg-2" data-aos="fade-up">
                                    <div className='position-relative text-center'>
                                        <div className="timeline-icon timeline-icon-four">
                                            <span>4</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-5 " data-aos="fade-down">
                                    <div className='timeline-content four'>
                                        <span className="step-label">EXECUTION</span>
                                        <h3>Deploy</h3>
                                        <p className="step-sub">The Momentum</p>
                                        <p className="step-desc">
                                            We launch, optimize, and scale your presence  <br className='break-tag' />to turn clarity into measurable growth.
                                        </p>
                                    </div>
                                </div>
                            </>
                        </div>

                    </div>

                    <div className='d-flex justify-content-center'>
                        <div className="wrapper">
                            <a href="https://calendly.com/arunachalam-socialsculpt/30min" target='_blank' className='perosnal-brand black'><span>Book a Strategy Call </span></a>
                        </div>
                    </div>
                </section>

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
                            <SwiperSlide key={i}>
                                <div className="">
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

                <section className='single-line-podcast section-margin mt-0'>
                    <h2 >Turn Your Name Into a Brand People Trust</h2>
                </section>

                <section className="features-section section-padding-bottom">
                    <div className="container">

                        <div className="text-center mb-5" data-aos="fade-up">
                            <h2 className="common-heading">
                                What We Do
                            </h2>
                            <p className="text-muted mt-4">
                                Everything you need to build authority and attract the right opportunities
                            </p>
                        </div>

                        <div className="row g-4">
                            {[
                                {
                                    icon: "fa-comment-dots",
                                    title: "Brand Strategy",
                                    desc: "We define your niche, audience, and positioning so your brand cuts through the noise and lands with the right people."
                                },
                                {
                                    icon: "fa-robot",
                                    title: "Personal Brand Audit",
                                    desc: "We take a hard, honest look at where your brand stands today so we know exactly where to take it tomorrow."
                                },
                                {
                                    icon: "fa-database",
                                    title: "Storytelling and Messaging",
                                    desc: "We find the human story behind your name and craft messaging that makes people feel something real when they discover you."
                                },
                                {
                                    icon: "fa-rotate",
                                    title: "Content Creation Support",
                                    desc: "From the first idea to the final post, we help you create content that genuinely connects with people and quietly converts."
                                },
                                {
                                    icon: "fa-inbox",
                                    title: "Thought Leadership Building",
                                    desc: "We position you as the go-to voice in your space so when your audience has a question, your name is the first answer."
                                },
                                {
                                    icon: "fa-chart-column",
                                    title: "Reputation Management",
                                    desc: "We monitor, shape, and protect how the world sees you - because your name is your most valuable asset, guard it well."
                                }
                            ].map((item, index) => (
                                <div className="col-lg-4 col-md-6" key={index} data-aos="fade-up" data-aos-delay={index * 110}>
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

                <section className="why-section-service section-padding">
                    <div className="container">

                        <div className="mb-4" data-aos="zoom-in">
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
                                <div className="col-lg-6" key={index} data-aos="fade-down" data-aos-delay={index * 120}>
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

                <div className='section-padding'>
                    <div className='container'>
                        <div className='common-page-cta' data-aos="fade-down">

                            <h3 className='common-heading mb-4'>Strong Brands Exist Beyond Screens</h3>
                            <p>While digital drives discovery, print helps brands create tangible and memorable experiences.</p>

                            <div className='d-flex justify-content-center align-item-center mt-5 final-cta-btn'>
                                <div className="wrapper">
                                    <a href="https://calendly.com/arunachalam-socialsculpt/30min" target='_blank' ><span>Book a call </span></a>
                                </div>
                                <div className="wrapper ms-lg-4 ms-md-4 ms-0 mt-lg-0 mt-md-0 mt-4">
                                    <a href="/contact-us"><span>Contact Us</span></a>
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
