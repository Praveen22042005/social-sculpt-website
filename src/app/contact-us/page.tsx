'use client'
import Footer from '@/src/components/Footer'
import Header from '@/src/components/Header'
import ThankYouModal from '@/src/components/ThankYouModel';
import React, { useState } from 'react'
import emailjs from "@emailjs/browser";
export const dynamic = "force-static";


interface FormData {
    name: string;
    email: string;
    phonenumber: string;
    service: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    phonenumber?: string;
    service?: string;
    message?: string;
}

const page = () => {


    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phonenumber: "",
        service: "",
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

        if (!formData.service.trim()) {
            newErrors.service = "Service name is required";
        }

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
            params.append("service", formData.service);
            params.append("message", formData.message);
            params.append("phonenumber", formData.phonenumber);
            params.append("email", formData.email);

            await fetch(
                "https://script.google.com/macros/s/AKfycbzd75h65nKxt1IC7f7WxqxNKZlLbshK6x6A1nZUzH_yyuZzJcWeS1CwBpsOfFbpHLCl/exec",
                {
                    method: "POST",
                    mode: "no-cors",
                    body: params,
                }
            );

            await emailjs.send(
                "service_x8u73pv",
                "template_ca5nznt",
                {
                    name: formData.name,
                    email: formData.email,
                    phonenumber: formData.phonenumber,
                    service: formData.service,
                    message: formData.message,
                },
                "sYgfWk5g7QMhcexxQ"
            );


            setFormData({
                name: "",
                email: "",
                phonenumber: "",
                service: "",
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
        <div>

            <Header />

            <div className='overflow-hidden'>
                <section className="common-banner-section contact">
                    <div className="container">
                        <h2 className="common-heading-banner text-white">
                            Contact Us
                        </h2>
                    </div>
                </section>

                <section className="contact-section section-padding">
                    <div className="container">
                        <div className="row g-5">

                            <div className="col-lg-6">
                                <div className="contact-card" data-aos="fade-up">
                                    <h4 className="contact-heading">For Sales Inquiry</h4>

                                    <div className="contact-item">
                                        <div className="icon-circle">
                                            <i className="fa-solid fa-envelope"></i>
                                        </div>
                                        <a href="mailto:marketing@socialsculpt.in">
                                            marketing@socialsculpt.in
                                        </a>
                                    </div>

                                    <div className="contact-item">
                                        <div className="icon-circle">
                                            <i className="fa-solid fa-phone"></i>
                                        </div>
                                        <div className='contact-flex'>
                                            <a href="tel:+91 755 003 9872">
                                                +91 755 003 9872
                                            </a>
                                            <a href="tel:+91 7395 984 542" className='mt-lg-0 mt-md-0 mt-2 ms-lg-3 ms-md-3'>
                                                +91 7395 984 542
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="contact-card" data-aos="fade-up" data-aos-delay="100">
                                    <h4 className="contact-heading">For Career Opportunities</h4>

                                    <div className="contact-item">
                                        <div className="icon-circle">
                                            <i className="fa-solid fa-envelope"></i>
                                        </div>
                                        <a href="mailto:hr@socialsculpt.in">
                                            hr@socialsculpt.in
                                        </a>
                                    </div>

                                    <div className="contact-item">
                                        <div className="icon-circle">
                                            <i className="fa-solid fa-phone"></i>
                                        </div>
                                        <div className='contact-flex'>
                                            <a href="tel:+91 755 003 9872">
                                                +91 755 003 9872
                                            </a>
                                            <a href="tel:+91 7395 984 542" className='mt-lg-0 mt-md-0 mt-2 ms-lg-3 ms-md-3'>
                                                +91 7395 984 542
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="contact-card" data-aos="fade-up" data-aos-delay="200">
                                    <h4 className="contact-heading">Visit Us</h4>

                                    <div className="contact-item">
                                        <div className="icon-circle address-icon">
                                            <i className="fa-solid fa-location-dot"></i>
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
                            </div>

                            <div className="col-lg-6">
                                <div className="contact-form-card" data-aos="fade-up">
                                    <h4 className=" mb-4">Send Us a Message</h4>

                                    <form onSubmit={handleSubmit}>

                                        <div className="mb-3">
                                            <input type="text" className="form-control custom-input" name="name" value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Enter your name" />
                                            {errors.name && <small className="text-danger">{errors.name}</small>}
                                        </div>

                                        <div className="mb-3">
                                            <input type="text" name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="form-control custom-input"
                                                placeholder="Enter your email address" />
                                            {errors.email && <small className="text-danger">{errors.email}</small>}
                                        </div>

                                        <div className="mb-3">
                                            <input type="number" className="form-control custom-input" name="phonenumber"
                                                value={formData.phonenumber}
                                                onChange={handleChange}
                                                placeholder="Enter your phone number" />
                                            {errors.phonenumber && <small className="text-danger">{errors.phonenumber}</small>}
                                        </div>
                                        <div className="mb-3">
                                            <select name="service" className='custom-input'
                                                value={formData.service}
                                                onChange={handleChange}>
                                                <option value="">How Can We Help You?</option>
                                                <option>Personal Branding</option>
                                                <option>Social Media Marketing</option>
                                                <option>Performance Marketing</option>
                                                <option>Search Engine Optimization</option>
                                                <option>Consulting</option>
                                            </select>
                                            {errors.service && <small className="text-danger">{errors.service}</small>}
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

                <div className='section-padding pt-0' data-aos="zoom-in">
                    <div className='container'>
                        <div className='common-page-cta '>

                            <h3 className='common-heading mb-4'>Strong Brands Exist Beyond Screens</h3>
                            <p>While digital drives discovery, print helps brands create tangible and memorable experiences.</p>

                            <div className='d-flex justify-content-center align-item-center mt-5'>
                                <div className="wrapper" >
                                    <a href="https://calendly.com/arunachalam-socialsculpt/30min" target='_blank' className='banner-second-btn white'><span>Book a Strategy Call </span></a>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <section className='map-section'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.423310860704!2d80.26586757513559!3d13.047523887274865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267dc0e936331%3A0x6f1c9ea799168d49!2sSocial%20Sculpt%20%7C%20Personal%20Branding%20and%20Growth%20Marketing%20Agency!5e1!3m2!1sen!2sin!4v1770893856792!5m2!1sen!2sin"></iframe>
                </section>
            </div>

            <Footer />

            <ThankYouModal open={showModal} setOpen={setShowModal} />
        </div >
    )
}

export default page
