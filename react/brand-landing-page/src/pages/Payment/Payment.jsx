import React from "react";
import "../Payment/Payment.css";

import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';

import CardComponent from "../../components/Card/CardComponent";

const PaymentElement = () => {
    const { t } = useTranslation();
    return (
        <Element name="payments_element" className="payments_element">
            <h1 style={{ marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                {t('payment_title')}
            </h1>
            <div className="payments_container">


                <CardComponent
                    header={{ title: "service 1" }}
                    contentList={[t('pricing_service_one'), t('pricing_service_two'), t('pricing_service_three'), t('pricing_service_four'), t('pricing_service_five')]}
                    footer={t('pricing_price_value')}
                />

                <CardComponent
                    header={{ title: "service 2" }}
                    contentList={[t('pricing_service_one'), t('pricing_service_two'), t('pricing_service_three'), t('pricing_service_four'), t('pricing_service_five')]}
                    footer={t('pricing_price_value')}
                    popular
                />

                <CardComponent
                    header={{ title: "service 3" }}
                    contentList={[t('pricing_service_one'), t('pricing_service_two'), t('pricing_service_three'), t('pricing_service_four'), t('pricing_service_five')]}
                    footer={t('pricing_price_value')}
                />

                <CardComponent
                    header={{ title: "service 4" }}
                    contentList={[t('pricing_service_one'), t('pricing_service_two'), t('pricing_service_three'), t('pricing_service_four'), t('pricing_service_five')]}
                    footer={t('pricing_price_value')}
                />
            </div>
        </Element>
    );
};

export default PaymentElement;