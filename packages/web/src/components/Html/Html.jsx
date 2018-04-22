import React from 'react';
import PropTypes from 'prop-types';

const Html = ({content}) => (
    <html>
        <head>
            {/* todo: title */}
            {/* todo: meta tags */}
            {/* todo: assets */}
        </head>
        <body>
            <div id="content" dangerouslySetInnerHTML={{ __html: content }} />
        </body>
    </html>
);

Html.propTypes = {
    content: PropTypes.string.isRequired
};

export default Html;