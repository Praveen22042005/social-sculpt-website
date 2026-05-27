'use client'
import Footer from '@/src/components/Footer';
import Header from '@/src/components/Header';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
export const dynamic = "force-static";



import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay';

const page = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    const our_philosophy_array = [
        "Purpose Driven",
        "Human First Marketing",
        "Creativity backed by clear strategy",
        "Value Over Virality",
        "Every brand has a voice , find it and amplify it",
        "Strong brands are built, not rushed",
        "Growth With Integrity",
        "Build brands with purpose, not noise",
        "Emotion Backed Creativity",
        "Consistency Builds Trust",
        "Earn attention by delivering real value",
        "Impact Over Impressions",
    ];

    const our_philosophy = [...our_philosophy_array, ...our_philosophy_array];

    const images = ["/anivessary/about-1.jpeg", "/anivessary/about-2.jpeg", "/anivessary/about-3.jpeg", "/anivessary/about-4.jpeg"
        , "/anivessary/about-5.jpeg", "/anivessary/about-6.jpeg", "/anivessary/about-7.jpeg", "/anivessary/about-8.jpeg", "/anivessary/about-9.jpeg", "/anivessary/about-10.jpeg", "/anivessary/about-11.jpeg", "/anivessary/about-12.jpeg", "/anivessary/about-14.jpeg"];


    const column1 = images.filter((_, i) => i % 3 === 0);
    const column2 = images.filter((_, i) => i % 3 === 1);
    const column3 = images.filter((_, i) => i % 3 === 2);


    const loopImages1 = [...column1, ...column1];
    const loopImages2 = [...column2, ...column2];
    const loopImages3 = [...column3, ...column3];

    const clientlogofirstrow = [
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

    const clientlogosecondrow = [
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

    return (
        <div>

            <Header />

            <div className='overflow-hidden'>

                <section className="common-banner-section about-us">
                    <div className="container">
                        <h2 className="common-heading-banner text-start">
                            Who we are
                        </h2>
                    </div>
                </section>

                <div className="company_vibe_parent_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 my-auto">
                                <div
                                    className="company_vibes_left "
                                >
                                    <h2 className="common-heading" data-aos="fade-right" data-aos-delay="200">The Thinking Behind the Brand</h2>
                                    <div className="my-4" data-aos="fade-right" data-aos-delay="400">
                                        <p>Every great brand begins with a powerful story.</p>
                                        <ul>
                                            <li>
                                                <p>
                                                    We believe entrepreneurs deserve a platform to lead, grow, and create real impact.
                                                </p>
                                            </li>
                                            <li>
                                                <p>Our vision is to build an ecosystem where ambitious individuals stand out with clarity and purpose.</p>
                                            </li>
                                            <li>
                                                <p>
                                                    Our mission is to shape authentic digital brands that drive meaningful success.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    We stand for authenticity, growth, and the courage to build what truly reflects you.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Real influence is built with intention, consistency, and individuality.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="wrapper mt-4">
                                        <a href="/contact-us" className='black'><span>Contact us <i className="fa-solid fa-arrow-right  ms-2"></i></span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="vertical-carousel-container">

                                    <div className="blur-top"></div>

                                    <div className="carousel-column top-to-bottom">
                                        {loopImages1.map((image, index) => (
                                            <img
                                                key={`col1-${index}`}
                                                src={image}
                                                alt={`Image ${index + 1}`}
                                            />
                                        ))}
                                    </div>

                                    <div className="carousel-column bottom-to-top">
                                        {loopImages2.map((image, index) => (
                                            <img
                                                key={`col2-${index}`}
                                                src={image}
                                                alt={`Image ${index + 1}`}
                                            />
                                        ))}
                                    </div>

                                    <div className="carousel-column top-to-bottom">
                                        {loopImages3.map((image, index) => (
                                            <img
                                                key={`col3-${index}`}
                                                src={image}
                                                alt={`Image ${index + 1}`}
                                            />
                                        ))}
                                    </div>

                                    <div className="blur-bottom"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="culture-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className='' data-aos="fade-left">
                                    <div className="culture-eyebrow">
                                        <div>
                                            <span className="ds-badge">
                                                Our Core Values
                                            </span>
                                        </div>
                                    </div>

                                    <h2 className="culture-heading">
                                        THE SCULPT FRAMEWORK
                                    </h2>

                                    <h3>How We Shape Influence</h3>

                                    <div className='mt-4 me-lg-5'>
                                        <p className='text-black text-justify'>Our framework combines strategic positioning, creative storytelling, and performance-driven growth to build personal brands that are clear, credible, and built to scale.</p>
                                        <p className='mt-3 text-black'>We start by defining what makes you unique and positioning it in a way your audience instantly understands.</p>
                                        <p className='mt-3 text-black'>Then we translate that clarity into consistent content, strong visual presence, and structured growth systems.</p>
                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-6">

                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className='academic-page-who' data-aos="fade-right" data-aos-delay="100">
                                            <div className="feature-card-service">
                                                <div className="card-body">
                                                    <div className="icon">
                                                        <i className="fa-solid fa-bullseye"></i>
                                                    </div>
                                                    <h3>Positioning Strategy</h3>
                                                    <p>
                                                        We help founders define what they stand for and how they stand apart in a crowded digital world.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className='academic-page-who' data-aos="fade-right" data-aos-delay="100">
                                            <div className="feature-card-service">
                                                <div className="card-body">
                                                    <div className="icon">
                                                        <i className="fa-solid fa-pen-nib"></i>
                                                    </div>
                                                    <h3>Narrative & Messaging</h3>
                                                    <p>
                                                        We craft authentic stories and clear messaging that reflect who you are and resonate with the right audience.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='mt-lg-4 mt-0'>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className='academic-page-who' data-aos="fade-right" data-aos-delay="100">
                                                <div className="feature-card-service">
                                                    <div className="card-body">
                                                        <div className="icon">
                                                            <i className="fa-solid fa-layer-group"></i>
                                                        </div>

                                                        <h3>Content & Presence</h3>
                                                        <p>
                                                            We design structured content systems that keep your brand visible, relevant, and consistent across platforms.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className='academic-page-who' data-aos="fade-right" data-aos-delay="100">
                                                <div className="feature-card-service">
                                                    <div className="card-body">
                                                        <div className="icon">
                                                            <i className="fa-solid fa-chart-line"></i>
                                                        </div>

                                                        <h3>Growth & Opportunity</h3>
                                                        <p>
                                                            We turn visibility into real outcomes by building influence that attracts trust, partnerships, and opportunities.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className='culture-grid culture-right'>
                                    <div className="row ">
                                        <div className="col-md-4">
                                            <div className='culture-item'>
                                                <div className="culture-icon">✒️</div>
                                                <h4>Shape</h4>
                                                <p>We believe every brand deserves the clarity to define its core identity and build a foundation that truly reflects who they are.</p>
                                            </div>
                                        </div>

                                        <div className="col-md-4 ">
                                            <div className='culture-item culture-divider'>
                                                <div className="culture-icon">🎖️</div>
                                                <h4>Sharpen</h4>
                                                <p>We believe positioning should be intentional, strategic, and refined so your brand stands distinct in a crowded market.</p>
                                            </div>
                                        </div>

                                        <div className="col-md-4 ">
                                            <div className='culture-item culture-divider'>
                                                <div className="culture-icon">✌️</div>
                                                <h4>Share</h4>
                                                <p>We believe showing up with purpose and consistency is what turns visibility into meaningful connection.</p>
                                            </div>
                                        </div>

                                        <div className="col-md-4 ">
                                            <div className='culture-item culture-divider-top mob-padding'>
                                                <div className="culture-icon">⭐</div>
                                                <h4>Strengthen</h4>
                                                <p>We believe credibility is built through trust, proof, and performance that speaks louder than promises.</p>
                                            </div>
                                        </div>

                                        <div className="col-md-4 ">
                                            <div className='culture-item culture-divider culture-divider-top'>
                                                <div className="culture-icon">📊</div>
                                                <h4>Scale</h4>
                                                <p>We believe growth should be strategic and sustainable, expanding your influence without losing your essence.</p>
                                            </div>
                                        </div>

                                        <div className="col-md-4 ">
                                            <div className='culture-item culture-divider-top culture-divider'>
                                                <div className="culture-icon">💡</div>
                                                <h4>Sustain</h4>
                                                <p>We believe long term impact comes from staying relevant, adaptable, and deeply aligned with your vision.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>

                <section className='founder-talk-section section-padding-bottom mt-lg-5'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 my-auto">
                                <div className='founder-talk-left me-lg-4 me-0' data-aos="fade-right">

                                    <h2 className='common-heading' >Meet the Founder</h2>

                                    <p className='my-4 name'>Arunachalam S</p>

                                    <div >
                                        <p className='mt-3 '>He didn’t transition from designer to founder. He evolved.</p>
                                        <p className='my-3'>This company wasn’t born in a boardroom. It was built at a design desk.</p>
                                        <p className=''>He started as a design intern, mastering visual communication and understanding how brands truly connect. But design taught him more than aesthetics. It taught him psychology, perception, and positioning.</p>
                                        <p className='mt-4'>An entrepreneurial leap into a print on demand startup sharpened that understanding with real world lessons in resilience, consistency, and personal branding. That is when he realised visibility alone is not growth. Strategy is.</p>
                                        <p className='my-3'>Social Sculpt was built from that realisation. Not as just another creative service, but as a strategic platform where creativity meets clarity.</p>
                                        <p className='my-3'>Today, as the Founder of Social Sculpt, he helps visionary entrepreneurs turn identity into influence and visibility into meaningful opportunity.</p>
                                    </div>

                                    <div className=''>
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
                                <div className='founder-talk-right' data-aos="fade-left">

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

                <section className="Client-logo-section section-padding-bottom mt-lg-5">
                    <div className="container">
                        <div data-aos="zoom-in">
                            <h2 className="common-heading text-black mb-4 text-center">Our Clients</h2>
                            <p className="text-center text-black">We partner with brands that dare to think differently. From strategy to execution,<br className="break-tag" /> we help our clients turn ideas into powerful digital experiences that resonate, perform, and scale.</p>
                        </div>
                        <div className="logo-marquee-mask mt-5">
                            <Swiper
                                modules={[Autoplay]}
                                slidesPerView={5}
                                spaceBetween={30}
                                loop={true}
                                speed={6000}
                                autoplay={{
                                    delay: 0,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: false,
                                }}
                                allowTouchMove={false}
                                grabCursor={false}
                                freeMode={true}


                                breakpoints={{
                                    320: { slidesPerView: 2, spaceBetween: 10 },
                                    640: { slidesPerView: 3, spaceBetween: 20 },
                                    1024: { slidesPerView: 5, spaceBetween: 30 },
                                }}

                                className="logo-swiper reverse continuous-swiper"
                            >
                                <div className="client-logo-main">
                                    <Swiper >
                                        {clientlogofirstrow.map((logo, i) => (
                                            <SwiperSlide key={`blur-${i}`} className="logo-slide">
                                                <img src={logo} />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </Swiper>

                            <div className='mt-5'>
                                <Swiper
                                    modules={[Autoplay]}
                                    slidesPerView={5}
                                    spaceBetween={30}
                                    loop={true}
                                    speed={6000}
                                    autoplay={{
                                        delay: 0,
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: false,
                                        reverseDirection: true
                                    }}
                                    allowTouchMove={false}
                                    grabCursor={false}
                                    freeMode={true}


                                    breakpoints={{
                                        320: { slidesPerView: 2, spaceBetween: 10 },
                                        640: { slidesPerView: 3, spaceBetween: 20 },
                                        1024: { slidesPerView: 5, spaceBetween: 30 },
                                    }}

                                    className="logo-swiper continuous-swiper mt-5"
                                >
                                    <div className="logo-marquee-main">
                                        <Swiper >
                                            {clientlogosecondrow.map((logo, i) => (
                                                <SwiperSlide key={`main-${i}`} className="logo-slide">
                                                    <img src={logo} />
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>
                                </Swiper>
                            </div>

                        </div>
                    </div>
                </section>

                <div className="vertical_corosel_parent_section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="vertical_marque blur-effect">
                                    <h4 className="text-center">
                                        ‘OUR SCULPTING ALLIES’{" "}
                                    </h4>
                                    <ul className="slider">
                                        {our_philosophy.map((item, index) => (
                                            <li>
                                                <p>{item} </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default page
