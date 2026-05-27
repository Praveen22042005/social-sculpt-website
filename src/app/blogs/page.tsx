import Footer from '@/src/components/Footer'
import Header from '@/src/components/Header'
import React from 'react'
export const dynamic = "force-static";


const page = () => {
    return (
        <div>
            <Header />
            <div className='overflow-hidden'>
                <section className="common-banner-section blogs">
                    {/* <div className="container">
                    <h2 className="common-heading-banner">
                        Blogs
                    </h2>
                </div> */}
                </section>

                <section className="blog-articles-section">
                    <div className="container">

                        <div className='mt-4'>
                            <div className="row">

                                <div className="col-lg-7">
                                    <div className="blog-spotlight-wrapper">
                                        <div className="blog-label mb-5">
                                            <p >Spotlight</p>
                                        </div>

                                        <div className="blog-spotlight-card me-lg-4">
                                            <a href='/blog/essential-resources-to-stay-updated-with-digital-marketing-trends'>
                                                <img
                                                    src="../essential-resources.png"
                                                    alt="Spotlight"
                                                    className="img-fluid blog-spotlight-image"
                                                    data-aos="zoom-in"
                                                />
                                            </a>
                                        </div>


                                        <div data-aos="fade-up">
                                            <a href='/blog/essential-resources-to-stay-updated-with-digital-marketing-trends'>
                                                <h3 className="blog-spotlight-title mt-4">
                                                    Essential Resources To Stay Updated With Digital Marketing Trends
                                                </h3>
                                            </a>

                                            <div className="blog-author mt-3">
                                                <p>The digital marketing landscape evolves rapidly, making it important for professionals to stay informed about emerging tools, platform updates, and changing consumer behavior...</p>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div className="col-lg-5">
                                    <div className="blog-trending-wrapper">
                                        <div className="blog-label mb-3">
                                            <p >Trending</p>
                                        </div>

                                        <div className="blog-trending-item">
                                            <div className='row'>
                                                <div className='col-lg-5'>
                                                    <div data-aos="fade-left">
                                                        <a href='/blog/the-growing-importance-of-content-marketing-in-digital-strategy'>
                                                            <img src="../the-growing-importance.png" alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className='col-lg-7'>
                                                    <div data-aos="fade-right">
                                                        <a href='/blog/the-growing-importance-of-content-marketing-in-digital-strategy'>
                                                            <p className='head'>The Growing Importance Of Content Marketing In Digital Strategy</p>
                                                        </a>
                                                        <p className='para'>Content marketing plays a central role in modern digital strategies. Businesses use blogs, videos, newsletters.....</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="blog-trending-item">
                                            <div className='row'>
                                                <div className='col-lg-5'>
                                                    <div data-aos="fade-left">
                                                        <a href='/blog/why-consistency-matters-in-social-media-content'>
                                                            <img src="../consistency.png" alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className='col-lg-7'>
                                                    <div data-aos="fade-right">
                                                        <a href='/blog/why-consistency-matters-in-social-media-content'>
                                                            <p className='head'>Why Consistency Matters In Social Media Content</p>
                                                        </a>
                                                        <p className='para'>Consistency is one of the most important factors in building a strong presence on social media .....</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="blog-trending-item">
                                            <div className='row'>
                                                <div className='col-lg-5'>
                                                    <div data-aos="fade-left">
                                                        <a href='/blog/how-businesses-use-digital-platforms-to-build-brand-visibility'>
                                                            <img src="../how-business-use.png" alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className='col-lg-7'>
                                                    <div data-aos="fade-right">
                                                        <a href='/blog/how-businesses-use-digital-platforms-to-build-brand-visibility'>
                                                            <p className='head'>How Businesses Use Digital Platforms To Build Brand Visibility</p>
                                                        </a>
                                                        <p className='para'>Digital platforms provide businesses with multiple opportunities to expand their reach and .....</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="blog-trending-item last">
                                            <div className='row'>
                                                <div className='col-lg-5'>
                                                    <div data-aos="fade-left">
                                                        <a href='/blog/key-elements-of-a-strong-social-media-marketing-strategy'>
                                                            <img src="../strong-socil-media.png" alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className='col-lg-7'>
                                                    <div data-aos="fade-right">
                                                        <a href='/blog/key-elements-of-a-strong-social-media-marketing-strategy'>
                                                            <p className='head'>Key Elements Of A Strong Social Media Marketing Strategy</p>
                                                        </a>
                                                        <p className='para'>An effective social media marketing strategy involves understanding the audience, choosing the .....</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* <hr className="blog-divider my-5" /> */}

                        {/* <div className='blog-bottom'>
                        <div className="blog-category-header d-flex justify-content-between align-items-center mb-4">
                            <div className="blog-category-label">
                                <p> Marketing</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4">
                                <div className="blog-card">
                                    <div className="blog-card-image-wrapper">
                                        <img
                                            src="agency.jpeg"
                                            alt="Spotlight"
                                            className="img-fluid blog-spotlight-image"
                                        />
                                        <span className="blog-badge">Social Media Marketing</span>
                                    </div>

                                    <h4 className="blog-card-title">
                                        How Insurtech Startups Like Nova Benefits Are Bridging Gaps In...
                                    </h4>

                                    <div className="blog-author mt-3">
                                        <p>Sanyukta Iyer</p>
                                    </div>

                                    <div className="wrapper mt-4">
                                        <a href="#" className='black'><span>Read More</span></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="blog-card">
                                    <div className="blog-card-image-wrapper">
                                        <img
                                            src="agency.jpeg"
                                            alt="Spotlight"
                                            className="img-fluid blog-spotlight-image"
                                        />
                                        <span className="blog-badge">INSURANCE 101</span>
                                    </div>

                                    <h4 className="blog-card-title">
                                        What Is A Contingent Beneficiary? Nova Benefits Are In...
                                    </h4>

                                    <div className="blog-author mt-3">
                                        <p>Sakshi Maheshwari</p>
                                    </div>

                                    <div className="wrapper mt-4">
                                        <a href="#" className='black'><span>Read More</span></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="blog-card">
                                    <div className="blog-card-image-wrapper">
                                        <img
                                            src="agency.jpeg"
                                            alt="Spotlight"
                                            className="img-fluid blog-spotlight-image"
                                        />
                                        <span className="blog-badge">INSURANCE 101</span>


                                    </div>

                                    <h4 className="blog-card-title">
                                        What Is A Contingent Beneficiary?Nova Benefits Are In...
                                    </h4>

                                    <div className="blog-author mt-3">
                                        <p>Sakshi Maheshwari</p>
                                    </div>

                                    <div className="wrapper mt-4">
                                        <a href="#" className='black'><span>Read More</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='mt-lg-5'>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="blog-card">
                                        <div className="blog-card-image-wrapper">
                                            <img
                                                src="agency.jpeg"
                                                alt="Spotlight"
                                                className="img-fluid blog-spotlight-image"
                                            />
                                            <span className="blog-badge">Social Media Marketing</span>
                                        </div>

                                        <h4 className="blog-card-title">
                                            How Insurtech Startups Like Nova Benefits Are Bridging Gaps In...
                                        </h4>

                                        <div className="blog-author mt-3">
                                            <p>Sanyukta Iyer</p>
                                        </div>

                                        <div className="wrapper mt-4">
                                            <a href="#" className='black'><span>Read More</span></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="blog-card">
                                        <div className="blog-card-image-wrapper">
                                            <img
                                                src="agency.jpeg"
                                                alt="Spotlight"
                                                className="img-fluid blog-spotlight-image"
                                            />
                                            <span className="blog-badge">INSURANCE 101</span>
                                        </div>

                                        <h4 className="blog-card-title">
                                            What Is A Contingent Beneficiary? Nova Benefits Are In...
                                        </h4>

                                        <div className="blog-author mt-3">
                                            <p>Sakshi Maheshwari</p>
                                        </div>

                                        <div className="wrapper mt-4">
                                            <a href="#" className='black'><span>Read More</span></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="blog-card">
                                        <div className="blog-card-image-wrapper">
                                            <img
                                                src="agency.jpeg"
                                                alt="Spotlight"
                                                className="img-fluid blog-spotlight-image"
                                            />
                                            <span className="blog-badge">INSURANCE 101</span>


                                        </div>

                                        <h4 className="blog-card-title">
                                            What Is A Contingent Beneficiary?Nova Benefits Are In...
                                        </h4>

                                        <div className="blog-author mt-3">
                                            <p>Sakshi Maheshwari</p>
                                        </div>

                                        <div className="wrapper mt-4">
                                            <a href="#" className='black'><span>Read More</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    </div>
                </section>
                <Footer />
            </div>
        </div>
    )
}

export default page
