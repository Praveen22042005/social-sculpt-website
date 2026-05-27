import Footer from '@/src/components/Footer'
import Header from '@/src/components/Header'
import React from 'react'

const page = () => {
    return (
        <div >
            <Header />

            <div className='overflow-hidden'>

                <section className="academy-hero-wrap">
                    <div className="container">
                        <div className="academy-hero-inner m-0">

                            <div className="academy-hero-badge">
                                <span className="academy-hero-badge-dot"></span>
                                <span className="academy-hero-badge-text">Social Sculpt Academy</span>
                            </div>

                            <h1 className="academy-hero-title">
                                Where Human Creativity<br className='break-tag' />
                                Meets <span className="academy-hero-title-yellow">AI Power</span>
                            </h1>

                            <div className='my-5'>
                                <p className="academy-hero-desc">
                                    Master modern marketing and build a powerful personal brand using AI-driven systems.
                                </p>

                                <p className="academy-hero-desc">
                                    Learn how to grow brands, create high-impact content, and build authority in the digital economy.
                                </p>
                            </div>

                            <p className="academy-hero-tagline">Programs Designed For The Future Marketer.</p>

                            <div className="academy-hero-ctas">
                                <a href="#programs" className="academy-hero-btn-primary">
                                    Explore Programs
                                    <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </a>
                                <a href="#brochure" className="academy-hero-btn-secondary">
                                    <svg viewBox="0 0 24 24"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17" /></svg>
                                    Download Brochure
                                </a>
                            </div>

                        </div>
                    </div>

                </section>


                <section className="academy-who section-padding">
                    <div className="container">
                        <div className="row align-items-start g-5">

                            <div className="col-lg-7">
                                <p className="academy-label">Who We Are</p>
                                <h2 className="academy-who-heading">
                                    Built by Marketers.<br className='break-tag' />
                                    For the <mark>Next Generation</mark><br className='break-tag' />
                                    of Marketers.
                                </h2>

                                <div className="academy-who-divider"></div>

                                <div className="academy-who-body">

                                    <p className="academy-who-text">
                                        Social Sculpt Academy is the learning arm of Social Sculpt - a new-age personal branding and growth marketing agency built on <strong className='blue'>creativity, consistency, and bold thinking.</strong>
                                    </p>

                                    <p className="academy-who-text">
                                        Founded by <strong className='blue'>Arunachalam S</strong>, a Chennai-born creator and entrepreneur, Social Sculpt was born from real struggles, real experiments, and real wins.
                                    </p>

                                    <p className="academy-who-text">
                                        From building brands to scaling content, Arunachalam's journey is rooted in one belief:
                                    </p>

                                    <div className="academy-who-belief">
                                        <p className="academy-who-belief-text">
                                            Marketing is not theory. It's execution.
                                        </p>
                                    </div>

                                    <p className="academy-who-closing">
                                        This academy is an extension of that belief -<br className='break-tag' />
                                        where you don't just learn… <strong className='blue'>you build, apply, and prove your skills.</strong>
                                    </p>

                                </div>
                            </div>

                            <div className="col-lg-5">
                                <div className="academy-who-right">

                                    <div>
                                        <img src="../arun.jpg" alt="About Social Sculpt" className="img-fluid" />
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

                                    {/* <div className="academy-who-origin">
                                        <div className="academy-who-origin-icon">
                                            <svg viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                        </div>
                                        <p className="academy-who-origin-text">
                                            Chennai, Tamil Nadu
                                            <span>Where Social Sculpt was born</span>
                                        </p>
                                    </div> */}

                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                <section className="academy-method-section section-padding-bottom">
                    <div className="container">

                        <p className="academy-label">Our Methodology</p>

                        <h2 className="academy-method-title">We Don't Teach.<br className='break-tag' />We <span>Build You.</span></h2>


                        <div className='mt-4 pt-4'>
                            <div className="row g-0 academy-method-intro ">
                                <div className="col-12 col-md-6 academy-method-intro-left">
                                    <p>Most courses give you information. We give you transformation.</p>
                                </div>
                            </div>
                        </div>

                        <div className="academy-who-belief my-4">
                            <p className="academy-who-belief-text">
                                Our methodology is built on 3 powerful pillars:
                            </p>
                        </div>

                        <div className='mt-5'>
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
                        </div>

                    </div>
                </section>


                <section className='section-padding bg-black technologies-logo'>
                    <div className='container'>
                        <h2 className='text-center text-white common-heading'>Learn the technologies like</h2>
                        <div className='mt-5 digital-tech-logo'>
                            <div className='row justify-content-center'>
                                <div className='col-lg-2 col-4 my-auto'>
                                    <div className=''>
                                        <img src="/digital-course/google.webp" alt="Digital Marketing" className="img-fluid" />
                                    </div>
                                </div>
                                <div className='col-lg-2 col-4 my-auto'>
                                    <div className=''>
                                        <img src="/digital-course/metaa.webp" alt="Digital Marketing" className="img-fluid" />
                                    </div>
                                </div>
                                <div className='col-lg-2 col-4 my-auto'>
                                    <div className=''>
                                        <img src="/digital-course/canva.webp" alt="Digital Marketing" className="img-fluid" />
                                    </div>
                                </div>
                                <div className='col-lg-2 col-4 my-auto'>
                                    <div className='mt-lg-0 mt-5'>
                                        <img src="/digital-course/metaa.webp" alt="Digital Marketing" className="img-fluid" />
                                    </div>
                                </div>
                                <div className='col-lg-2 col-4 my-auto'>
                                    <div className='mt-5'>
                                        <img src="/digital-course/canva.webp" alt="Digital Marketing" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-5 digital-tech-logo'>
                            <div className='row justify-content-center'>
                                <div className='col-lg-2 col-4 my-auto'>
                                    <div className=''>
                                        <img src="/digital-course/google.webp" alt="Digital Marketing" className="img-fluid" />
                                    </div>
                                </div>
                                <div className='col-lg-2 col-4 my-auto'>
                                    <div className=''>
                                        <img src="/digital-course/metaa.webp" alt="Digital Marketing" className="img-fluid" />
                                    </div>
                                </div>
                                <div className='col-lg-2 col-4 my-auto'>
                                    <div className=''>
                                        <img src="/digital-course/canva.webp" alt="Digital Marketing" className="img-fluid" />
                                    </div>
                                </div>
                                <div className='col-lg-2 col-4 my-auto'>
                                    <div className='mt-lg-0 mt-5'>
                                        <img src="/digital-course/metaa.webp" alt="Digital Marketing" className="img-fluid" />
                                    </div>
                                </div>
                                <div className='col-lg-2 col-4 my-auto'>
                                    <div className='mt-5'>
                                        <img src="/digital-course/canva.webp" alt="Digital Marketing" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-5 digital-tech-logo'>
                            <div className='row justify-content-center'>
                                <div className='col-lg-2 col-4 my-auto'>
                                    <div className=''>
                                        <img src="/digital-course/google.webp" alt="Digital Marketing" className="img-fluid" />
                                    </div>
                                </div>
                                <div className='col-lg-2 col-4 my-auto'>
                                    <div className=''>
                                        <img src="/digital-course/metaa.webp" alt="Digital Marketing" className="img-fluid" />
                                    </div>
                                </div>
                                <div className='col-lg-2 col-4 my-auto'>
                                    <div className=''>
                                        <img src="/digital-course/canva.webp" alt="Digital Marketing" className="img-fluid" />
                                    </div>
                                </div>
                                <div className='col-lg-2 col-4 my-auto'>
                                    <div className='mt-lg-0 mt-5'>
                                        <img src="/digital-course/metaa.webp" alt="Digital Marketing" className="img-fluid" />
                                    </div>
                                </div>
                                <div className='col-lg-2 col-4 my-auto'>
                                    <div className='mt-5'>
                                        <img src="/digital-course/canva.webp" alt="Digital Marketing" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className='mt-5'>
                                <h2 className='text-center text-white common-heading pt-5'>Learn the AI Tools like</h2>
                            </div>
                            <div className='mt-5 digital-tech-logo'>
                                <div className='row justify-content-center'>
                                    <div className='col-lg-2 col-4 my-auto'>
                                        <div className=''>
                                            <img src="/digital-course/google.webp" alt="Digital Marketing" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className='col-lg-2 col-4 my-auto'>
                                        <div className=''>
                                            <img src="/digital-course/metaa.webp" alt="Digital Marketing" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className='col-lg-2 col-4 my-auto'>
                                        <div className=''>
                                            <img src="/digital-course/canva.webp" alt="Digital Marketing" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className='col-lg-2 col-4 my-auto'>
                                        <div className='mt-lg-0 mt-5'>
                                            <img src="/digital-course/metaa.webp" alt="Digital Marketing" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className='col-lg-2 col-4 my-auto'>
                                        <div className='mt-5'>
                                            <img src="/digital-course/canva.webp" alt="Digital Marketing" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-5 digital-tech-logo'>
                                <div className='row justify-content-center'>
                                    <div className='col-lg-2 col-4 my-auto'>
                                        <div className=''>
                                            <img src="/digital-course/google.webp" alt="Digital Marketing" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className='col-lg-2 col-4 my-auto'>
                                        <div className=''>
                                            <img src="/digital-course/metaa.webp" alt="Digital Marketing" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className='col-lg-2 col-4 my-auto'>
                                        <div className=''>
                                            <img src="/digital-course/canva.webp" alt="Digital Marketing" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className='col-lg-2 col-4 my-auto'>
                                        <div className='mt-lg-0 mt-5'>
                                            <img src="/digital-course/metaa.webp" alt="Digital Marketing" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className='col-lg-2 col-4 my-auto'>
                                        <div className='mt-5'>
                                            <img src="/digital-course/canva.webp" alt="Digital Marketing" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='d-flex justify-content-center mt-lg-5'>
                            <div className="wrapper mt-5 mb-3">
                                <a href="/" className="white"><span>know more</span></a>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="academy-curriculum section-padding">
                    <div className="container">

                        <p className="academy-label"> Course Curriculum</p>
                        <h2 className="academy-curriculum-heading">
                            A System Designed to Make You<br className='break-tag' />
                            <mark>Job-Ready in 8 Weeks</mark>
                        </h2>

                        <div className="academy-phase">
                            <div className="academy-phase-header">
                                <span className="academy-phase-badge academy-phase-badge-dark">Phase 01</span>
                                <span className="academy-phase-meta">Weeks 1–4 · Foundation of Modern Marketing</span>
                            </div>

                            <div className="academy-phase-one">
                                <p className="academy-phase-one-desc">
                                    Build a deep understanding of how marketing actually works in today's world.
                                </p>
                                <p className="academy-phase-one-learn">You'll Learn</p>
                                <ul className="academy-phase-one-list">
                                    <li><span className="academy-phase-list-dot"></span>How marketing has evolved (and what works today)</li>
                                    <li><span className="academy-phase-list-dot"></span>Consumer psychology & attention dynamics</li>
                                    <li><span className="academy-phase-list-dot"></span>Content strategy that converts</li>
                                    <li><span className="academy-phase-list-dot"></span>Brand positioning & storytelling</li>
                                    <li><span className="academy-phase-list-dot"></span>AI-powered marketing workflows</li>
                                </ul>
                                <div className="academy-phase-one-cta">
                                    <p className="academy-phase-one-cta-text">
                                        <span>This is where you stop guessing…</span> and start thinking like a marketer.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="academy-tracks-header">
                            <div className='academy-tracks-header-inner'>
                                <span className="academy-tracks-phase-badge">Phase 02</span>
                                <span className="academy-phase-meta ms-4">Weeks 5–8</span>
                            </div>
                        </div>

                        <div className="academy-tracks-grid">

                            <div className="academy-track-card academy-track-card-a">
                                <span className="academy-track-badge academy-track-badge-a">Track A</span>
                                <h3 className="academy-track-title academy-track-title-a">Growth Marketing</h3>
                                <p className="academy-track-desc academy-track-desc-a">
                                    Master the art of scaling brands and driving measurable results.
                                </p>
                                <p className="academy-track-learn academy-track-learn-a">You'll Learn</p>
                                <ul className="academy-track-list academy-track-list-a">
                                    <li><span className="academy-track-dot-a"></span>Social media growth systems</li>
                                    <li><span className="academy-track-dot-a"></span>SEO fundamentals & ranking strategies</li>
                                    <li><span className="academy-track-dot-a"></span>Paid ads (Meta & Google basics)</li>
                                    <li><span className="academy-track-dot-a"></span>Funnel building & conversion thinking</li>
                                </ul>
                                <div className="academy-track-footer">
                                    <div className="academy-track-footer-line-a"></div>
                                    <p className="academy-track-footer-text academy-track-footer-text-a">
                                        Perfect for aspiring marketers, freelancers, and performance-driven professionals.
                                    </p>
                                </div>
                            </div>

                            <div className="academy-track-card academy-track-card-b">
                                <span className="academy-track-badge academy-track-badge-b">Track B</span>
                                <h3 className="academy-track-title academy-track-title-b">Personal Branding</h3>
                                <p className="academy-track-desc academy-track-desc-b">
                                    Turn yourself into a brand people trust, follow, and buy from.
                                </p>
                                <p className="academy-track-learn academy-track-learn-b">You'll Learn</p>
                                <ul className="academy-track-list academy-track-list-b">
                                    <li><span className="academy-track-dot-b"></span>Personal brand positioning</li>
                                    <li><span className="academy-track-dot-b"></span>LinkedIn & Instagram growth strategies</li>
                                    <li><span className="academy-track-dot-b"></span>Content creation frameworks</li>
                                    <li><span className="academy-track-dot-b"></span>Monetization systems</li>
                                </ul>
                                <div className="academy-track-footer">
                                    <div className="academy-track-footer-line-b"></div>
                                    <p className="academy-track-footer-text academy-track-footer-text-b">
                                        Perfect for creators, founders, and professionals who want visibility and authority.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>


                <section className="academy-intern section-padding">
                    <div className="container">

                        <div className="row align-items-start g-5">

                            <div className="col-lg-7">
                                <p className="academy-intern-label">Paid Internship Opportunity</p>
                                <h2 className="academy-intern-heading">
                                    Perform. Get Selected.<br className='break-tag' />
                                    <span>Work With Us.</span>
                                </h2>

                                <div className="academy-intern-divider"></div>

                                <p className="academy-intern-intro">This is where things get real.</p>
                                <p className="academy-intern-intro">
                                    <strong>Top performers from each batch</strong> will be selected for a
                                    <strong> 4-week paid internship</strong> with Social Sculpt.
                                </p>

                                <p className="academy-intern-get-label">You'll Get</p>

                                <div className="academy-intern-perks">
                                    <div className="academy-intern-perk">
                                        <span className="academy-intern-perk-dot"></span>
                                        <p className="academy-intern-perk-text">Real client projects</p>
                                    </div>
                                    <div className="academy-intern-perk">
                                        <span className="academy-intern-perk-dot"></span>
                                        <p className="academy-intern-perk-text">Hands-on execution experience</p>
                                    </div>
                                    <div className="academy-intern-perk">
                                        <span className="academy-intern-perk-dot"></span>
                                        <p className="academy-intern-perk-text">Direct mentorship from our team</p>
                                    </div>
                                    <div className="academy-intern-perk">
                                        <span className="academy-intern-perk-dot"></span>
                                        <p className="academy-intern-perk-text">A strong boost to your career</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-5">
                                <div className="academy-intern-right">

                                    <div className="academy-intern-earned-card">
                                        <span className="academy-intern-earned-tag">Internship</span>
                                        <p className="academy-intern-earned-text">
                                            This is not<br className='break-tag' />guaranteed.<br className='break-tag' />It's earned.
                                        </p>
                                        <p className="academy-intern-earned-sub">
                                            And that's what makes it valuable.
                                        </p>
                                    </div>

                                    <div className="academy-intern-meta-card">
                                        <div className="academy-intern-meta-icon">
                                            <svg viewBox="0 0 24 24">
                                                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <p className="academy-intern-meta-text">
                                            4-Week Paid Internship
                                            <span>Selected from top batch performers</span>
                                        </p>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className="academy-intern-closing">
                            <p className="academy-intern-closing-text">
                                This is not guaranteed. It's earned.<br className='break-tag' />
                                <strong>And that's what makes it valuable.</strong>
                            </p>
                            <span className="academy-intern-closing-pill">Perform → Get Selected → Work With Us</span>
                        </div>

                    </div>
                </section>



                <section className="academy-cta">
                    <div className="container">

                        <div className="academy-cta-inner">

                            <p className="academy-label">Final CTA</p>

                            <h2 className="academy-cta-heading">
                                Your Marketing Career<br className='break-tag' />
                                <mark>Starts Here.</mark>
                            </h2>

                            <p className="academy-cta-sub">
                                If you're serious about building skills, creating impact, and becoming irreplaceable in the digital world…
                            </p>

                            <p className="academy-cta-moment">This is your moment.</p>

                            <a href="#" className="academy-cta-btn">
                                Apply Now →
                                <span className="academy-cta-btn-highlight">Become Job-Ready in 8 Weeks</span>
                            </a>

                            <div className="academy-cta-urgency">
                                <span className="academy-cta-urgency-item">Limited Seats</span>
                                <span className="academy-cta-urgency-dot"></span>
                                <span className="academy-cta-urgency-item">High Expectations</span>
                                <span className="academy-cta-urgency-dot"></span>
                                <span className="academy-cta-urgency-item">Real Transformation</span>
                            </div>

                        </div>

                        <div className="academy-cta-strip">

                            <div className="academy-cta-strip-item">
                                <div className="academy-cta-strip-icon">
                                    <svg viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <p className="academy-cta-strip-title">8 Weeks</p>
                                <p className="academy-cta-strip-sub">Job-Ready Program</p>
                            </div>

                            <div className="academy-cta-strip-item">
                                <div className="academy-cta-strip-icon">
                                    <svg viewBox="0 0 24 24"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <p className="academy-cta-strip-title">Limited Seats</p>
                                <p className="academy-cta-strip-sub">Per Batch</p>
                            </div>

                            <div className="academy-cta-strip-item">
                                <div className="academy-cta-strip-icon">
                                    <svg viewBox="0 0 24 24"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                                </div>
                                <p className="academy-cta-strip-title">Real Transformation</p>
                                <p className="academy-cta-strip-sub">Not Just a Certificate</p>
                            </div>

                        </div>

                    </div>
                </section>


                <section className="academy-shift section-padding">
                    <div className="container">

                        <div className="academy-shift-top">
                            <p className="academy-label">The Shift</p>
                            <h2 className="academy-shift-heading">
                                The Future of Marketing<br className='break-tag' />
                                Has <mark>Changed</mark>
                            </h2>
                        </div>

                        <div className="row g-5 align-items-start">

                            <div className="col-lg-6">
                                <div className="academy-shift-body">
                                    <p className="academy-shift-text">
                                        Marketing is no longer about simply posting content.
                                    </p>
                                    <p className="academy-shift-text">
                                        It's about <strong>understanding people, creating meaningful connections,</strong> and using technology intelligently.
                                    </p>
                                    <p className="academy-shift-text">
                                        Artificial intelligence is transforming how marketing works, but it will not replace marketers.
                                    </p>
                                    <p className="academy-shift-text">
                                        The marketers who understand <strong>strategy, creativity, and AI</strong> will lead the future.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="academy-shift-closing">
                                    <div className="academy-shift-closing-bar"></div>
                                    <p className="academy-shift-closing-text">
                                        Social Sculpt Academy was built to<br className='break-tag' />
                                        <span>prepare you for that future.</span>
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                <section className="academy-diff py-5">
                    <div className="container">

                        <div className="academy-diff-top">
                            <p className="academy-diff-label">What Sets Us Apart</p>
                            <h2 className="academy-diff-heading">
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
                                    <p className="academy-diff-we-text">Teach thinking.</p>
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
                                    <p className="academy-diff-we-text">Teach how to build influence.</p>
                                </div>
                            </div>

                        </div>

                        <p className="academy-diff-combine-label">At Social Sculpt Academy, you learn how to combine</p>

                        <div className="academy-diff-pillars">

                            <div className="academy-diff-pillar">
                                <div className="academy-diff-pillar-num">01</div>
                                <p className="academy-diff-pillar-title">Human Understanding</p>
                            </div>

                            <div className="academy-diff-pillar">
                                <div className="academy-diff-pillar-num">02</div>
                                <p className="academy-diff-pillar-title">Strategic Thinking</p>
                            </div>

                            <div className="academy-diff-pillar">
                                <div className="academy-diff-pillar-num">03</div>
                                <p className="academy-diff-pillar-title">AI Leverage</p>
                            </div>

                        </div>

                        <div className="academy-diff-closing">
                            <p className="academy-diff-closing-text">
                                This is what creates powerful marketers<br className='break-tag' />and industry leaders.
                            </p>
                            <div className="academy-diff-closing-icon">
                                <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="academy-program-section section-padding">
                    <div className="container">

                        <p className="academy-label">Our Program</p>

                        <div className="row align-items-start mb-5">
                            <div className="col-12 col-md-6 mb-4 mb-md-0">
                                <h2 className="academy-program-title">
                                    Vibe Marketing<br className='break-tag' /><span>with AI</span>
                                </h2>
                            </div>
                            <div className="col-12 col-md-6 academy-program-desc pt-md-2">
                                <div className="academy-divider"></div>
                                <p>Learn how modern brands grow in the attention economy. This program teaches you how to build brand strategies, design content systems, and scale growth using both organic and paid marketing.</p>
                            </div>
                        </div>

                        <span className="academy-what-label">What You Will Learn</span>

                        <div className="row g-0 academy-split-card">
                            <div className="col-12 col-md-6 academy-learn-left">
                                <p className="academy-learn-label">Skills You Build</p>
                                <ul className="academy-learn-list">
                                    <li>
                                        <span className="academy-bullet">
                                            <svg viewBox="0 0 10 10" fill="none"><polyline points="2,5 4,7.5 8,3" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                        </span>
                                        Build strong brand positioning
                                    </li>
                                    <li>
                                        <span className="academy-bullet">
                                            <svg viewBox="0 0 10 10" fill="none"><polyline points="2,5 4,7.5 8,3" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                        </span>
                                        Understand audience psychology
                                    </li>
                                    <li>
                                        <span className="academy-bullet">
                                            <svg viewBox="0 0 10 10" fill="none"><polyline points="2,5 4,7.5 8,3" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                        </span>
                                        Create content systems that attract attention
                                    </li>
                                    <li>
                                        <span className="academy-bullet">
                                            <svg viewBox="0 0 10 10" fill="none"><polyline points="2,5 4,7.5 8,3" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                        </span>
                                        Design social media growth strategies
                                    </li>
                                    <li>
                                        <span className="academy-bullet">
                                            <svg viewBox="0 0 10 10" fill="none"><polyline points="2,5 4,7.5 8,3" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                        </span>
                                        Capture demand using search marketing
                                    </li>
                                    <li>
                                        <span className="academy-bullet">
                                            <svg viewBox="0 0 10 10" fill="none"><polyline points="2,5 4,7.5 8,3" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                        </span>
                                        Run paid campaigns that drive results
                                    </li>
                                    <li>
                                        <span className="academy-bullet">
                                            <svg viewBox="0 0 10 10" fill="none"><polyline points="2,5 4,7.5 8,3" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                        </span>
                                        Use AI tools to accelerate marketing execution
                                    </li>
                                </ul>
                            </div>

                            <div className="col-12 col-md-6 academy-learn-right">
                                <div>
                                    <p className="academy-outcome-label">Outcome</p>
                                    <p className="academy-outcome-text">Students graduate with the ability to build and execute modern marketing strategies.</p>
                                </div>
                                <div className="academy-outcome-badge">
                                    <p>This program is built around real execution — not just theory. Every skill is applied, tested, and refined through hands-on work.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="academy-exp-section py-5">
                    <div className="container">

                        <p className="academy-label">What You Will Experience</p>

                        <div className="row align-items-start mb-0">
                            <div className="col-12 col-md-6 mb-4 mb-md-0">
                                <h2 className="academy-exp-title">Designed for<br className='break-tag' /><span>Real-World</span><br className='break-tag' />Execution.</h2>
                            </div>
                            <div className="col-12 col-md-6 pt-md-2">
                                <div className="academy-exp-divider"></div>
                                <p className="academy-exp-desc">Social Sculpt Academy is designed for real-world execution. Students experience a structured learning environment that focuses on practical application.</p>
                            </div>
                        </div>

                        <div className="row g-0 academy-exp-grid">
                            <div className="col-12 col-md-6 academy-exp-left">
                                <p className="academy-exp-left-label">Program Includes</p>
                                <div className="academy-exp-items">
                                    <div className="academy-exp-item">
                                        <div className="academy-exp-num">01</div>
                                        <div className="academy-exp-item-text">Structured recorded lessons</div>
                                    </div>
                                    <div className="academy-exp-item">
                                        <div className="academy-exp-num">02</div>
                                        <div className="academy-exp-item-text">Weekly live mentorship sessions</div>
                                    </div>
                                    <div className="academy-exp-item">
                                        <div className="academy-exp-num">03</div>
                                        <div className="academy-exp-item-text">Practical assignments</div>
                                    </div>
                                    <div className="academy-exp-item">
                                        <div className="academy-exp-num">04</div>
                                        <div className="academy-exp-item-text">Real-world marketing projects</div>
                                    </div>
                                    <div className="academy-exp-item">
                                        <div className="academy-exp-num">05</div>
                                        <div className="academy-exp-item-text">Portfolio and case study development</div>
                                    </div>
                                    <div className="academy-exp-item">
                                        <div className="academy-exp-num">06</div>
                                        <div className="academy-exp-item-text">Internship opportunities for top performers</div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 academy-exp-right">
                                <p className="academy-exp-right-label">The Environment</p>
                                <h3 className="academy-exp-right-title">A structured learning environment built around doing.</h3>
                                <p className="academy-exp-right-desc">Social Sculpt Academy is designed for real-world execution. Students experience a structured learning environment that focuses on practical application.</p>
                                <div className="academy-exp-right-badge">
                                    <div className="academy-exp-dot"></div>
                                    <span>Built for execution, not just knowledge.</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="academy-for-section section-padding">
                    <div className="container">

                        <p className="academy-label">Who This Is For</p>

                        <div className="row align-items-end mb-5">
                            <div className="col-12 col-md-6 mb-4 mb-md-0">
                                <h2 className="academy-for-title">This Is<br className='break-tag' />Built For <span>You.</span></h2>
                            </div>
                            <div className="col-12 col-md-6">
                                <p className="academy-for-intro-desc">Whether you are starting fresh or leveling up — Social Sculpt Academy is designed for people who want to lead in the digital economy.</p>
                            </div>
                        </div>

                        <div className="row g-0 academy-for-cards">
                            <div className="col-12 col-md-6 col-lg academy-for-card">
                                <div className="academy-for-card-num">01</div>
                                <div>
                                    <div className="academy-for-card-text">Students who want a high-income skill.</div>
                                    <div className="academy-for-card-arrow">
                                        <svg viewBox="0 0 16 16" fill="none"><path d="M3 13L13 3M13 3H6M13 3V10" stroke="#fee212" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg academy-for-card">
                                <div className="academy-for-card-num">02</div>
                                <div>
                                    <div className="academy-for-card-text">Creators who want structured growth.</div>
                                    <div className="academy-for-card-arrow">
                                        <svg viewBox="0 0 16 16" fill="none"><path d="M3 13L13 3M13 3H6M13 3V10" stroke="#fee212" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg academy-for-card">
                                <div className="academy-for-card-num">03</div>
                                <div>
                                    <div className="academy-for-card-text">Professionals who want to upgrade their skills with AI.</div>
                                    <div className="academy-for-card-arrow">
                                        <svg viewBox="0 0 16 16" fill="none"><path d="M3 13L13 3M13 3H6M13 3V10" stroke="#fee212" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg academy-for-card">
                                <div className="academy-for-card-num">04</div>
                                <div>
                                    <div className="academy-for-card-text">Career switchers entering the digital economy.</div>
                                    <div className="academy-for-card-arrow">
                                        <svg viewBox="0 0 16 16" fill="none"><path d="M3 13L13 3M13 3H6M13 3V10" stroke="#fee212" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg academy-for-card">
                                <div className="academy-for-card-num">05</div>
                                <div>
                                    <div className="academy-for-card-text">Anyone who wants to build authority and stay ahead of the future.</div>
                                    <div className="academy-for-card-arrow">
                                        <svg viewBox="0 0 16 16" fill="none"><path d="M3 13L13 3M13 3H6M13 3V10" stroke="#fee212" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="academy-career-section py-5">
                    <div className="container">

                        <p className="academy-label">Career Opportunities After Completion</p>

                        <div className="row align-items-start mb-5">
                            <div className="col-12 col-md-6 mb-4 mb-md-0">
                                <h2 className="academy-career-title">Open Doors to<br className='break-tag' /><span>Multiple</span><br className='break-tag' />Career Paths.</h2>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="academy-career-divider"></div>
                                <p className="academy-career-desc">Students completing the programs develop skills that can open multiple career paths.</p>
                            </div>
                        </div>

                        <p className="academy-career-roles-label">Possible Roles Include</p>
                        <div className="academy-career-roles">
                            <div className="academy-career-role">Marketing Executive</div>
                            <div className="academy-career-role">Social Media Manager</div>
                            <div className="academy-career-role">SEO Specialist</div>
                            <div className="academy-career-role">Performance Marketing Executive</div>
                            <div className="academy-career-role">Growth Marketing Specialist</div>
                            <div className="academy-career-role">Brand Strategist</div>
                            <div className="academy-career-role">Marketing Manager</div>
                        </div>

                        <div className="row g-0 academy-career-bottom">
                            <div className="col-12 col-md-6 academy-career-paths">
                                <p className="academy-career-paths-label">Many Students Also Choose</p>
                                <div className="academy-career-path-item">
                                    <span className="academy-career-path-dot"></span>Freelancing
                                </div>
                                <div className="academy-career-path-item">
                                    <span className="academy-career-path-dot"></span>Consulting
                                </div>
                                <div className="academy-career-path-item">
                                    <span className="academy-career-path-dot"></span>Building their own agencies
                                </div>
                                <div className="academy-career-path-item">
                                    <span className="academy-career-path-dot"></span>Launching creator businesses
                                </div>
                            </div>
                            <div className="col-12 col-md-6 academy-career-cta">
                                <p className="academy-career-cta-label">The Ceiling</p>
                                <div className="academy-career-cta-text">Skill-based income has no ceiling.</div>
                                <div className="academy-career-cta-badge">
                                    <span>Start Building Your Future</span>
                                    <div className="academy-career-cta-badge-arrow">
                                        <svg viewBox="0 0 14 14" fill="none"><path d="M2 12L12 2M12 2H5M12 2V9" stroke="#fee212" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="academy-philosophy-section section-padding">
                    <div className="container">

                        <div className=''>
                            <p className="academy-label">Our Learning Philosophy</p>
                        </div>

                        <div className="academy-philosophy-hero">
                            <h2 className="academy-philosophy-hero-title">Our Learning<br /><span>Philosophy.</span></h2>
                        </div>

                        <div className="row g-0">
                            <div className="col-12 col-md-4 academy-philosophy-step">
                                <div className="academy-philosophy-step-bg-num">01</div>
                                <div className="academy-philosophy-step-order">First</div>
                                <div className="academy-philosophy-step-title">Strategy</div>
                            </div>
                            <div className="col-12 col-md-4 academy-philosophy-step">
                                <div className="academy-philosophy-step-bg-num">02</div>
                                <div className="academy-philosophy-step-order">Second</div>
                                <div className="academy-philosophy-step-title">Execution</div>
                            </div>
                            <div className="col-12 col-md-4 academy-philosophy-step">
                                <div className="academy-philosophy-step-bg-num">03</div>
                                <div className="academy-philosophy-step-order">Third</div>
                                <div className="academy-philosophy-step-title">AI Enhancement</div>
                            </div>
                        </div>

                        <div className="academy-philosophy-statement">
                            <div className="academy-philosophy-statement-left">
                                <div className="academy-philosophy-statement-line"></div>
                                <p className="academy-philosophy-statement-text">Technology changes quickly, but strategic thinking and creativity remain timeless.</p>
                            </div>

                            <div className="academy-philosophy-statement-right">
                                <p className="academy-philosophy-statement-quote">At Social Sculpt Academy, AI is not a shortcut. It is a <strong className='blue'>multiplier for human creativity.</strong></p>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="academy-hybrid-section py-5">
                    <div className="container">

                        <p className="academy-hybrid-tag">The Future</p>

                        <h2 className="academy-hybrid-title">The Future Belongs<br className='break-tag' />to <span>Hybrid Thinkers.</span></h2>

                        <p className="academy-hybrid-sub">The next generation of leaders will not just be marketers. They will be thinkers, creators, strategists, and builders.</p>

                        <div className="row g-0 academy-hybrid-combine-row">
                            <div className="col-12 col-md-6 academy-hybrid-combine-left">
                                <p className="academy-hybrid-combine-label">The people who combine</p>
                                <div className="academy-hybrid-pills">
                                    <div className="academy-hybrid-pill"><span className="academy-hybrid-pill-dot"></span>Human Understanding</div>
                                    <div className="academy-hybrid-pill"><span className="academy-hybrid-pill-dot"></span>Strategic Thinking</div>
                                    <div className="academy-hybrid-pill"><span className="academy-hybrid-pill-dot"></span>AI Leverage</div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 academy-hybrid-combine-right">
                                <p className="academy-hybrid-closing-text">will <span>shape the future.</span></p>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="academy-cta-section section-padding">
                    <div className="container">

                        <p className="academy-cta-tag">Your Next Move</p>

                        <div className="academy-cta-main">
                            <div className="academy-cta-top">
                                <h2 className="academy-cta-title">The Digital<br className='break-tag' />Economy Is<br className='break-tag' /><span>Evolving.</span></h2>
                            </div>

                            <div className="row g-0">
                                <div className="col-12 col-md-6 academy-cta-left">
                                    <p className="academy-cta-line-muted">You can watch the change happen.</p>
                                    <p className="academy-cta-line">Or you can become part of it.</p>
                                </div>
                                <div className="col-12 col-md-6 academy-cta-left">
                                    <p className="academy-cta-right-text">Start your journey with Social Sculpt Academy.</p>
                                    <a href="#" className="academy-cta-btn">
                                        Join the Academy
                                        <span className="academy-cta-btn-arrow">
                                            <svg viewBox="0 0 18 18" fill="none"><path d="M3 15L15 3M15 3H7M15 3V11" stroke="#fee212" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <Footer />

            </div>
        </div>
    )
}

export default page
