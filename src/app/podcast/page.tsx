'use client'
import React, { useState } from 'react'
import Footer from '@/src/components/Footer'
import Header from '@/src/components/Header'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import emailjs from "@emailjs/browser";
export const dynamic = "force-static";



import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import ThankYouModal from '@/src/components/ThankYouModel';
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

            await emailjs.send(
                "service_x8u73pv",
                "template_ix4w9st",
                {
                    name: formData.name,
                    email: formData.email,
                    phonenumber: formData.phonenumber,
                    city: formData.city,
                    link: formData.link,
                    message: formData.message,
                },
                "sYgfWk5g7QMhcexxQ"
            );

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
        "https://www.youtube.com/embed/J23GUpr-rDE?autoplay=1&mute=1&playsinline=1&loop=1&playlist=J23GUpr-rDE",
        "https://www.youtube.com/embed/PhgxwAB1nak?autoplay=1&mute=1&playsinline=1&loop=1&playlist=PhgxwAB1nak",
        "https://www.youtube.com/embed/Gkj93Og6qUs?autoplay=1&mute=1&playsinline=1&loop=1&playlist=Gkj93Og6qUs",
        "https://www.youtube.com/embed/flI_Q__aQKk?autoplay=1&mute=1&playsinline=1&loop=1&playlist=flI_Q__aQKk",
        "https://www.youtube.com/embed/FMcqwg8huhg?autoplay=1&mute=1&playsinline=1&loop=1&playlist=FMcqwg8huhg",
        "https://www.youtube.com/embed/PhgxwAB1nak?autoplay=1&mute=1&playsinline=1&loop=1&playlist=PhgxwAB1nak",
        "https://www.youtube.com/embed/HHioxg9L0-M?autoplay=1&mute=1&playsinline=1&loop=1&playlist=HHioxg9L0-M",
        "https://www.youtube.com/embed/k9eOo5HPbVI?autoplay=1&mute=1&playsinline=1&loop=1&playlist=k9eOo5HPbVI,",
        "https://www.youtube.com/embed/t5YKFrhQ7YY?autoplay=1&mute=1&playsinline=1&loop=1&playlist=t5YKFrhQ7YY",
        "https://www.youtube.com/embed/R-n-vuBFWK4?autoplay=1&mute=1&playsinline=1&loop=1&playlist=R-n-vuBFWK4",
        'https://www.youtube.com/embed/EA_Gn5sK_LE?autoplay=1&mute=1&playsinline=1&loop=1&playlist=EA_Gn5sK_LE',
        "https://www.youtube.com/embed/hOffvw8XfEI?autoplay=1&mute=1&playsinline=1&loop=1&playlist=hOffvw8XfEI"
    ]

    return (
        <div >
            <Header />
            <div className='overflow-hidden'>

                <section className='podcast-banner'>
                    <div className="hero-section">
                        <Swiper
                            modules={[Autoplay, EffectFade]}
                            slidesPerView={1}
                            loop={true}
                            effect="fade"
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            className="hero-swiper"
                        >
                            {["../Host-3.webp"].map(
                                (img, index) => (
                                    <SwiperSlide key={index}>
                                        <div
                                            className="hero-slide"
                                            style={{ backgroundImage: `url(${img})` }}
                                        >

                                            <div className="hero-inner">
                                                <div className="hero-content">

                                                    <div data-aos="fade-right">
                                                        <h1>
                                                            Inside The Minds Of People Shaping What’s Sculpt Next
                                                        </h1>
                                                        <p>
                                                            Unfiltered conversations with founders, creators, and leaders.
                                                            <br className='break-tag' /> The ideas, decisions, and stories behind the brands they build
                                                        </p>
                                                    </div>

                                                    <div className="hero-buttons" data-aos="fade-right">
                                                        <div className="wrapper">
                                                            <a href="/contact-us"><span>Feature Me</span></a>
                                                        </div>
                                                        <div className="wrapper second-btn" >
                                                            <a href="https://www.youtube.com/@ArunachalamS" target='_blank'><span>View Channel</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </SwiperSlide>
                                )
                            )}
                        </Swiper>
                    </div>
                </section>

                <section className="methodology-section section-padding podcast-methodology" data-aos="zoom-in">
                    <div className='container'>
                        <div className="methodology-header">
                            <span className="line"></span>
                            <p className="tag">WHY WE PODCAST</p>
                            <span className="line"></span>
                        </div>

                        <h1 className="hero-title">
                            <span className="white">Every Episode</span>
                            <span className=" outline"> Is a</span>
                            <span className="yellow">Masterclass in the Making</span>
                        </h1>

                        <p className="hero-desc">


                            No scripts. No filters. Just <span className="highlight">founders, creators, and leaders</span> talking about what actually worked - and what nearly broke them

                            {/* We help <span className="highlight">founders</span> turn their expertise into influence and meaningful
                        <br />
                        <span className="highlight">business opportunities.</span> */}
                        </p>
                    </div>
                </section>

                <section className='section-padding pt-0 my-lg-5 my-0 no-top-padding no-bottom-padding'>
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
                    <h2>We Make Your Voice Heard</h2>
                </section>

                <section className='founder-talk-section section-padding-bottom'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 my-auto">
                                <div className='founder-talk-left me-lg-4 me-0' data-aos="fade-left">

                                    <h2 className='common-heading'>Meet the host</h2>
                                    <div>

                                        <p className='my-4 name'>Arunachalam S</p>
                                        <p className='mt-3'>This podcast was created to explore those stories</p>
                                        <p className='my-3'>After years of working at the intersection of design, branding, and digital strategy, he realised that the most valuable insights rarely come from textbooks or trends, they come from real conversations with people who are building, experimenting, and redefining their industries.</p>
                                        <p className=''>Through the Social Sculpt podcast, he brings those conversations to the forefront.</p>
                                        <p className='mt-4'>Each episode features entrepreneurs, creators, and industry leaders sharing the thinking, challenges, and strategies behind building visibility and influence in today’s digital world.</p>
                                        <p className='my-3'>Because growth isn’t just about being seen.</p>
                                        <p className='my-3'>It’s about understanding what truly creates impact.</p>
                                        <p className='my-3'>Today, as the host of the Social Sculpt podcast, he curates conversations that turn experience into insight and ideas into inspiration for the next generation of builders and creators.</p>
                                    </div>
                                    <div >
                                        <ul className="social who-were-social">

                                            <li data-tooltip="Linkedin" className='Linkedin'>
                                                <a href="https://www.linkedin.com/in/arunachalam-numismatician/" aria-label="Linkedin" target='_blank'>
                                                    <i className="fa-brands fa-linkedin-in"></i>
                                                </a>
                                            </li>

                                            <li data-tooltip="Instagram" className='Instagram'>
                                                <a href="https://www.instagram.com/arunachalamnumismatician/" aria-label="Instagram" target='_blank'>
                                                    <i className="fa-brands fa-instagram"></i>
                                                </a>
                                            </li>

                                            <li data-tooltip="YouTube" className='YouTube'>
                                                <a href="https://www.youtube.com/@ArunachalamS" aria-label="YouTube" target='_blank'>
                                                    <i className="fa-brands fa-youtube"></i>
                                                </a>
                                            </li>

                                            <li data-tooltip="Facebook" className='Facebook'>
                                                <a href="https://www.facebook.com/arunachalam.numismatician" aria-label="Facebook" target='_blank'>
                                                    <i className="fa-brands fa-facebook-f"></i>
                                                </a>
                                            </li>

                                        </ul>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className='founder-talk-right' data-aos="fade-right">

                                    <img src="../arun.jpg" alt="About Social Sculpt" className="img-fluid" />

                                    <div className='founder-achievements' >
                                        <p className='name'>Arunachalam S</p>
                                        <p>Co-Founder & CMO - Nebula Startup School
                                            <br className='break-tag' /> Founder & CEO - Social Sculpt | Co-Creator & CMO - Postautopsy <br className='break-tag' />
                                            Podcast Host - Sculptors Podcast | Personal Branding Strategist</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='podcast-video'>
                    <h2 className='common-heading text-center mb-4' data-aos="fade-down">Podcast Episodes</h2>
                    <div className='container'>

                        <div className='row'>
                            <div className="col-lg-6">
                                <div className="video-wrapper" data-aos="fade-up">
                                    <div className="video-container">
                                        <iframe
                                            src="https://www.youtube.com/embed/GGVGNyei_AY"
                                            title="YouTube video"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    <p>
                                        The Future of Marketing, AI & Agencies -<br className='break-tag' /> And Why Most Will Fail </p>
                                </div>
                            </div>


                            <div className="col-lg-6">
                                <div className="video-wrapper" data-aos="fade-down">
                                    <div className="video-container">
                                        <iframe
                                            src="https://www.youtube.com/embed/FeUiHkb3DrU?si=QnQ3RR0SjrJJ6iYM"
                                            title="YouTube video"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    <p>
                                        Why 90% of Startups FAIL and How to Avoid Being One of Them with Premananth - Start Insights</p>
                                </div>
                            </div>


                        </div>


                        <div className='row'>
                            <div className="col-lg-6">
                                <div className="video-wrapper" data-aos="fade-up">
                                    <div className="video-container">
                                        <iframe

                                            src="https://www.youtube.com/embed/VtlfxAJF0JM?si=wECS7R96kI18gUtZ"
                                            title="YouTube video"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    <p>This Is How AI Quietly Replaces Entire Teams</p>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="video-wrapper" data-aos="fade-down">
                                    <div className="video-container">
                                        <iframe
                                            src="https://www.youtube.com/embed/9VwxkCPqnc0?si=A5-jX9w9b4EgBPP3"
                                            title="YouTube video"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    <p>
                                        The Truth About EdTech in India & <br className='break-tag' />Why Most Startups Fail</p>
                                </div>
                            </div>


                        </div>

                        <div className='row  '>
                            <div className="col-lg-6">
                                <div className="video-wrapper" data-aos="fade-up">
                                    <div className="video-container">
                                        <iframe
                                            src="https://www.youtube.com/embed/ggevLWWhYpU?si=uwgPm0iLBrafZDB7"
                                            title="YouTube video"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    <p>
                                        "School Failed Me!" How a School Dropout Built a $1M AI Company ft. Injaar Sriram</p>
                                </div>
                            </div>


                            <div className="col-lg-6">
                                <div className="video-wrapper" data-aos="fade-up">
                                    <div className="video-container">

                                        <iframe
                                            src="https://www.youtube.com/embed/3nXzAWATVPg?si=TShXb4MaCDIYaBJv"
                                            title="YouTube video"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    <p>
                                        If You Don't Have Taste, AI Will Replace You" <br className='break-tag' />DNA Community Founder</p>
                                </div>
                            </div>
                        </div>


                        <div className='d-flex justify-content-center mt-5'>
                            <div className="wrapper">
                                <a href="https://www.youtube.com/@ArunachalamS" target='_blank' className='black'><span>View Channel</span></a>

                            </div>
                        </div>
                    </div>
                </section>

                <section className='podcast-comtact-section section-padding'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-6 my-auto'>
                                <div className='right-section' data-aos="fade-right">
                                    <img src="../Studio.jpeg" alt="About Social Sculpt" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="contact-form-card podcast-contact" data-aos="fade-left">
                                    <h4 className=" mb-4">Request Invitation</h4>
                                    <form onSubmit={handleSubmit}>
                                        <div className='row'>
                                            <div className='col-lg-6'>
                                                <div>
                                                    <div className="mb-3">
                                                        <div className="mb-3">
                                                            <input type="text" className="form-control custom-input" name="name" value={formData.name}
                                                                onChange={handleChange}
                                                                placeholder="Your name" />
                                                            {errors.name && <small className="text-danger">{errors.name}</small>}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-lg-6'>
                                                <div>
                                                    <div className="mb-3">
                                                        <input type="text" className="form-control custom-input" name="city" value={formData.city}
                                                            onChange={handleChange}
                                                            placeholder="Your city" />
                                                        {errors.city && <small className="text-danger">{errors.city}</small>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-lg-6'>
                                                <div>
                                                    <div className="mb-3">
                                                        <input type="text" name="email"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            className="form-control custom-input"
                                                            placeholder="Your email address" />
                                                        {errors.email && <small className="text-danger">{errors.email}</small>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-lg-6'>
                                                <div>
                                                    <div className="mb-3">
                                                        <input type="number" className="form-control custom-input" name="phonenumber"
                                                            value={formData.phonenumber}
                                                            onChange={handleChange}
                                                            placeholder="Your phone number" />
                                                        {errors.phonenumber && <small className="text-danger">{errors.phonenumber}</small>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <input type="text" className="form-control custom-input" name="link" value={formData.link}
                                                onChange={handleChange}
                                                placeholder="Instagram / LinkedIn / Website Link" />
                                            {errors.link && <small className="text-danger">{errors.link}</small>}
                                        </div>

                                        <div className="mb-3">
                                            <textarea className="form-control custom-input" name="message" placeholder="Your Message" value={formData.message}
                                                onChange={handleChange}></textarea>
                                            {errors.message && <small className="text-danger">{errors.message}</small>}
                                        </div>

                                        <button type="submit" className='contact-btn'> <span>{loading ? "Submitting..." : "Submit"}</span></button >

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <ThankYouModal open={showModal} setOpen={setShowModal} />

            </div>
            <Footer />
        </div>
    )
}

export default page
