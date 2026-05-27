'use client'

import React, { useEffect, useState } from 'react'

const Banner = () => {

    const words = ["Industry", "Category", "Market", "Segment"];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % words.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <section className="banner-positioning home-page">
                <div className="container">
                    <div className=''>

                        <div data-aos="fade-right">
                            <h1 className="banner-title">
                                Positioning Brands
                            </h1>
                            <h1 className="banner-title">
                                to Lead
                            </h1>
                            <h1 className="banner-title">
                               Their Category
                            </h1>
                        </div>

                        <p className="banner-description" data-aos="fade-right">
                            We turn founders and creators into digital authorities<br className='break-tag'/> with positioning that hits,
                            content that moves,<br className='break-tag'/> and growth that compounds.                        </p>

                        <div className="d-flex justify-content-start align-items-start flex-lg-row flex-md-row flex-column">
                            <div className="wrapper ms-lg-0 ms-0 mt-3 mt-md-0 ms-md-4 ms-0" >
                                <a href="https://calendly.com/arunachalam-socialsculpt/30min" target='_blank' className='banner-second-btn white'><span>Book a Strategy Call </span></a>
                            </div>
                            
                        </div>
                    </div>


                </div>
            </section>
        </div>
    )
}

export default Banner
