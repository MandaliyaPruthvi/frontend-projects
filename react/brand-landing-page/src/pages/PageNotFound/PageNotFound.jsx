import React from "react";
import { useTranslation } from 'react-i18next';

const PageNotFound = () => {
    const { t } = useTranslation(); // Get translation function

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "centre",
                alignItems: "centre",
            }}
        >
            <h1>
                {t('page_not_found')}
            </h1>
        </div>
    );
};

export default PageNotFound;