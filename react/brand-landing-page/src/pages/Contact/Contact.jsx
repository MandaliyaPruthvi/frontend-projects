import React, { useState } from "react";
import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import "../Contact/Contact.css";
import Loader from '../../components/Loader/Loader';

const ContactElement = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: ''
    });
    const [loading, setLoading] = useState(false);

    const [errors, setErrors] = useState({});

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) {
            newErrors.firstName = t('contact_us_first_name_error');
        }
        if (!formData.lastName.trim()) {
            newErrors.lastName = t('contact_us_last_name_error');
        }
        if (!phoneRegex.test(formData.contactNumber)) {
            newErrors.contactNumber = t('contact_us_contact_number_error');
        }
        if (!emailRegex.test(formData.email)) {
            newErrors.email = t('contact_us_email_error');
        }
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            try {
                const response = await fetch('https://iraninout.com/node_application/api/users', {
                    // const response = await fetch('http://localhost:3000/api/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });

                const data = await response.json();
                if (response.ok) {
                    setLoading(false);
                    setErrors({});
                    setFormData({
                        firstName: '',
                        lastName: '',
                        contactNumber: '',
                        email: ''
                    });
                    alert(t('contact_form_submited'));
                } else {
                    setLoading(false);
                    setErrors({ ...errors, ...{ apiError: `Error: ${data.message}` } });
                }
            } catch (error) {
                setLoading(false);
                setErrors({ ...errors, ...{ apiError: `Error-While Making Call: ${error.message}` } });
            }
        } else {
            setLoading(false);
            setErrors(validationErrors);
        }
    };

    return (
        <Element name="contacts_element" className="contacts_element">
            <div className="container">
                <h2>{t('contact_us_title')}</h2>
                {loading ? <Loader /> : (
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="form-group">
                            <label htmlFor="firstName">{t('contact_us_lbl_first_name')}</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                            />
                            <br />
                            {errors.firstName && <small className="text-danger">{errors.firstName}</small>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">{t('contact_us_lbl_last_name')}</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                            />
                            <br />
                            {errors.lastName && <small className="text-danger">{errors.lastName}</small>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="contactNumber">{t('contact_us_lbl_contact_number')}</label>
                            <input
                                type="text"
                                id="contactNumber"
                                name="contactNumber"
                                value={formData.contactNumber}
                                onChange={handleChange}
                                className={`form-control ${errors.contactNumber ? 'is-invalid' : ''}`}
                            />
                            <br />
                            {errors.contactNumber && <small className="text-danger">{errors.contactNumber}</small>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">{t('contact_us_lbl_email')}</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            />
                            <br />
                            {errors.email && <small className="text-danger">{errors.email}</small>}
                        </div>
                        <button type="submit" className="btn btn-primary">{t('contact_us_btn_submit')}</button>
                    </form>
                )}

            </div>
        </Element>
    );
};

export default ContactElement;