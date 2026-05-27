'use client'
import Footer from '@/src/components/Footer'
import Header from '@/src/components/Header'
import 'swiper/css';
import 'swiper/css/autoplay';
export const dynamic = "force-static";


const page = () => {
    // const lineRef = useRef<HTMLDivElement>(null)
    // const [progress, setProgress] = useState(0)

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (!lineRef.current) return

    //         const rect = lineRef.current.getBoundingClientRect()
    //         const windowHeight = window.innerHeight

    //         const totalHeight = rect.height
    //         const visible = windowHeight - rect.top
    //         const percent = Math.min(Math.max(visible / totalHeight, 0), 1)

    //         setProgress(percent * 100)
    //     }

    //     window.addEventListener("scroll", handleScroll)
    //     return () => window.removeEventListener("scroll", handleScroll)
    // }, [])

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
                    <section className="banner-positioning social-media">
                        <div className="container">
                            <div className='' data-aos="fade-right">
                                <h1 className="banner-title">
                                    Turn Social Platforms <br className='break-tag' />Into Powerful <br className='break-tag' />Growth Channels.

                                </h1>

                                <p className="banner-description">
                                    We design performance marketing strategies for brands and startups that want <br className='break-tag' /> qualified leads, better conversions, and measurable growth that goes <br className='break-tag' /> beyond clicks and impressions.
                                </p>

                                <div className='d-flex '>
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

                                <div data-aos="fade-up">
                                    <h2 className='common-heading mb-6'>Why Your Brand Needs Social Media Marketing</h2>
                                    <div className="wrapper">
                                        <a href="/contact-us" className='black'><span>Let’s Connect</span> <i className="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                </div>

                            </div>
                            <div className='col-lg-6'>
                                <div className='mt-lg-0 mt-5' data-aos="fade-down">
                                    <p>Social Media Marketing helps your brand connect with the people who matter most. It allows businesses to reach their audience where they spend a significant amount of their time, turning platforms into powerful channels for awareness, engagement, and brand building.</p>

                                    <div className='servcie-list-top '>
                                        <ul className="servcie-list">
                                            <li className='d-flex'>
                                                <div className="icon-circle">
                                                    <i className="fa-solid fa-check"></i>
                                                </div>
                                                <div>
                                                    <p>Builds strong brand awareness</p>
                                                </div>
                                            </li>

                                            <li className='d-flex'>
                                                <div className="icon-circle">
                                                    <i className="fa-solid fa-check"></i>
                                                </div>
                                                <div>
                                                    <p>Drives consistent engagement</p>
                                                </div>
                                            </li>

                                        </ul>

                                        <ul className="servcie-list">
                                            <li className='d-flex'>
                                                <div className="icon-circle">
                                                    <i className="fa-solid fa-check"></i>
                                                </div>
                                                <div>
                                                    <p>Creates meaningful connections</p>
                                                </div>
                                            </li>

                                            <li className='d-flex'>
                                                <div className="icon-circle">
                                                    <i className="fa-solid fa-check"></i>
                                                </div>
                                                <div>
                                                    <p>Keeps your brand visible</p>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>


                                    {/* <div className='servcie-list-top '>
                                        <ul className="servcie-list mt-0">
                                            <li className='d-flex'>
                                                <div className="icon-circle">
                                                    <i className="fa-solid fa-check"></i>
                                                </div>
                                                <div>
                                                    <p>Connects your brand rfsad.</p>
                                                </div>
                                            </li>
                                        </ul>

                                        <ul className="servcie-list mt-0">
                                            <li className='d-flex'>
                                                <div className="icon-circle">
                                                    <i className="fa-solid fa-check"></i>
                                                </div>
                                                <div>
                                                    <p>Connects your brand rfsadv ss.</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="features-section section-padding-bottom">
                    <div className="container">

                        <div className="text-center mb-5" data-aos="zoom-in">
                            <h2 className="common-heading">
                                Who This Works Best For
                            </h2>
                            <p className="text-muted pb-4 mt-4">
                                Brands that want to build visibility, connect with their audience, and turn social <br className='break-tag' />platforms into consistent growth channels for awareness, engagement, and brand influence.
                            </p>
                        </div>

                        <div className='mt-5'>
                            <div className="row g-4 align-items-center justify-content-center d-flex">
                                {[
                                    {
                                        icon: "fa-comment-dots",
                                        title: "Brands Building Community",
                                        desc: "Companies that want to create a loyal audience around their brand by consistently sharing valuable content, engaging with followers, and building meaningful relationships that strengthen trust and credibility."
                                    },
                                    {
                                        icon: "fa-robot",
                                        title: "Founder-Led and Personal Brands",
                                        desc: "Founders, creators, and industry experts who want to build authority, share insights, and position themselves as thought leaders while growing a strong and engaged audience."
                                    },
                                    {
                                        icon: "fa-database",
                                        title: "Businesses Launching or Scaling Online",
                                        desc: "Brands introducing new products, entering new markets, or expanding their digital presence that need a strong social media strategy to drive awareness, reach, and sustained audience engagement."
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
                                    <div className="col-lg-4 col-md-6" key={index} data-aos="fade-down" data-aos-delay={index * 200}>
                                        <div className="feature-card-service social-media-feature-card">

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

                <div className='section-padding-bottom'>
                    <div className='container'>
                        <div className='row'>

                            <div className='col-lg-6'>
                                <div data-aos="fade-left">
                                    <h2 className='common-heading mb-6'>How Social Media Marketing Drives Growth</h2>
                                    <p>Social Media Marketing focuses on building consistent visibility and meaningful engagement with your audience across the platforms they use every day.

                                    </p><p className='mt-3'>A well-structured social media strategy helps brands reach the right people, communicate their value clearly, and create ongoing opportunities for awareness, interaction, and customer interest.</p>

                                    <div className='servcie-list-top' >
                                        <ul className="servcie-list">
                                            <li className='d-flex'>
                                                <div className="icon-circle">
                                                    <i className="fa-solid fa-check"></i>
                                                </div>

                                                <div>
                                                    <p>Communicates clear brand value</p>
                                                </div>
                                            </li>

                                            <li className='d-flex'>
                                                <div className="icon-circle">
                                                    <i className="fa-solid fa-check"></i>
                                                </div>
                                                <div>
                                                    <p>Engages the right audience</p>
                                                </div>
                                            </li>

                                        </ul>

                                        <ul className="servcie-list">
                                            <li className='d-flex'>
                                                <div className="icon-circle">
                                                    <i className="fa-solid fa-check"></i>
                                                </div>
                                                <div>
                                                    <p>Drives ongoing interaction</p>
                                                </div>
                                            </li>

                                            <li className='d-flex'>
                                                <div className="icon-circle">
                                                    <i className="fa-solid fa-check"></i>
                                                </div>
                                                <div>
                                                    <p>Scales high-performing content</p>
                                                </div>
                                            </li>

                                        </ul>

                                    </div>

                                </div>
                            </div>

                            <div className='col-lg-6'>
                                <div className='ms-lg-5 ms-0 mt-lg-0 mt-5' data-aos="fade-right">
                                    <img src="/smm-growth.png" alt="" className='image-fluid ' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="why-section-service section-padding">
                    <div className="container">

                        <div className="mb-4">
                            <h2 className="common-heading" data-aos="fade-up">
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
                                <div className="col-lg-6" key={index} data-aos="fade-right" data-aos-delay={index * 200}>
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

            </div>

            <section className="research-section section-padding">
                <div className="container">

                    <div className='mb-5' data-aos="zoom-in">
                        <h2 className="common-heading text-center" >
                            How We Plan <br className='break-tag' />Performance Campaigns
                        </h2>
                        <p className='mt-4  text-center'>We follow a structured, data-first approach to ensure every campaign is built  <br className='break-tag' />for measurable growth and optimized for the best possible results.</p>
                    </div>


                    <div className='mt-5'>
                        <div className="row g-4">
                            {[
                                {
                                    icon: "fa-comment-dots",
                                    title: "Audience & Platform Research",
                                    desc: "We analyze your audience behavior, industry landscape, and platform dynamics to identify where your brand can create the strongest impact and reach the right people effectively."
                                },
                                {
                                    icon: "fa-robot",
                                    title: "Content Strategy & Planning",
                                    desc: "Based on insights and brand objectives, we design a structured content strategy that defines messaging, themes, and posting cadence to ensure clarity and consistency."
                                },
                                {
                                    icon: "fa-database",
                                    title: "Creative Content Development",
                                    desc: "We create engaging visuals, videos, and storytelling formats that capture attention, reflect your brand identity, and encourage meaningful audience interaction."
                                },
                                {
                                    icon: "fa-rotate",
                                    title: "Publishing & Community Engagement",
                                    desc: "Content is strategically scheduled and published while actively engaging with your audience through comments, conversations, and community building."
                                },
                                {
                                    icon: "fa-inbox",
                                    title: "Performance Analysis",
                                    desc: "We monitor reach, engagement, audience growth, and overall content performance to understand what resonates most with your audience."
                                },
                                {
                                    icon: "fa-chart-column",
                                    title: "Continuous Refinement",
                                    desc: "Using performance insights, we continuously optimize content formats, messaging, and posting strategies to ensure steady and long-term social media growth."
                                }
                            ].map((item, index) => (
                                <div className="col-lg-4 col-md-6" key={index} data-aos="fade-down" data-aos-delay={index * 200}>
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


                    <div className='d-flex justify-content-center mt-5'>
                        <div className="wrapper">
                            <a href="https://calendly.com/arunachalam-socialsculpt/30min" target='_blank' className='black'><span>Book a Call</span></a>

                        </div>
                    </div>
                </div>
            </section>

            <div className='overflow-hidden' data-aos="zoom-in">
                <div className='section-padding-bottom'>
                    <div className='container'>
                        <div className='common-page-cta' >

                            <h3 className='common-heading mb-4'>Start Growing Your Social Presence</h3>
                            <p>Build a stronger brand presence with social media strategies designed to increase visibility, engage the<br className='break-tag' /> right audience, and create meaningful connections that drive long-term growth.</p>

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
            </div>

            <Footer />
        </>
    )
}

export default page
