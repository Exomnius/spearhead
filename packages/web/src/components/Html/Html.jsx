import React from 'react';
import PropTypes from 'prop-types';

const Html = ({content, bundles}) => {
  const scripts = bundles.filter(bundle => bundle.file.endsWith('.js'));

  return (
    <html>
    <head>
      {/* todo: title */}
      {/* todo: meta tags */}
      {/* todo: assets */}
    </head>
    <body>
    <div id="react-root" dangerouslySetInnerHTML={{__html: content}}/>

    {/* Javascript */}
    {scripts.map(script => (
      <script key={script.file} src={`/dist/js/${script.file}`}/>
    ))}
    <script src={`/dist/js/main.js`}/>
    </body>
    </html>
  );
};

Html.propTypes = {
  content: PropTypes.string,
  bundles: PropTypes.array
};

export default Html;
