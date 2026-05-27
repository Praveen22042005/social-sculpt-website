"use client";

import { useEffect, useRef, useState } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Marquee from "react-fast-marquee";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay';

import VerticalScrool from "../components/VerticalScrool";
import Footer from "../components/Footer";


export default function Home() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

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

  const resultsData = [
    {
      title: "Tamilpreneur",
      amount: "2,224 Membership Sales | ₹10.7L Ad Spend | 2.07X ROAS",
      image: "/tamilpreneur.png",
      imagelogo: "/Clients/tp-logo.png",
      paragraph: "Generated 2,224 membership purchases for Tamilpreneur Club through performance-driven campaigns targeting aspiring Tamil entrepreneurs. With a membership priced at ₹1,000, the campaign generated ₹22.24L in revenue against ₹10.7L in ad spend, achieving a 2.07X ROAS at a cost-efficient ₹484 per acquisition."
    },

    {
      title: "Error Makes Clever",
      amount: "19,907 Leads Generated",
      image: "/emc.png",
      imagelogo: "/Clients/client-logo-2.png",

      paragraph: "Generated 19,907 leads with a total spend of ₹2.01 lakhs, achieving a low average CPL of ₹10.15 through optimized targeting and campaign strategy. The campaigns delivered strong efficiency with 60% lead conversion and maintained a 7X ROAS, while successfully scaling lead volume without increasing acquisition costs."
    },

    {
      title: "Newroots EB5 Fund",
      amount: "350 Webinar Registrations | $3,500 Ad Spend",
      image: "/newroots.png",
      imagelogo: "/Clients/EB5.jpg",
      paragraph: "Generated 350 targeted webinar registrations by running performance-driven campaigns focused on U.S.-based visa holders. Through precise audience targeting and continuous optimization, we achieved a cost-efficient $10 per registration while attracting high-intent leads and building a scalable acquisition funnel."
    },

    {
      title: "IIM Shillong",
      amount: "358 Registrations | ₹2.01L Ad Spend | ₹526 CPR",
      image: "/iimshillong.png",
      imagelogo: "/Clients/IIMShillong.png",
      paragraph: "Generated 358 high-quality registrations for IIM Shillong through performance-driven campaigns, with ₹2.01L ad spend achieving an average CPR of ₹526 and top-performing ad sets at ₹242. Reached 1.59M users and delivered 2.79M+ impressions using high-intent targeting and continuous optimization for scalable results."
    },


  ];

  useEffect(() => {
    const rows = document.querySelectorAll<HTMLElement>(".scroll-row");

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const speed = 0.25;

      rows.forEach((row) => {
        const direction = row.dataset.direction;

        const baseOffset = direction === "right" ? -window.innerWidth : 0;

        const move =
          direction === "left"
            ? baseOffset - scrollY * speed
            : baseOffset + scrollY * speed;

        row.style.transform = `translateX(${move}px)`;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="">

      <Header />
      <div className="overflow-hidden">
        <Banner />

        {/* <PremiumServicesSection /> */}

      </div>

      <VerticalScrool />

      <div className="overflow-hidden">
        <section className="creative-section section-padding">
          <div className="container">
            <h2 className="common-heading text-white text-center mb-lg-5 mb-3 md-0" data-aos="zoom-in">Our Work Speaks<span> for Itself</span></h2>
          </div>

          <div className="pt-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-4">
                  <div className="position-relative">
                    <a href="/our-works/social-media">
                      <img src="/social-work.png" alt="" className="image-fluid" data-aos="fade-up" data-aos-delay="100" />
                    </a>

                    <div className="d-flex justify-content-center mt-4" data-aos="fade-right" data-aos-delay="100">
                      <div className="wrapper">
                        <a href="/our-works/social-media"><span>See Our Works</span></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="position-relative my-lg-0 my-5 my-md-0">
                    <a href="/our-works/performance-marketing">
                      <img src="/ads-work.png" alt="" className="img-fluid" data-aos="fade-up" data-aos-delay="200" />
                    </a>
                    <div className="d-flex justify-content-center mt-4" data-aos="fade-right" data-aos-delay="200">
                      <div className="wrapper">
                        <a href="/our-works/performance-marketing"><span>See Our Works</span></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="position-relative">
                    <a href="/our-works/video-production">
                      <img src="/video-prod.png" alt="" className="img-fluid" data-aos="fade-up" data-aos-delay="300" />
                    </a>
                    <div className="d-flex justify-content-center mt-4" data-aos="fade-right" data-aos-delay="300">
                      <div className="wrapper">
                        <a href="/our-works/video-production"><span>See Our Works</span></a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>


        </section>

        <section className="section-padding" ref={ref}>
          <div className="container">
            <h2 className="common-heading mb-4" data-aos="fade-left">Statistics</h2>

            <div className="row g-4 align-items-stretch">

              <div className="col-lg-6">
                <div className="stats-main-card" data-aos="fade-right">
                </div>
              </div>

              <div className="col-lg-6">
                <div className="ms-lg-4 ms-0 mt-lg-0 mt-4">
                  <div className="row">
                    <div className="col-lg-6 col-6">
                      <div className="about-stats" data-aos="fade-right" data-aos-delay="100" >
                        <img src="/brand.png" alt="BRANDS BUILT" />
                        <div>
                          <h3>
                            {inView && <CountUp end={50} duration={2.5} />}+
                          </h3>
                          <p>BRANDS BUILT</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-6">
                      <div className="about-stats" data-aos="fade-right" data-aos-delay="200" >
                        <img src="/campaign.png" alt="BRANDS BUILT" />
                        <div>
                          <h3>
                            {inView && <CountUp end={300} duration={2.5} />}+
                          </h3>
                          <p>CAMPAIGNS EXECUTED</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-6">
                      <div className="about-stats mt-4" data-aos="fade-right" data-aos-delay="300">
                        <img src="/client-retention.png" alt="BRANDS BUILT" />
                        <div>
                          <h3>
                            {inView && <CountUp end={75} duration={2.5} />}%
                          </h3>
                          <p>CLIENT RETENTION RATE</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-6">
                      <div className="about-stats mt-4" data-aos="fade-right" data-aos-delay="400">
                        <img src="/industries.png" alt="BRANDS BUILT" />
                        <div>
                          <h3>
                            {inView && <CountUp end={40} duration={2.5} />}+
                          </h3>
                          <p>INDUSTRIES  SERVED</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="section-padding choose-your-path">
          <div className="mx-lg-0 mx-4">
            <h2 className="common-heading text-white text-center mb-4" data-aos="zoom-in">Ways to <span> Build With Us</span></h2>
            <p className="text-center mb-3 text-white" ata-aos="zoom-in">Your personal brand is your story.</p>
            <p className="text-center mb-5 text-white" ata-aos="zoom-in">We shape it into something people connect with, believe in, and remember.</p>

          </div>

          <div className="mt-4">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="choose-your-path-card" data-aos="zoom-in" data-aos-delay="100">
                    <div className="image-wrap">
                      <img src="agency-hme.png" alt="About Social Sculpt" className="img-fluid" />
                    </div>
                    <div className="content-card">
                      <div className="icon-div" >
                        <i className="fa-solid fa-suitcase"></i>
                      </div>
                      <h3 >AGENCY</h3>
                      <p>We build and scale personal brands end-to-end, combining strategic positioning and performance-driven growth to deliver measurable results.</p>

                      <div className="wrapper mt-4 mb-3" >
                        <a href="/whoweare" className="black"><span>know more</span></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="choose-your-path-card my-lg-0 my-5" data-aos="zoom-in" data-aos-delay="200">
                    <div className="image-wrap ">
                      <img src="/academic-hme.png" alt="About Social Sculpt" className="img-fluid" />
                    </div>
                    <div className="content-card">
                      <div className="icon-div">
                        <i className="fa-solid fa-graduation-cap"></i>
                      </div>
                      <h3 >ACADEMY</h3>
                      <p>We teach you how to build and grow your personal brand with clarity, structure, and proven frameworks designed for long-term success.</p>

                      <div className="wrapper mt-4 mb-3" >
                        <a href="/academy" className="black"><span>know more</span></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="choose-your-path-card" data-aos="zoom-in" data-aos-delay="300">
                    <div className="image-wrap">
                      <img src="consulting-hme.png" alt="About Social Sculpt" className="img-fluid" />
                    </div>
                    <div className="content-card">
                      <div className="icon-div" >
                        <i className="fa-solid fa-user-group"></i>
                      </div>
                      <h3>CONSULTING</h3>
                      <p >We guide your strategy with focused insights and practical direction to help you unlock influence, authority, and <br className="break-tag"/>sustainable revenue.</p>

                      <div className="wrapper mt-4 mb-3">
                        <a href="/services/consulting" className="black"><span>know more</span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

        <section className="scroll-text-section">
          <div className="scroll-row-wrapper">
            <div className="scroll-row" data-direction="left">
              <span>
                Content Development — Digital Marketing — Personal Branding — Digital Marketing — Product Design —
              </span>
              <span>
                Growth Marketing — Product Design — Content Development — Brand Strategy —  Digital Marketing  —
              </span>
            </div>
          </div>

          <div className="scroll-row-wrapper d-lg-block d-none">
            <div className="scroll-row" data-direction="right">
              <span>
                Video Production — Growth Marketing — Brand Strategy  — Identity & Branding — Product Design —
              </span>
              <span>
                Digital Marketing — Brand Strategy — Product Design — Video Production -
              </span>
            </div>
          </div>
        </section>
      </div>

      <div className="results-section section-padding">
        <div className="container">
          <div className="results-header">
            <h2 className="text-center common-heading text-white" data-aos="zoom-in">Here Are Some Results We Have <br className="break-tag" />Achieved For Industry Leaders</h2>
          </div>

          <div className="results-cards-wrapper">
            {resultsData.map((result, index) => (
              <div
                key={index}
                className="results-card"
                style={{
                  top: `calc(150px + ${index * 30}px)`,
                  zIndex: index + 1,
                  transform:
                    typeof window !== "undefined" && window.innerWidth < 768
                      ? "none"
                      : `rotate(${index % 2 === 0 ? "1.1deg" : "-1.1deg"}) translateZ(0)`
                }}
              >
                <div className="card-image">
                  <div>
                    <img src={result.image} alt={result.title} />
                  </div>
                  {/*  <div>
                    <img src={result.image2} alt={result.title} />
                  </div>*/}
                </div>
                <div className="card-content">
                  {/* <div className="client-logo">
                    <img src={result.logo} alt={result.client} />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span>{result.client}</span>
                      <span style={{ fontSize: '0.7rem', color: '#888', letterSpacing: '0.5px' }}>{result.tagline}</span>
                    </div>
                  </div> */}
                  <div className="d-flex justify-content-between">
                    {result.title && <h3 className="card-heading">{result.title}</h3>}
                    <div>
                      {/* <img src={result.imagelogo} alt={result.title} className="result-logo"/> */}
                    </div>
                  </div>

                  <div>
                    {/* <p className="card-place">{result.place}</p>
                    <p className="card-brand">{result.brandName}</p> */}
                    {/* <p className="card-days">{result.days}</p> */}
                    <p className="card-amount">{result.amount}</p>

                    {result.paragraph && <p className="card-description mt-3">{result.paragraph}</p>}

                  </div>
                  {/* <div className="mt-lg-4">
                    <p className="card-place">{result.placeTwo}</p>
                    <p className="card-brand">{result.brandNameTwo}</p>
                    <p className="card-days">{result.daysTwo}</p>
                    <p className="card-amount">{result.amountTwo}</p>
                    {result.descriptionTwo && <p className="card-description">{result.descriptionTwo}</p>}

                  </div> */}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <div className="overflow-hidden">

        <section className="video-only-section">
          <video
            className="video-only-bg"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </section>

        <section className="Client-logo-section section-padding">
          <div className="container">
            <h2 className="common-heading text-black mb-4 text-center" data-aos="fade-down">Our Clients</h2>
            <p className="text-center text-black" data-aos="fade-up">We partner with brands that dare to think differently. From strategy to execution, we help our<br className="break-tag" /> clients turn ideas into powerful digital experiences that resonate, perform, and scale.</p>
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

                className="logo-swiper continuous-swiper logo-marquee-secondrow"
              >
                <div className="">
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
        </section>

      </div>
      <Footer />

    </div>
  );
}
