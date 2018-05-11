import React from 'react';
import PropTypes from 'prop-types';

const Html = ({content, assets}) => (
    <html>
        <head>
            {/* todo: title */}
            {/* todo: meta tags */}
            {/* todo: assets */}

          {assets.javascript && <script src={assets.javascript.main} charSet="UTF-8" />}
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
