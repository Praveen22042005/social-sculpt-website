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
                    <section className="banner-positioning consulting">
                        <div className="container">
                            <div className='' data-aos="fade-right">
                                <h1 className="banner-title">
                                    Turn Strategy Into <br className='break-tag' />Real Business
                                    <br className='break-tag' />Growth

                                </h1>

                                <p className="banner-description">
                                    We provide consulting that helps businesses identify<br className='break-tag' /> opportunities, solve complex challenges.
                                    {/* , and build<br className='break-tag' /> clear strategies for sustainable growth and long-term success. */}
                                </p>

                                <div className='d-flex'>
                                    <div className="wrapper">
                                        <a href="#" className='perosnal-brand'><span>Book a Consultation</span></a>
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

                                <div data-aos="fade-down-right">
                                    <h2 className='common-heading mb-6'>Why Your Business Needs Strategic Consulting</h2>

                                    <div className="wrapper">
                                        <a href="#" className='black'><span>Let’s Connect</span> <i className="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                </div>

                            </div>
                            <div className='col-lg-6'>
                                <div className='mt-lg-0 mt-5' data-aos="fade-down-left">
                                    <p>Consulting helps businesses gain clarity in decision-making and direction. As markets evolve rapidly, organizations often face challenges in strategy, growth planning, operations, and digital transformation. Strategic consulting provides an outside perspective backed by expertise and structured problem-solving.</p>
                                    <p className='mt-4'>With the right consulting approach, businesses can identify growth opportunities, improve operational efficiency, and develop strategies that align with long-term goals. By combining industry insights, analytical thinking, and practical execution frameworks, consulting helps organizations move forward with confidence and clarity.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <section className='section-padding center-content pt-0'>
                <div className='container'>
                    <h2 className='common-heading text-center mb-5'>What We Do</h2>
                    <p><span>We are growth geeks focused </span>on results. We provide<br className='break-tag' /> customized strategies, ad placements, and<br className='break-tag' /><span>get the numbers that matter</span>.</p>
                </div>
            </section> */}

                <section className="features-section section-padding-bottom">
                    <div className="container">

                        <div className="text-center mb-5" data-aos="zoom-in">
                            <h2 className="common-heading" >
                                Who This Works Best For
                            </h2>
                            <p className="text-muted pb-4 mt-4">
                                Businesses that want expert guidance to solve challenges, improve decision-making, and<br className='mt-4' /> build strategies that support long-term growth and competitive advantage.
                            </p>
                        </div>

                        <div className='mt-5'>
                            <div className="row g-4 align-items-center justify-content-center d-flex">
                                {[
                                    {
                                        icon: "fa-comment-dots",
                                        title: "Growing Businesses Seeking Direction",
                                        desc: "Companies looking to refine their business strategy, improve operational efficiency, and identify new opportunities for expansion and market positioning."
                                    },
                                    {
                                        icon: "fa-robot",
                                        title: "Founder-Led and Personal Brands",
                                        desc: "Entrepreneurs and leaders who need structured thinking, expert insights, and strategic frameworks to make better decisions and navigate complex business challenges."
                                    },
                                    {
                                        icon: "fa-database",
                                        title: "Businesses Launching or Scaling Online",
                                        desc: "Businesses launching new initiatives, entering new markets, or restructuring operations that require strategic clarity and expert guidance."
                                    },

                                ].map((item, index) => (
                                    <div className="col-lg-4 col-md-6" key={index} data-aos="fade-right" data-aos-delay={index * 100}>
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

                    </div>
                </section>

                <div className='section-padding-bottom'>
                    <div className='container'>
                        <div className='row'>

                            <div className='col-lg-6'>
                                <div data-aos="fade-right">
                                    <h2 className='common-heading mb-6'>How Consulting Creates Business Impact</h2>

                                    <div>
                                        <p>Consulting helps organizations approach challenges with clarity and structure. By analyzing market conditions, internal operations, and growth opportunities, businesses can develop strategies that are practical, scalable, and aligned with their long-term vision.</p>
                                        <p className='mt-4' >Through structured problem-solving and expert guidance, consulting enables companies to make informed decisions, reduce uncertainty, and improve overall business performance. The result is stronger strategic direction, better operational alignment, and a clearer path toward sustainable growth.</p>                                </div>
                                </div>

                            </div>

                            <div className='col-lg-6'>
                                <div className='ms-lg-5 ms-0 mt-lg-0 mt-5' data-aos="fade-left">
                                    <img src="/consultation-banner.png" alt="" className='image-fluid ' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="why-section-service section-padding">
                    <div className="container">

                        <div className="mb-4">
                            <h2 className="common-heading" data-aos="fade-down">
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
                                <div className="col-lg-6" key={index} data-aos="fade-down-right" data-aos-delay={index * 100}>
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

                    <div className="row mb-5">
                        <div className="col-lg-5">
                            <div className='sticky-service-side' data-aos="fade-right">
                                <h2 className="common-heading">
                                    How We Approach Consulting
                                </h2>
                                <p className='mt-4'>We follow a structured process that helps organizations understand challenges clearly, identify opportunities, and develop strategies that support long-term success.</p>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            {/* {[
                                {
                                    title: "Brand Positioning",
                                    desc: "We help you identify and establish a strong, unique position in the market, ensuring your brand stands out and resonates with your target audience."
                                },
                                {
                                    title: "Product & Consumer Research",
                                    desc: "Our in-depth research uncovers what your customers truly want, enabling you to tailor your products and services to meet their needs and expectations."
                                },
                                {
                                    title: "Communication Testing",
                                    desc: "We evaluate the effectiveness of your marketing communications, ensuring your messages are impactful and aligned with your brand values."
                                },
                                {
                                    title: "Usability Surveys",
                                    desc: "Our surveys are designed to assess the user experience of your products or services, providing actionable insights."
                                }
                            ].map((item, index) => (
                                <div className='research-row ms-4'>
                                    <div className="row" key={index}>
                                        <div className="col-lg-5">
                                            <h4 className="research-item-title">
                                                {item.title}
                                            </h4>
                                        </div>
                                        <div className="col-lg-7">
                                            <p className="research-item-desc">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))} */}


                            <div className="row g-4">
                                {[
                                    {
                                        icon: "fa-lightbulb",
                                        title: "Discovery & Business Assessment",
                                        desc: "We begin by understanding your organization, objectives, challenges, and current market position to establish a strong strategic foundation."
                                    },
                                    {
                                        icon: "fa-chart-pie",
                                        title: "Market & Competitive Analysis",
                                        desc: "We analyze industry trends, competitor strategies, and market dynamics to identify opportunities, potential risks, and areas for competitive advantage."
                                    },
                                    {
                                        icon: "fa-sitemap",
                                        title: "Strategic Framework Development",
                                        desc: "Based on insights, we develop clear strategic frameworks that guide decision-making, resource allocation, and long-term growth initiatives."
                                    },
                                    {
                                        icon: "fa-map",
                                        title: "Actionable Roadmap",
                                        desc: "We translate strategy into practical action plans with defined priorities, timelines, and measurable outcomes to ensure execution clarity."
                                    },
                                    {
                                        icon: "fa-people-group",
                                        title: "Implementation Guidance",
                                        desc: "We support leadership teams in turning strategy into action by aligning departments, processes, and goals around a unified direction."
                                    },
                                    {
                                        icon: "fa-arrows-rotate",
                                        title: "Continuous Review & Refinement",
                                        desc: "As market conditions evolve, we continuously review and refine strategies to ensure they remain relevant, competitive, and effective."
                                    }
                                ].map((item, index) => (
                                    <div className="col-lg-6 col-md-6" key={index} data-aos="fade-left" data-aos-delay={index * 100}>
                                        <div className="feature-card-service">

                                            <div className="card-body">
                                                {/* <div className="feature-icon mb-3">
                                                <i className={`fa-solid ${item.icon}`}></i>
                                            </div> */}

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
                </div>
            </section>


            <div className='overflow-hidden' data-aos="zoom-in">
                <div className='section-padding-bottom '>
                    <div className='container'>
                        <div className='common-page-cta '>

                            <h3 className='common-heading mb-4'>Build a Stronger Business Strategy</h3>
                            <p>Get expert guidance to solve challenges, clarify direction, and build strategies<br className='break-tag' /> that support sustainable business growth.</p>

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
