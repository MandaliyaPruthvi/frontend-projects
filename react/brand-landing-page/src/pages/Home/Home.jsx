import React, { useState, useEffect, useRef } from "react";
import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import "../Home/Home.css";
import one_image from "../../assets/carousel_images/one_image.jpeg";
import two_image from "../../assets/carousel_images/two_image.jpeg";
import three_image from "../../assets/carousel_images/three_image.jpeg";
import four_image from "../../assets/carousel_images/four_image.jpeg";
import base_image from "../../assets/base_image.svg";
import ServicesElement from "../Services/Services";
import ContactElement from "../Contact/Contact";
import About from "../About/About";
import PaymentElement from "../Payment/Payment";
import Footer from "../../components/Footer/Footer";
import Loader from '../../components/Loader/Loader';
// import EN_DATA from "../../locale/en.json";
import TestimonialsElement from "../Testimonials/Testimonials";

const Home = () => {
    const { t } = useTranslation(); // Get translation function

    const servicesListData = [
        {
            title: "Service One",
            description: "This is the services description allows us to define the service and give us the liberty to work with it.",
            imgSrc: one_image
        },
        {
            title: "Service Two",
            description: "This is the services description allows us to define the service and give us the liberty to work with it.",
            imgSrc: two_image
        },
        {
            title: "Service Three",
            description: "This is the services description allows us to define the service and give us the liberty to work with it.",
            imgSrc: three_image
        },
        {
            title: "Service_Four",
            description: "This is the services description allows us to define the service and give us the liberty to work with it.",
            imgSrc: four_image
        },
    ];

    const [loading, setLoading] = useState(true);
    const [contentVisible, setContentVisible] = useState(false);

    const targetDivRef = useRef(null);
    const scrollTriggerRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);

            setTimeout(() => {
                setContentVisible(true);
            }, 100);
        }, 3000);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        scrollToDiv();
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (scrollTriggerRef.current) {
            observer.observe(scrollTriggerRef.current);
        }

        return () => {
            if (scrollTriggerRef.current) {
                observer.unobserve(scrollTriggerRef.current);
            }
        };
    }, []);

    const scrollToDiv = () => {
        if (targetDivRef.current) {
            targetDivRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "centre",
            }}
        >
            {loading ? <Loader /> : (
                <div className={`content ${contentVisible ? 'fade-in' : ''}`}>
                    <Element name="home_element" className="home_element">
                        <div className="home_container">
                            <img className="home_container_child" src={base_image} alt="base_image" />
                            <div className="home_container_child_1">
                                <h1>{t('home_title')}</h1>
                                <p style={{ fontSize: 20, lineHeight: 1.5, lineBreak: 2, marginVertical: "auto" }}>Are you facing challenges accessing essential online services in
                                    {t('home_description')}</p>
                                <p style={{ fontSize: 20, lineHeight: 1.5, lineBreak: 2, marginVertical: "auto" }}>{t('home_description_2')}</p>
                            </div>
                        </div>
                    </Element>

                    <ServicesElement servicesListData={servicesListData} />

                    <ContactElement />

                    <PaymentElement />

                    <About />

                    <TestimonialsElement />

                    <Footer />
                </div>
            )}
        </div>
    );
};

export default Home;