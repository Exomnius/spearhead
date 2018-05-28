import React from 'react';
import Loadable from 'react-loadable';

const LoadableContact = Loadable({
  loader: () => import(/* webpackChunkName: 'contact' */ './Contact'),
  loading() {
    return <div>Loading...</div>;
  }
});


export default LoadableContact;
