import React from "react";
import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import "../About/About.css";

const About = () => {

    const { t } = useTranslation();

    return (
        <Element name="about_element" className="about_element">
            <h1 className="about_heading">{t('about_us_title')}</h1>
            <div className="about_container">
                <div className="about_details">
                    {t('about_us')}
                </div>
                <div className="about_more_details">
                    {t('about_us')}
                </div>
                <div></div>
            </div>
        </Element>
    );
};

export default About;