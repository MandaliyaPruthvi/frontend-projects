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
                {/* {t('payment_title')} */}
                Pricing
            </h1>
            <div className="payments_container">


                <CardComponent
                    header={{ title: "service 1" }}
                    contentList={["best service", "quick availability", "high customer support", "valid aquisition", "easy refund"]}
                    footer="Price: 100 R"
                />

                <CardComponent
                    header={{ title: "service 2" }}
                    contentList={["best service", "quick availability", "high customer support", "valid aquisition", "easy refund"]}
                    footer="Price: 100 R"
                    popular
                />

                <CardComponent
                    header={{ title: "service 3" }}
                    contentList={["best service", "quick availability", "high customer support", "valid aquisition", "easy refund"]}
                    footer="Price: 100 R"
                />

                <CardComponent
                    header={{ title: "service 4" }}
                    contentList={["best service", "quick availability", "high customer support", "valid aquisition", "easy refund"]}
                    footer="Price: 100 R"
                />
            </div>
        </Element>
    );
};

export default PaymentElement;