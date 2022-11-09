import React from 'react';
import Helmet from 'react-helmet';

const DynamicTittle = ({ title }) => {
    return (
        <Helmet>
            <title>{title} ~ Video Walah</title>
        </Helmet>
    );
};

export { DynamicTittle };